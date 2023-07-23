package com.heartmelody.dudui.domain.entity;

import lombok.Data;

import java.sql.Timestamp;

/**
 * 治疗记录实体类
 */
@Data
public class TreatmentRecords {
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

    /**
     * 开始时间
     */
    private Timestamp createTime;

/**
 ** 时长
 *  */
    private Integer duration;
}
