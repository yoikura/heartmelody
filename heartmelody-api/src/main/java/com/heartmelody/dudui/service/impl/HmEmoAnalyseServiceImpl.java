package com.heartmelody.dudui.service.impl;

import com.heartmelody.dudui.config.OssConfig;
import com.heartmelody.dudui.domain.dto.HmUserInfoDTO;
import com.heartmelody.dudui.domain.dto.emoAnalyse.HmEmoAnalyseDTO;
import com.heartmelody.dudui.domain.entity.emoAnalyse.DiagnosticLogging;
import com.heartmelody.dudui.domain.vo.EmoAnalyseVO;
import com.heartmelody.dudui.domain.vo.EmoFileVO;
import com.heartmelody.dudui.mapper.HmEmoAnalyseMapper;
import com.heartmelody.dudui.service.HmEmoAnalyseService;
import com.heartmelody.dudui.utils.OSSUtil;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class HmEmoAnalyseServiceImpl implements HmEmoAnalyseService {
    @Resource
    OssConfig ossConfig;

    @Resource
    HmEmoAnalyseMapper emoAnalyseMapper;

    /**
     * 默认oss中存储的
     * 用户uid + 8位日期 + 时间戳
     * */
    @Override
    public EmoFileVO getEmoFile(String type, String uid) {
        List<String> emoFile = OSSUtil.getEmoFile("user/" + type + "/" + uid + "-", ossConfig);
        EmoFileVO emoFileVO = new EmoFileVO();
        emoFileVO.setFileName(emoFile).setUserId(uid);
        return emoFileVO;
    }
}
