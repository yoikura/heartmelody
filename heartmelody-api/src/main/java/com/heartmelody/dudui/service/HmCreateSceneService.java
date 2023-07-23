package com.heartmelody.dudui.service;

import com.heartmelody.dudui.domain.dto.HmScenSetFavoriteSceneDTO;
import com.heartmelody.dudui.domain.entity.SceneInfo;
import com.heartmelody.dudui.domain.entity.SceneType;

import java.util.List;

public interface HmCreateSceneService {
    int setFavoriteScene(HmScenSetFavoriteSceneDTO dto);
    int insertNewScene(SceneInfo sceneInfo);
    List<SceneType> getAllSceneType();
    List<SceneInfo> getSenceByType(Integer stid,Integer uid);
    SceneInfo getSenceInfo(Integer sid,Integer uid);
}
