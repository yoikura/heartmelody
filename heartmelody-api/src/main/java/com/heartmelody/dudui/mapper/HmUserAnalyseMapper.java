package com.heartmelody.dudui.mapper;

import com.heartmelody.dudui.domain.entity.SceneInfo;
import com.heartmelody.dudui.domain.entity.SceneType;
import org.apache.ibatis.annotations.MapKey;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface HmUserAnalyseMapper {

    List<Map<String,Object>> getDiagnoseAnalyse(String uid,String startTime,String endTime);

    List<Map<String,Object>> getDiseaseAnalyse(String uid,String startTime,String endTime);

    List<SceneType> getAllSceneType();

    List<SceneInfo> getAllSceneInfo();

    // 防止上面方法其他地方有调用，这个方法是只选取type = 3的场景
    List<SceneInfo> getAllSceneInfoP();

    int insertIntoDayPlan(Integer uid,Integer day,String time,String stid,String sid);

    Map<String,Object> selectDayPlan(String uid,Integer day);

    SceneType getSceneTypeByid(String stid);

    SceneInfo getSceneByBy(String sid);

    int deleteByUid(String uid);
}
