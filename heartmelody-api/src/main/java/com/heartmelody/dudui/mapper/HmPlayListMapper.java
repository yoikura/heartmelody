package com.heartmelody.dudui.mapper;

import com.heartmelody.dudui.domain.dto.HmUserInfoDTO;
import com.heartmelody.dudui.domain.entity.PlayList;
import com.heartmelody.dudui.domain.entity.SceneInfo;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface HmPlayListMapper {
    Integer insert(PlayList dto);
    List<SceneInfo> selectList(HmUserInfoDTO dto);
    Integer delete(PlayList dto);
    PlayList getById(PlayList dto);
}
