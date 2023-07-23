package com.heartmelody.dudui.mapper;

import com.heartmelody.dudui.domain.dto.HmScenSetFavoriteSceneDTO;
import com.heartmelody.dudui.domain.entity.FavoriteScene;
import com.heartmelody.dudui.domain.entity.SceneInfo;
import com.heartmelody.dudui.domain.entity.SceneType;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface HmCreateSceneMapper {

    FavoriteScene findFavoriteScene(HmScenSetFavoriteSceneDTO dto);
    int deleteFavoriteScene(HmScenSetFavoriteSceneDTO dto);
    int insertFavoriteScene(HmScenSetFavoriteSceneDTO dto);
    int insertNewScene(SceneInfo sceneInfo);
    List<SceneType> getAllSceneType();
    List<SceneInfo> getAllScene();
    List<SceneInfo> getSenceByType(Integer stid,Integer uid);
    SceneInfo getSenceInfo(Integer sid,Integer uid);
    int insertSceneType(Integer sid,Integer stid);
    int updateSenceAnxietylevels(int sid,int levels);

    int updateScene(Integer sid,String desc);
    List<SceneInfo> getAllSceneXieShi(Integer musicKid);
    List<SceneInfo> getAllSceneDongman(Integer musicKid);

    int getLastInsertId();

    int insertTreatmentRecord(Integer sid,Integer uid,Integer duration);

}
