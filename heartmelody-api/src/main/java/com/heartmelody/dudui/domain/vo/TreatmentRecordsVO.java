package com.heartmelody.dudui.domain.vo;

import lombok.Data;

import java.sql.Timestamp;

@Data
public class TreatmentRecordsVO {
    /**
     * 治疗记录id
     */
    private Integer rid;

    /**
     * 用户id
     */
    private Integer uid;

    /**
     * 场景id
     */
    private Integer sid;

    private String sname;
    private String cover;
    private boolean isFavorite;
    private String userName;
    private String results;


    /**
     * 开始时间
     */
    private String createTime;

    /**
     ** 时长
     *  */
    private Integer duration;
}
