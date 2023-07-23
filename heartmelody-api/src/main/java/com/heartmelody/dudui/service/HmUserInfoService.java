package com.heartmelody.dudui.service;

import com.heartmelody.dudui.domain.common.HmResult;
import com.heartmelody.dudui.domain.entity.UserInfo;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

public interface HmUserInfoService {
    //发送手机验证码
    boolean send(String phone, String code);
    HmResult<UserInfo> login(HttpServletRequest request,Map<String, String> map);
    HmResult<String> logout(HttpServletRequest request);
}
