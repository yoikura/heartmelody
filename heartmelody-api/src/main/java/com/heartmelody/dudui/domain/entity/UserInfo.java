package com.heartmelody.dudui.domain.entity;

import lombok.Data;

/**
 *用户信息实体类
 */
@Data
 public class UserInfo {
 /*
 用户id
 */
private Integer uid;
/*
 用户名
 */
private String userName;
/*
 手机号
 */
private String tel;
 /*
  头像地址
  */
 private String avatar;
}
