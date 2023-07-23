package com.heartmelody.dudui.controller;

import com.heartmelody.dudui.domain.dto.HmUserAnalyseDTO;
import com.heartmelody.dudui.domain.entity.SceneInfo;
import com.heartmelody.dudui.domain.entity.SceneType;
import com.heartmelody.dudui.mapper.HmUserAnalyseMapper;
import com.heartmelody.dudui.service.HmUserAnalyseService;
import io.swagger.annotations.Api;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

@RestController
@Api("用户情绪评估和治疗方案")
@Slf4j
@RequestMapping("/analyse")
@CrossOrigin
public class HmUserAnalyseController {

    @Resource
    HmUserAnalyseService analyseService;

    @Resource
    HmUserAnalyseMapper mapper;

    @PostMapping("/getDiagnoseAnalyse")
    public Object getDiagnoseAnalyse(@RequestBody HmUserAnalyseDTO dto){
        return analyseService.getDiagnoseAnalyse(dto.getUid(),dto.getStartTime(), dto.getEndTime());
    }

    @PostMapping("/getDiseaseAnalyse")
    public Object getDiseaseAnalyse(@RequestBody HmUserAnalyseDTO dto){
        return analyseService.getDiseaseAnalyse(dto.getUid(),dto.getStartTime(), dto.getEndTime());
    }

    @PostMapping("/getDayPlan")
    public Object getDayPlan(@RequestBody Map<String,Object> mp){
        String uid =  mp.get("uid") + "";
        String beginTime = (String) mp.get("beginTime");
        String endTime = (String) mp.get("endTime");
        Object recover = mp.get("recover");
        // 查表的逻辑
        if(recover == null){
            Map<String, List<Object>> dayPlanByDB = analyseService.getDayPlanByDB(uid, beginTime, endTime);
            return dayPlanByDB;
        }else{
            Map<String, List<Object>> dayPlan = analyseService.getDayPlan(uid, beginTime, endTime);
            // 内容写入库
            mapper.deleteByUid(uid);
            for(int i = 0; i < 7 ;++i){

                mapper.insertIntoDayPlan(Integer.valueOf(uid),i, (String) dayPlan.get("time").get(i),((SceneType)dayPlan.get("typeList").get(i)).getStid()+"",((SceneInfo)dayPlan.get("sceneList").get(i)).getSid() + "");
            }
            return dayPlan;
        }
    }
}
