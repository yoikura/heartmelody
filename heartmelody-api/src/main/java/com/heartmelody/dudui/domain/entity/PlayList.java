package com.heartmelody.dudui.domain.entity;

import lombok.Data;

import java.util.Date;
import java.sql.Timestamp;

@Data
public class PlayList {
    String lid;
    String uid;
    String sid;
    private Date createTime;
}
