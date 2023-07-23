package com.heartmelody.dudui.service;

import java.util.List;
import java.util.Map;

public interface HmUserAnalyseService {

    public Object getDiagnoseAnalyse(String uid,String startTime,String endTime);

    public Object getDiseaseAnalyse(String uid,String startTime,String endTime);

    public Map<String, List<Object>> getDayPlan(String uid, String beginTime, String endTime);


    public Map<String, List<Object>> getDayPlanByDB(String uid, String beginTime, String endTime);
}
