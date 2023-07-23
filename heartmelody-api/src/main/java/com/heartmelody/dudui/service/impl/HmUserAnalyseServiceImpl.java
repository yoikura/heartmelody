package com.heartmelody.dudui.service.impl;

import com.heartmelody.dudui.domain.entity.SceneInfo;
import com.heartmelody.dudui.domain.entity.SceneType;
import com.heartmelody.dudui.mapper.HmUserAnalyseMapper;
import com.heartmelody.dudui.service.HmUserAnalyseService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class HmUserAnalyseServiceImpl implements HmUserAnalyseService {

    @Resource
    HmUserAnalyseMapper mapper;

    @Override
    public Object getDiagnoseAnalyse(String uid, String startTime, String endTime) {
        List<Map<String, Object>> list = mapper.getDiagnoseAnalyse(uid, startTime, endTime);
        Map<String,List<Object>> mp = new HashMap<>();
        List<Object> data = new ArrayList<>();

        List<Object> date = new ArrayList<>();
        for(Map<String,Object> instance : list){
            data.add(instance.get("data"));
            date.add(instance.get("date"));
        }
        mp.put("data", data);
        mp.put("date", date);
        return mp;
    }

    @Override
    public Object getDiseaseAnalyse(String uid, String startTime, String endTime) {
        return mapper.getDiseaseAnalyse(uid,startTime,endTime);
    }

    @Override
    public Map<String, List<Object>> getDayPlan(String uid, String beginTime, String endTime) {
        Map<String,List<Object>> mp = new HashMap<>();
        List<Object> typeList = new ArrayList<>();
        List<Object> SceneList = new ArrayList<>();
        List<Object> timeList = new ArrayList<>();
        String[] time = {"20:00-20:30","20:00-21:00","20:30-21:00","20:30-21:30","21:00-21:30","21:00-22:00"};

        List<SceneType> allSceneType = mapper.getAllSceneType();
        // 获取type = 3的场景
        List<SceneInfo> allSceneInfo = mapper.getAllSceneInfoP();
        beginTime = beginTime.replaceAll("-", "");
        endTime = endTime.replaceAll("-", "");
        Random random = new Random(System.currentTimeMillis());
        for(int i = 0;i < 7;i ++){
            SceneType e = allSceneType.get(random.nextInt(allSceneType.size()));
            typeList.add(e);
            Integer targetStid = e.getStid();
            // 过滤类型
            List<SceneInfo> collect = allSceneInfo.stream().filter((a) -> {
                if (a.getStid() == targetStid) {
                    return true;
                }
                return false;
            }).collect(Collectors.toList());
            SceneInfo e1 = null;
            if(collect.size() == 0){
                e1 = allSceneInfo.get(random.nextInt(allSceneInfo.size()));
            }else{
                // 添加相应类型的场景
                e1 = collect.get(random.nextInt(collect.size()));
            }
            SceneList.add(e1);
            timeList.add(time[random.nextInt(time.length)]);
        }
        mp.put("typeList",typeList);
        mp.put("sceneList",SceneList);
        mp.put("time",timeList);
        return mp;
    }

    @Override
    public Map<String, List<Object>> getDayPlanByDB(String uid, String beginTime, String endTime) {
        Map<String,List<Object>> mp = new HashMap<>();
        List<Object> typeList = new ArrayList<>();
        List<Object> SceneList = new ArrayList<>();
        List<Object> timeList = new ArrayList<>();
        String[] time = {"20:00-20:30","20:00-21:00","20:30-21:00","20:30-21:30","21:00-21:30","21:00-22:00"};

        List<SceneType> allSceneType = mapper.getAllSceneType();
        // 获取type = 3的场景
        List<SceneInfo> allSceneInfo = mapper.getAllSceneInfoP();
        beginTime = beginTime.replaceAll("-", "");
        endTime = endTime.replaceAll("-", "");
        Random random = new Random(System.currentTimeMillis());
        for(int i = 0;i < 7;i ++){

            Map<String, Object> resMp = mapper.selectDayPlan(uid, i);
            // 库里面没有数据，我们就随机生成
            if(resMp == null) {
                SceneType e = allSceneType.get(random.nextInt(allSceneType.size()));
                typeList.add(e);
                Integer targetStid = e.getStid();
                // 过滤类型
                List<SceneInfo> collect = allSceneInfo.stream().filter((a) -> {
                    if (a.getStid() == targetStid) {
                        return true;
                    }
                    return false;
                }).collect(Collectors.toList());
                SceneInfo e1 = null;
                if(collect.size() == 0){
                    e1 = allSceneInfo.get(random.nextInt(allSceneInfo.size()));
                }else{
                    // 添加相应类型的场景
                    e1 = collect.get(random.nextInt(collect.size()));
                }
                SceneList.add(e1);
                timeList.add(time[random.nextInt(time.length)]);

                // 同时数据添加入库
                mapper.insertIntoDayPlan(Integer.valueOf(uid),i,(String) timeList.get(timeList.size() - 1),e.getStid() + "",e1.getSid() + "");
            }else{
                typeList.add(mapper.getSceneTypeByid((String) resMp.get("stid")));
                SceneList.add(mapper.getSceneByBy((String) resMp.get("sid")));
                timeList.add(resMp.get("time"));
            }
        }
        mp.put("typeList",typeList);
        mp.put("sceneList",SceneList);
        mp.put("time",timeList);
        return mp;
    }
}
