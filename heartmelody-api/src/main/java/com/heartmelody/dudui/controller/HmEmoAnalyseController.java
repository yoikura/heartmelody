package com.heartmelody.dudui.controller;

import com.alibaba.fastjson.JSON;
import com.heartmelody.dudui.config.OssConfig;
import com.heartmelody.dudui.domain.dto.HmUserInfoDTO;
import com.heartmelody.dudui.domain.dto.emoAnalyse.HmEmoAnalyseDTO;
import com.heartmelody.dudui.domain.entity.emoAnalyse.DiagnosticLogging;
import com.heartmelody.dudui.domain.enums.AnxietyLevelsEnum;
import com.heartmelody.dudui.domain.vo.EmoAnalyseVO;
import com.heartmelody.dudui.domain.vo.EmoFileVO;
import com.heartmelody.dudui.mapper.HmEmoAnalyseMapper;
import com.heartmelody.dudui.service.HmEmoAnalyseService;
import com.heartmelody.dudui.utils.BaiduTextSentimentAnalysisUtil;
import com.heartmelody.dudui.utils.OSSUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.IdentityHashMap;
import java.util.Map;
import java.util.Objects;

@RestController
@RequestMapping("/emoAnalyse")
@CrossOrigin
public class HmEmoAnalyseController {

    @Autowired
    HmEmoAnalyseService emoAnalyseService;

    @Resource
    HmEmoAnalyseMapper emoAnalyseMapper;

    // 上传
    @PostMapping("/EmoUploadUserInfo")
    public Object uploadUserInfo(@Validated  @RequestBody HmEmoAnalyseDTO dto) throws InterruptedException {
        String emoTxt = dto.getEmoTxt();
        Map<String, Object> resultMap = new IdentityHashMap<>();
        String results;
        if(!Objects.equals(dto.getEegFile(), "") || !Objects.equals(dto.getEyeTrackingFile(), "")){
            resultMap.put("emoRes","MILD");
        }else{
            AnxietyLevelsEnum textSentimentAnalysis = null;
            try {
                textSentimentAnalysis = BaiduTextSentimentAnalysisUtil.getTextSentimentAnalysis(emoTxt);
            } catch (IOException e) {
                e.printStackTrace();
            }
            resultMap.put("emoRes",textSentimentAnalysis);
            if(textSentimentAnalysis == AnxietyLevelsEnum.NORMAL){
                results = "正常";
            }else if(textSentimentAnalysis == AnxietyLevelsEnum.MILD){
                results = "轻度焦虑";
            }else if(textSentimentAnalysis == AnxietyLevelsEnum.MODERATE){
                results = "中度焦虑";
            }else{
                results = "重度焦虑";
            }
            emoAnalyseMapper.insertDiagLog(dto.getUid()+"",results,dto.getEmoTxt());
        }
        Thread.sleep(4 * 1000);
        // 交给python去处理
        return JSON.toJSONString(resultMap);
    }

    /**
     * 通过uid获取用户上传的文件名，并且返回文件名
     * 文件存储在OSS系统中。
     * */
    @PostMapping("/getEmoFile")
    public EmoFileVO getEmoFile(@RequestBody Map<String,Object> mp){
        Object uid = mp.get("uid");
        Object type = mp.get("type");
        return emoAnalyseService.getEmoFile((String) type,(String) uid);
    }



}
