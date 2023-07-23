package com.heartmelody.dudui.mapper;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface HmEmoAnalyseMapper {

    // 插入用户上传文件的记录
    int insertFileRecord(String uid,String fileType,String filePath);

    int insertDiagLog(String uid,String results,String description);

}
