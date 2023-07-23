package com.heartmelody.dudui.service.impl;

import com.heartmelody.dudui.domain.dto.HmScenSetFavoriteSceneDTO;
import com.heartmelody.dudui.domain.entity.FavoriteScene;
import com.heartmelody.dudui.domain.entity.SceneInfo;
import com.heartmelody.dudui.domain.entity.SceneType;
import com.heartmelody.dudui.mapper.HmCreateSceneMapper;
import com.heartmelody.dudui.service.HmCreateSceneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class HmCreateSceneServiceImpl implements HmCreateSceneService {

    @Resource
    HmCreateSceneMapper hmCreateSceneMapper;
    @Override
    public int setFavoriteScene(HmScenSetFavoriteSceneDTO dto){
//        FavoriteScene favoriteScene = null;
//        favoriteScene = hmCreateSceneMapper.findFavoriteScene(dto);
//        int result = 0;
//        if(favoriteScene==null){
//            result = hmCreateSceneMapper.insertFavoriteScene(dto);
//        }else{
//            result = hmCreateSceneMapper.deleteFavoriteScene(dto);
//        }
        int result = 0;
        if(dto.isFavorite()){
            result = hmCreateSceneMapper.insertFavoriteScene(dto);
        }else{
            result = hmCreateSceneMapper.deleteFavoriteScene(dto);
        }
        return result;
    }
    @Override
    public int insertNewScene(SceneInfo sceneInfo){
        return hmCreateSceneMapper.insertNewScene(sceneInfo);
    }
    @Override
    public List<SceneType> getAllSceneType(){
        return hmCreateSceneMapper.getAllSceneType();
    }
    @Override
    public List<SceneInfo> getSenceByType(Integer stid, Integer uid){
        return hmCreateSceneMapper.getSenceByType(stid,uid);
    }
    @Override
    public SceneInfo getSenceInfo(Integer sid,Integer uid){
        return hmCreateSceneMapper.getSenceInfo(sid,uid);
    }
}
