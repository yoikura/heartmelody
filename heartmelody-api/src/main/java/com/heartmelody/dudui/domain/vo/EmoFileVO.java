package com.heartmelody.dudui.domain.vo;

import lombok.Data;
import lombok.experimental.Accessors;

import java.util.List;

@Data
@Accessors(chain = true)
public class EmoFileVO {

    public List<String> fileName;

    public String userId;
}
