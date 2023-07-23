package com.heartmelody.dudui.domain.vo;

import lombok.Data;

import java.sql.Timestamp;

@Data
public class DiagnosticLoggingVO {
    /*
 诊断记录id
 */
    private Integer did;
    /*
     用户id
     */
    private Integer uid;
    private String userName;
    /*
     创建时间
     */
    private String createTime;
    /*
     诊断结果
     */
    private String results;
    /*
     脑机测试数据地址
     */
    private Integer eid;
    /*
     眼动仪测试数据地址
     */
    private Integer etid;
    /*
     场景描述
     */
    private String description;
    private String data;
}
