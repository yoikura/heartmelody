package com.heartmelody.dudui.service;

import com.heartmelody.dudui.domain.entity.MusicInfo;
import org.springframework.stereotype.Service;

@Service
public interface HmMusicUploadMusicService {
    int insertMusicInfo(MusicInfo musicInfo);
    int findMusicTypeByName(String name);
    int insertMusicType(int mid,int mtid);
}
