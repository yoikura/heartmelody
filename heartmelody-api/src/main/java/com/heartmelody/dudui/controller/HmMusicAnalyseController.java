package com.heartmelody.dudui.controller;

import com.alibaba.fastjson.JSON;
import com.heartmelody.dudui.domain.dto.HmMusicUploadMusicDTO;
import com.heartmelody.dudui.domain.dto.HmScenSetFavoriteSceneDTO;
import com.heartmelody.dudui.domain.entity.MusicInfo;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.IdentityHashMap;
import java.util.Map;
import java.util.Objects;

@Api("音乐分析模块")
@RestController
@RequestMapping("/musicanalyse")
@Slf4j
@CrossOrigin
public class HmMusicAnalyseController {

    @PostMapping("/MusicUploadMusic")
    @ApiOperation("上传音乐信息，获取音乐信息标签")
    public Map<String,String> MusicUploadMusic(@RequestBody HmMusicUploadMusicDTO dto){
        Map<String,String> resultMap = new IdentityHashMap<>();
        //获取歌词
        String lyrics = null;
        //歌词情感分析
        String lyricsEmoType = null;
        if(dto.isIfHaveLyrics()){
            //获取歌词
            lyrics = "歌词文本";
            //歌词情感分析
            lyricsEmoType = "正向";
        }
        resultMap.put("lyrics",lyrics);
        //音频情感分析
        String musicEmoType = "正向";
        String sentimentLabel = null;
        if(Objects.equals(lyricsEmoType, "负向")){
            sentimentLabel = "负向";
        }else if(Objects.equals(musicEmoType, "负向") && lyricsEmoType == null){
            sentimentLabel = "负向";
        }else {
            sentimentLabel = "正向";
        }
        resultMap.put("sentimentLabel",sentimentLabel);
        //音乐节奏分析
        String rhythmInfo = "快节奏";
        resultMap.put("rhythmInfo",rhythmInfo);
        //音乐音量大小分析
        String volumeLevel = "响亮";
        resultMap.put("volumeLevel",volumeLevel);
        String musicType = "自然声音";
        resultMap.put("musicType",musicType);

        return resultMap;
    }
}
