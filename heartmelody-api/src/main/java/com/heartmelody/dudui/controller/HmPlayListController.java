package com.heartmelody.dudui.controller;

import com.heartmelody.dudui.domain.common.HmResult;
import com.heartmelody.dudui.domain.dto.HmUserInfoDTO;
import com.heartmelody.dudui.domain.entity.PlayList;
import com.heartmelody.dudui.domain.entity.SceneInfo;
import com.heartmelody.dudui.mapper.HmPlayListMapper;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

@Api("播放列表")
@RestController
@RequestMapping("/playList")
@Slf4j
@CrossOrigin
public class HmPlayListController {
    @Autowired
    private HmPlayListMapper hmPlayListMapper;

    @PostMapping("/add")
    @ApiOperation("新增待播放场景")
    public HmResult<String> addScene(@RequestBody PlayList dto){
        dto.setCreateTime(new Date());
        if(hmPlayListMapper.getById(dto)!=null){
            return HmResult.error("已在播放列表中");
        }
        Integer res = hmPlayListMapper.insert(dto);
        if(res > 0){
            return HmResult.success("添加成功");
        }else {
            return HmResult.error("添加失败");
        }
    }

    @PostMapping("/getPlayList")
    @ApiOperation("获取待播放场景")
    public HmResult<List<SceneInfo>> getSceneList(@RequestBody HmUserInfoDTO dto){
        List<SceneInfo> sceneInfoList = hmPlayListMapper.selectList(dto);
        return HmResult.success(sceneInfoList);
    }

    @PostMapping("/remove")
    @ApiOperation("删除待播放场景")
    public HmResult<String> removeScene(@RequestBody PlayList dto){
        Integer res = hmPlayListMapper.delete(dto);
        if(res > 0){
            return HmResult.success("删除成功");
        }else {
            return HmResult.error("删除失败");
        }
    }
}
