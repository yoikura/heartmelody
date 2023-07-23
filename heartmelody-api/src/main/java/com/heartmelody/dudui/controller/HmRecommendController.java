package com.heartmelody.dudui.controller;

import com.heartmelody.dudui.domain.common.HmResult;
import com.heartmelody.dudui.domain.dto.HmUserInfoDTO;
import com.heartmelody.dudui.domain.entity.SceneInfo;
import com.heartmelody.dudui.service.HmRecommendService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;


@Api("个性化推荐模块")
@RestController
@RequestMapping("/recommend")
@Slf4j
@CrossOrigin
public class HmRecommendController {
    @Autowired
    private HmRecommendService hmRecommendService;

    @PostMapping("/RecommendScene")
    @ApiOperation("获取用户推荐列表")
    public HmResult<List<SceneInfo>> recommendById(@RequestBody HmUserInfoDTO dto){
        try {
            List<SceneInfo> sceneInfoList = hmRecommendService.recommend(dto);
            return HmResult.success(sceneInfoList);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return HmResult.error("获取场景列表失败");
    }
}
