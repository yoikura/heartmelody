package com.heartmelody.dudui.controller;

import com.heartmelody.dudui.config.OssConfig;
import com.heartmelody.dudui.domain.entity.MusicInfo;
import com.heartmelody.dudui.domain.entity.MusicType;
import com.heartmelody.dudui.domain.entity.SceneInfo;
import com.heartmelody.dudui.domain.entity.SceneType;
import com.heartmelody.dudui.mapper.HmCreateSceneMapper;
import com.heartmelody.dudui.mapper.HmMusicUploadMusicMapper;
import com.heartmelody.dudui.utils.OSSUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;
import java.io.IOException;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/uploadFile")
public class FileUploadController {

    @Resource
    OssConfig ossConfig;
    @Autowired
    HmCreateSceneMapper hmCreateSceneMapper;
    @Autowired
    HmMusicUploadMusicMapper hmMusicUploadMusicMapper;

    @GetMapping("/getSceneType")
    public List<SceneType> getSceneType() {
        // 模拟返回视频类型列表
        return hmCreateSceneMapper.getAllSceneType();
    }

    @GetMapping("/getMusicType")
    public List<MusicType> getMusicType() {
        // 模拟返回音乐类型列表
        return hmMusicUploadMusicMapper.getAllMusicTypes();
    }
    @PostMapping("/uploadFile")
    public ResponseEntity<String> uploadFile(MultipartFile videoFile, MultipartFile videoCoverFile,String sceneText,MultipartFile musicFile,int videoType,int musicType,int hasLyrics,String lyricsText,int anxietyLevels,String decide,int type,int musicKid) {
        try {
            int sid = -1;
            String videoUrl = null;
            String musicUrl = null;
            String videoCoverUrl = null;
            MusicInfo musicInfo = new MusicInfo();
            SceneInfo sceneInfo = new SceneInfo();
            int mid = 1;
            if(!musicFile.isEmpty()){
                // 上传音乐文件
                String musicFileName = musicFile.getOriginalFilename();
                musicUrl = OSSUtil.upload(ossConfig,musicFile,"music/mp3data/",musicFileName);
                musicInfo.setMname(removeFileExtension(musicFileName));
                musicInfo.setFormat(getStringAfterSlash(musicFile.getContentType()));
                musicInfo.setSize(bytesToMegabytes(musicFile.getSize()));
                musicInfo.setAddress(musicUrl);
                if(hasLyrics==1){
                    musicInfo.setHaveLyrics(1);
                    if(lyricsText!=null){
                        musicInfo.setLyrics(lyricsText);
                    }
                }else {
                    musicInfo.setHaveLyrics(0);
                }
                mid = hmMusicUploadMusicMapper.insertMusicInfo(musicInfo);
                hmMusicUploadMusicMapper.insertMusicType(mid,musicType);
            }
            if(!videoCoverFile.isEmpty()){
                String videoCoverFileName = videoCoverFile.getOriginalFilename();
                videoCoverUrl = OSSUtil.upload(ossConfig,videoCoverFile,"scene/scenecover3/",videoCoverFileName);
            }
            if(!videoFile.isEmpty()){
                // 上传视频文件
                String videoFileName = videoFile.getOriginalFilename();
                videoUrl = OSSUtil.upload(ossConfig,videoFile,"scene/scene3/",videoFileName);
                sceneInfo.setSname(removeFileExtension(videoFileName));
                sceneInfo.setMid(mid);
                sceneInfo.setDuration(60);
                sceneInfo.setAddress(videoUrl);
                sceneInfo.setFormat(getStringAfterSlash(videoFile.getContentType()));
                sceneInfo.setSize(bytesToMegabytes(videoFile.getSize()));
                sceneInfo.setEquipment("VR");
                sceneInfo.setDescription(sceneText);
                sceneInfo.setCover(videoCoverUrl);

                sceneInfo.setDecide(decide);
                sceneInfo.setType(type);
                sceneInfo.setMusicKid(musicKid);
                hmCreateSceneMapper.insertNewScene(sceneInfo);
                sid = sceneInfo.getSid();
                hmCreateSceneMapper.insertSceneType(sid,videoType);
                if(anxietyLevels!=0){
                    hmCreateSceneMapper.updateSenceAnxietylevels(sid,anxietyLevels);
                }
            }
            if(sid!=-1){
                // 返回成功的响应
                return ResponseEntity.ok("文件上传成功！");
            }
            return ResponseEntity.ok("文件上传失败！");
        } catch (IOException e) {
            e.printStackTrace();
            // 返回错误的响应
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("文件上传失败！");
        }
    }
    String removeFileExtension(String fileName) {
        int lastDotIndex = fileName.lastIndexOf('.');
        if (lastDotIndex != -1) {
            return fileName.substring(0, lastDotIndex);
        }
        return fileName;
    }
    String getStringAfterSlash(String str) {
        String[] parts = str.split("/");
        if (parts.length > 1) {
            return parts[1];
        }
        return "";
    }
    double bytesToMegabytes(long bytes) {
        return Math.round((double) bytes / (1024 * 1024) * 100.0) / 100.0;
    }
}

