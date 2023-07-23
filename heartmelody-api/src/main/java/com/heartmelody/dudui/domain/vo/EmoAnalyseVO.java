package com.heartmelody.dudui.domain.vo;


import com.alibaba.fastjson.annotation.JSONField;
import com.heartmelody.dudui.domain.entity.emoAnalyse.DiagnosticLogging;
import lombok.Data;
import lombok.experimental.Accessors;

import java.util.HashMap;
import java.util.Map;

@Data
@Accessors(chain = true)
public class EmoAnalyseVO {

    @JSONField(name = "return_code")
    public Integer returnCode;

    @JSONField(name = "msg")
    public String msg;

    @JSONField(name = "diagnosticLogging")
    public DiagnosticLogging diagnosticLogging;

}
