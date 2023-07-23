package com.heartmelody.dudui.domain.entity;

import lombok.Data;

/**
 * 音乐类型实体类
 */
@Data
public class MusicType {
    /**
     * 音乐类型id
     */
    private Integer mtid;

    /**
     * 类型名称
     */
    private String typeName;

    /**
     * 类型备注
     */
    private String remark;
}
