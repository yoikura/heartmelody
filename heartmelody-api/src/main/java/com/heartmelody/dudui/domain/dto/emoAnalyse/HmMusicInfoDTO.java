package com.heartmelody.dudui.domain.dto.emoAnalyse;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.experimental.Accessors;
import org.springframework.web.multipart.MultipartFile;

/**
 *
 * @desc HmMusicInfoDTO 用来负责音乐上传
 * @author hufei
 * @time 2023/04/04
 * */
@Data
@AllArgsConstructor
@Accessors(chain = true)
public class HmMusicInfoDTO extends AnalyseBaseDTO{

    @JsonProperty(value = "uid")
    private Integer uid;

    /**
     * mp3File 上传的音乐文件
     * */
    @JsonProperty(value = "mp3File")
    private MultipartFile mp3File;

    /**
     * ifHaveLyrics 是否具有歌词
     * */
    @JsonProperty(value = "ifHaveLyrics")
    private Boolean ifHaveLyrics;

}
