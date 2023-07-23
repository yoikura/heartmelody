package com.heartmelody.dudui.domain.entity;

import lombok.Data;

/**
 * 音乐信息实体类
 */
@Data
public class MusicInfo {
    /**
     * 音乐id
     */
    private Integer mid;

    /**
     * 音乐名称
     */
    private String mname;

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
     * 文件地址
     */
    private String address;

    /**
     * 是否有歌词
     */
    private Integer haveLyrics;

    /**
     * 歌词
     */
    private String lyrics;

    /**
     * 音乐节奏信息
     */
    private String rhythmInfo;

    /**
     * 音乐情感标签
     */
    private String sentimentLabel;

    /**
     * 音乐音量大小
     */
    private String volumeLevel;

    /**
     * 音乐音量信息
     */
    private String volumeInfo;

    /**
     * 音乐节奏速度
     */
    private String rhythmSpeed;

    /**
     * 适用于何种焦虑程度
     */
    private String anxietyLevels;

}
