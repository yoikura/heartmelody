package com.heartmelody.dudui.domain.entity;

import lombok.Data;

import java.sql.Timestamp;

/**
 * 场景信息实体类
 */
@Data
public class SceneInfo {
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
    private String createTime;

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

    /**
     * 是否喜欢
     * 1 喜欢
     * 0 不喜欢
     * */
    private Boolean isFavorite;
    //适合的焦虑程度，用于推荐场景（0：正常；1：轻度焦虑；2：中度焦虑；3：重度焦虑）
    private Integer anxietyLevels;

    // 决定的关键词
    private String decide;

    // type风格类型
    private Integer type;

    // 音乐种类
    private Integer musicKid;

    // 场景类型的id
    private Integer stid;
}
