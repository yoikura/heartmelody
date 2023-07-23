package com.heartmelody.dudui.service.impl;

import com.heartmelody.dudui.domain.entity.MusicInfo;
import com.heartmelody.dudui.mapper.HmMusicUploadMusicMapper;
import com.heartmelody.dudui.service.HmMusicUploadMusicService;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
@Service
public class HmMusicUploadMusicImpl implements HmMusicUploadMusicService {
    @Resource
    HmMusicUploadMusicMapper hmMusicUploadMusicMapper;
    @Override
    public int insertMusicInfo(MusicInfo musicInfo){
        return hmMusicUploadMusicMapper.insertMusicInfo(musicInfo);
    }
    @Override
    public int findMusicTypeByName(String name){
        return hmMusicUploadMusicMapper.findMusicTypeByName(name);
    }
    @Override
    public int insertMusicType(int mid,int mtid){
        return hmMusicUploadMusicMapper.insertMusicType(mid,mtid);
    }

}
