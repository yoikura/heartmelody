package com.heartmelody.dudui.domain.dto.emoAnalyse;


import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.experimental.Accessors;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.NotNull;

/**
 *
 * @desc HmEmoAnalyseDto作为用户c端上传文件的传输类
 * @author hufei
 * @time 2023/04/04
 * */
@Data
@AllArgsConstructor
@Accessors(chain = true)
public class HmEmoAnalyseDTO extends AnalyseBaseDTO {

    @NotNull
    @JsonProperty(value = "uid")
    private Integer uid;

    // @TODO 对于过大文件使用MultiPart接收可能存在问题
    /**
     * eggFile 传递过来的脑电数据
     * */
    @JsonProperty(value = "eegFile",required = false)
    private String eegFile;

    @JsonProperty(value = "eyeTrackingFile",required = false)
    private String eyeTrackingFile;

    @JsonProperty(value = "emoTxt",required = false)
    private String emoTxt;

}
