package com.heartmelody.dudui.domain.dto;

import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class HmUserAnalyseDTO {
    String uid;
    String startTime;
    String endTime;
}
