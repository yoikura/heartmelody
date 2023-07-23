package com.heartmelody.dudui.mapper;

import com.heartmelody.dudui.domain.entity.MusicInfo;
import com.heartmelody.dudui.domain.entity.MusicType;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface HmMusicUploadMusicMapper {
    int insertMusicInfo(MusicInfo musicInfo);
    int findMusicTypeByName(String name);
    List<MusicType> getAllMusicTypes();
    int insertMusicType(int mid,int mtid);
}
