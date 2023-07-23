package com.heartmelody.dudui.service;


import com.heartmelody.dudui.domain.dto.HmUserInfoDTO;
import com.heartmelody.dudui.domain.dto.emoAnalyse.HmEmoAnalyseDTO;
import com.heartmelody.dudui.domain.vo.EmoFileVO;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

public interface HmEmoAnalyseService {


    EmoFileVO getEmoFile(String type, String uid);
}
