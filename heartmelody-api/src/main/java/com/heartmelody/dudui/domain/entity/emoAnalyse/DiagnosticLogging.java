package com.heartmelody.dudui.domain.entity.emoAnalyse;

import com.alibaba.fastjson.annotation.JSONField;
import lombok.Data;
import lombok.experimental.Accessors;

import java.util.Date;

@Data
@Accessors(chain = true)
public class DiagnosticLogging {

    private String uid;

    private Integer did;

    private String userName;

    @JSONField(format = "yyyy-MM-dd HH:mm:ss")
    private Date createTime;

}
