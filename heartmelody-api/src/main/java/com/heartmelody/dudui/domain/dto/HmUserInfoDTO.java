package com.heartmelody.dudui.domain.dto;

import lombok.Data;

@Data
public class HmUserInfoDTO {
    /**
     * 用户id
     */
    private String uid;
    /**
     * 用户名
     */
    private String userName;
    /**
     * 手机号
     */
    private String tel;
    /**
     * 头像
     */
    private String avatar;
}
