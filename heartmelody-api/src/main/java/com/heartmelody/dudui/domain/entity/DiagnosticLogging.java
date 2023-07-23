package com.heartmelody.dudui.domain.entity;

import lombok.Data;

import java.sql.Timestamp;

/*
 *诊断记录实体类
 */
@Data
 public class DiagnosticLogging {
 /*
 诊断记录id
 */
private Integer did;
/*
 用户id
 */
private Integer uid;
/*
 创建时间
 */
private Timestamp createTime;
/*
 诊断结果
 */
private String results;
/*
 脑机测试数据地址
 */
private String brainMachine;
/*
 眼动仪测试数据地址
 */
private String eyeTracker;
/*
 场景描述
 */
private String description;
}
