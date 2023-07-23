package com.heartmelody.dudui.mapper;

import com.heartmelody.dudui.domain.entity.SceneInfo;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface HmRecommendMapper {
    List<SceneInfo> getBySids(List<String> ids);
}
