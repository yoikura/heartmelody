package com.heartmelody.dudui.mapper;

import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface HmSearchMapper {

    public List<Map<String,Object>> getSencesByTitle(String title,String uid);

}
