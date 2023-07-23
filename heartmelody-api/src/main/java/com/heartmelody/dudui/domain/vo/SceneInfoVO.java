package com.heartmelody.dudui.domain.vo;

import lombok.Data;

import java.sql.Timestamp;

@Data
public class SceneInfoVO {
    /**
     * 场景id
     */
    private Integer sid;

    /**
     * 场景名称
     */
    private String sname;

    /**
     * 创建时间
     */
    private Timestamp createTime;

    /**
     * 音乐id
     */
    private Integer mid;

    /**
     * 文件地址
     */
    private String address;

    /**
     * 时长
     */
    private Integer duration;

    /**
     * 格式
     */
    private String format;

    /**
     * 大小
     */
    private Double size;

    /**
     * 播放设备
     */
    private String equipment;

    /**
     * 场景描述
     */
    private String description;

    /**
     * 封面图地址
     */
    private String cover;
    private boolean isFavorite;
}
