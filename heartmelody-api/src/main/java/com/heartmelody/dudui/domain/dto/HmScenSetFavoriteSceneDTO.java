package com.heartmelody.dudui.domain.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class HmScenSetFavoriteSceneDTO {
    //{“uid” : “1”,
    //“sid” : “1”,
    //“isFavorite” : “false”}
    @JsonProperty(value = "uid")
    private Integer uid;
    @JsonProperty(value = "sid")
    private Integer sid;
    @JsonProperty(value = "isFavorite")
    private boolean isFavorite;

}
