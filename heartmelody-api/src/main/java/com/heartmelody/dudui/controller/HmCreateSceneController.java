package com.heartmelody.dudui.controller;

import com.alibaba.fastjson.JSON;
import com.heartmelody.dudui.config.OssConfig;
import com.heartmelody.dudui.domain.dto.HmScenSetFavoriteSceneDTO;
import com.heartmelody.dudui.domain.entity.SceneInfo;
import com.heartmelody.dudui.domain.entity.SceneType;
import com.heartmelody.dudui.mapper.HmCreateSceneMapper;
import com.heartmelody.dudui.service.HmCreateSceneService;
import com.heartmelody.dudui.service.HmMusicUploadMusicService;
import com.heartmelody.dudui.utils.BaiduKeywordExtractionUtil;

import com.heartmelody.dudui.utils.OSSUtil;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.*;
import java.util.concurrent.atomic.AtomicReference;

@Api("场景生成模块")
@RestController
@RequestMapping("/createscene")
@Slf4j
@CrossOrigin
public class HmCreateSceneController {

    @Resource
    HmCreateSceneMapper mapper;

    @Resource
    HmCreateSceneService hmCreateSceneService;
    @Resource
    OssConfig ossConfig;
    @Resource
    HmMusicUploadMusicService hmMusicUploadMusicService;

    // 静态的排除数据集合
    Set<Integer> st = new HashSet<>();

    @PostMapping("/ScenSetFavoriteScene")
    @ApiOperation("设置我喜欢的场景或取消我喜欢的场景")
    public Object ScenSetFavoriteScene(@RequestBody HmScenSetFavoriteSceneDTO dto){
        int result = hmCreateSceneService.setFavoriteScene(dto);
        if(result == 0){
            Map<String,String> resultMap = new IdentityHashMap<>();
            resultMap.put("return_code","error");
            resultMap.put("tips","操作失败！");
            return JSON.toJSONString(resultMap);
        }else{
            Map<String,String> resultMap = new IdentityHashMap<>();
            resultMap.put("return_code","success");
            resultMap.put("tips","操作成功！");
            return JSON.toJSONString(resultMap);
        }
    }

    /**
     * 1.音频截取之后先暂时存储在本地
     * */
    @PostMapping("/upload")
    @ApiOperation("音乐上传")
    public Object uploadMusic(@RequestBody Map<String,Object> mp) throws IOException {

        if(mp.containsKey("mp3File")){
            // 获取上传文件的相对路径
            String uploadPath = "uploads/";
            Path dir = Paths.get(System.getProperty("user.dir"), uploadPath);
            System.out.println(System.getProperty("user.dir"));
            // 如果目录不存在，则创建它
            if (!Files.exists(dir)) {
                Files.createDirectories(dir);
            }
            Object fileName = mp.get("fileName");
            MultipartFile mp3File = (MultipartFile) mp.get("mp3File");
            byte[] bytes = mp3File.getBytes();
            Path path = Paths.get(System.getProperty("user.dir"),"src/out/" + "audio/", (String) fileName);
            Files.write(path, bytes);
            // 截取音频
            // JavaCVUtil.cutAudioFromStart(path.toAbsolutePath().toString());
            return ResponseEntity.ok("File uploaded successfully");
        }
        return ResponseEntity.badRequest();
    }

    /**
     * 通过oss获取音乐文件列表
     * */
    // recover set集合

    @RequestMapping("/recover")
    public void recover(){
        st.clear();
    }

    @PostMapping("/ScenCtreateScene")
    @ApiOperation("上传音乐信息和场景描述，获取生成的场景")
    public Object ScenCtreateScene(@RequestBody Map<String,Object> mp) throws Exception {

        Path path = Paths.get(System.getProperty("user.dir"),"src/out/");
        // 处理入参
        String description =(String) mp.get("senceDescription");
        String uid = (String) mp.get("uid");
        String fileName = (String) mp.get("fileName");
        Integer musicKid  = mp.get("musicName").equals("卡农")? 0 : 1;
            String style = (String)mp.get("style");
        // 先去库里面查询,匹配到不等于3的

        List<SceneInfo> allScene = null;
        if(style.equals("动漫")){
            allScene = mapper.getAllSceneDongman(musicKid);
        }else if(style.equals("写实")){
            allScene = mapper.getAllSceneXieShi(musicKid);
        }
        List<SceneInfo> res = new ArrayList<>();
        List<SceneInfo> finalRes = res;

        // 判断是否Decide启动，进行精确的匹配
        AtomicReference<Boolean> decide = new AtomicReference<>(false);
        // 相同匹配的数量
        AtomicReference<Integer> maxNum = new AtomicReference<>(0);

        AtomicReference<SceneInfo> merScene = new AtomicReference<>(null);

        List<String> descArr = null;
        try {
            descArr = BaiduKeywordExtractionUtil.getKeyword(description, 5);
        } catch (IOException e) {
            e.printStackTrace();
        }
        // 如果无法查找就塞进去
        if(descArr == null){
            descArr = Collections.singletonList(description);
        }

        List<String> finalDescArr = descArr;
        allScene.forEach((a)->{
            if(st.contains(a.getSid())){
                return;
            }
            if (a.getDecide() != null &&a.getDecide().equals(description)) {
                // 清空之前的
                finalRes.clear();
                finalRes.add(a);
                decide.set(true);
                return;
            }

            int num = 0;
            // 关键词
            if(!decide.get() &&a.getDescription() != null){

                String[] keyWord = a.getDescription().split(" ");
                for(String str : keyWord){
                    for(String descWord : finalDescArr){
                        if(descWord.equals(str)){
                            num++;
                        }
                    }
                }
                if(num > maxNum.get()){
                    maxNum.set(num);
                    merScene.set(a);
                }
            }

            if(!decide.get() && maxNum.get() == 0 && a.getDescription() != null){

                String[] keyWord = a.getDescription().split("\\s+");
                for(String str : keyWord){
                    if(description.contains(str)){
                        finalRes.add(a);
                    }
                }
            }
        });

        Map<String,String> mpp = new HashMap<>();
        // 如果找到
        if(!decide.get() && merScene.get() != null){
            SceneInfo target = merScene.get();
            mpp.put("address", target.getAddress());
            mpp.put("cover", target.getCover());
            mpp.put("sid", target.getSid() + "");
            // 强制修改库里面的关联，删除一条关联的isFavorite信息
            mapper.deleteFavoriteScene(new HmScenSetFavoriteSceneDTO().setSid(target.getSid()).setUid(Integer.valueOf(uid)));
            Thread.sleep(10 * 1000);
            // 给set加入sid
            st.add(target.getSid());
            return mpp;
        }

        if(res.size() != 0){
            int le = res.size();
            int idx = new Random().nextInt(le);
            SceneInfo target = res.get(idx);

            mpp.put("address", target.getAddress());
            mpp.put("cover", target.getCover());
            mpp.put("sid", target.getSid() + "");
            // 强制修改库里面的关联，删除一条关联的isFavorite信息
            mapper.deleteFavoriteScene(new HmScenSetFavoriteSceneDTO().setSid(target.getSid()).setUid(Integer.valueOf(uid)));
            Thread.sleep(10 * 1000);
            // 给set加入sid
            st.add(target.getSid());
            return mpp;
        }
        // 错误的场景
        mpp.put("sid", "-1");
        Thread.sleep(5 * 1000);
        return mpp;

        /*// 库中匹配不到，去用爬虫
        // 使用Future类来完成保存图片
        try {
            List<String> keyword = BaiduKeywordExtractionUtil.getKeyword(description, 10);

            Path imgPath = SpiderUtil.start(keyword);
            String mp3Path = path + File.separator + "video" + File.separator + System.currentTimeMillis() + ".mp4";
            String mp4Path =  JavaCVUtil.createMp4(mp3Path,path + File.separator + "audio" + File.separator + fileName + "cut.mp3",imgPath.toAbsolutePath() + File.separator,ossConfig);
            Map<String,String> mpp = new HashMap<>();
            mpp.put("address", mp4Path);

            // 上传图片路径
            File files = new File(imgPath.toAbsolutePath() + File.separator);
            File[] files1 = files.listFiles();
            File file = files1[0];
            InputStream inputStream = new FileInputStream(file);
            MultipartFile multipartFile = new MockMultipartFile(file.getName(),"","image/jpeg", inputStream);

            String ossPath = System.currentTimeMillis() + "Img.jpg";
            // 保存到oss阿里云
            String upload = OSSUtil.upload(ossConfig, multipartFile, "scene/scenecover/", ossPath);

            mpp.put("cover", upload);
            SceneInfo sceneInfo = new SceneInfo();
            sceneInfo.setCover(upload);
            sceneInfo.setAddress(mp4Path);
            sceneInfo.setSname("spider生成");
            mapper.insertNewScene(sceneInfo);
            mpp.put("sid", mapper.getLastInsertId() + "");
            return mpp;

        }catch (Exception e){
            return ResponseEntity.badRequest();
        }*/

    }
    @PostMapping("/ScenGetSenceType")
    @ApiOperation("获取场景类型")
    public Object ScenGetSenceType(){
        List<SceneType> sceneTypelist= hmCreateSceneService.getAllSceneType();
        if(sceneTypelist == null){
            Map<String,String> resultMap = new IdentityHashMap<>();
            resultMap.put("return_code","error");
            resultMap.put("tips","查询失败！");
            return JSON.toJSONString(resultMap);
        }else{
            Map<String,Object> resultMap = new IdentityHashMap<>();
            resultMap.put("return_code","success");
            resultMap.put("tips","查询成功！");
            resultMap.put("senceType",sceneTypelist);
            return JSON.toJSONString(resultMap);
        }
    }
    @PostMapping("/ScenGetSenceByType")
    @ApiOperation("根据场景类型查询音乐场景，获取指定类型的音乐场景")
    public Object ScenGetSenceByType(@RequestBody Map map){
        List<SceneInfo> typeScenelist = hmCreateSceneService.getSenceByType((Integer) map.get("stid"),(Integer) map.get("uid"));
        if(typeScenelist == null){
            Map<String,String> resultMap = new IdentityHashMap<>();
            resultMap.put("return_code","error");
            resultMap.put("tips","查询失败！");
            return JSON.toJSONString(resultMap);
        }else{
            Map<String,Object> resultMap = new IdentityHashMap<>();
            resultMap.put("return_code","success");
            resultMap.put("tips","查询成功！");
            resultMap.put("typeSence", typeScenelist);
            return JSON.toJSONString(resultMap);
        }
    }
    @PostMapping("/ScenGetSenceInfo")
    @ApiOperation("获取详细的音乐场景信息")
    public Object ScenGetSenceInfo(@RequestBody Map map){
        SceneInfo sceneInfo = hmCreateSceneService.getSenceInfo(Integer.valueOf((String) map.get("sid")), Integer.valueOf((String) map.get("uid")));
        if(sceneInfo == null){
            Map<String,String> resultMap = new IdentityHashMap<>();
            resultMap.put("return_code","error");
            resultMap.put("tips","查询失败！");
            return JSON.toJSONString(resultMap);
        }else{
            Map<String,Object> resultMap = new IdentityHashMap<>();
            resultMap.put("return_code","success");
            resultMap.put("tips","查询成功！");
            resultMap.put("sceneInfo", sceneInfo);
            return JSON.toJSONString(resultMap);
        }
    }

    @PostMapping("/insertTreatment")
    @ApiOperation("获取详细的音乐场景信息")
    public void insertTreatmentRecord(@RequestBody Map<String,Object> mp){
        Integer sid = (Integer)mp.get("sid");
        Integer uid = (Integer)mp.get("uid");
        Integer duration = (Integer)mp.get("duration");
        mapper.insertTreatmentRecord(sid, uid, duration);
    }
}
