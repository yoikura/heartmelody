package com.heartmelody.dudui.service.impl;

import com.heartmelody.dudui.domain.dto.HmUserInfoDTO;
import com.heartmelody.dudui.domain.entity.SceneInfo;
import com.heartmelody.dudui.mapper.HmRecommendMapper;
import com.heartmelody.dudui.service.HmRecommendService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

@Service
public class HmRecommendServiceImpl implements HmRecommendService {
    @Autowired
    private HmRecommendMapper hmRecommendMapper;

    @Override
    public List<SceneInfo> recommend(HmUserInfoDTO hmUserInfoDTO) throws IOException {
        String[] arg = new String[] { "python", "/root/projects/CB/pymysql_test.py", hmUserInfoDTO.getUid(), "6"};
        Process proc = Runtime.getRuntime().exec(arg);
        List<String> ids = new ArrayList<>();
        BufferedReader reader = new BufferedReader(new InputStreamReader(proc.getInputStream()));
        String line;
        while ((line = reader.readLine()) != null) {
            ids.add(line);
        }
        reader.close();
        if(ids.size()>0){
            return hmRecommendMapper.getBySids(ids);
        }else{
            return null;
        }
    }
}
