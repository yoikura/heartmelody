package com.heartmelody.dudui.domain.entity;

import lombok.Data;

/**
 * 场景类型实体类
 */
@Data
public class SceneType {
    /**
     * 场景类型id
     */
    private Integer stid;

    /**
     * 类型名称
     */
    private String typeName;

    /**
     * 类型备注
     */
    private String remark;

    /**
     * 封面图片
     * */
    private String avatar;

}
