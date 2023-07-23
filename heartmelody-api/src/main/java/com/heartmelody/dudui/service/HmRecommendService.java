package com.heartmelody.dudui.service;

import com.heartmelody.dudui.domain.dto.HmUserInfoDTO;
import com.heartmelody.dudui.domain.entity.SceneInfo;

import java.io.IOException;
import java.util.List;

public interface HmRecommendService {
    public List<SceneInfo> recommend(HmUserInfoDTO hmUserInfoDTO) throws IOException;
}
