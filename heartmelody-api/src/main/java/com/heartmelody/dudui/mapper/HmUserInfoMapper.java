package com.heartmelody.dudui.mapper;

import com.heartmelody.dudui.domain.dto.HmUserInfoDTO;
import com.heartmelody.dudui.domain.entity.*;
import com.heartmelody.dudui.domain.vo.DiagnosticLoggingVO;
import com.heartmelody.dudui.domain.vo.SceneInfoVO;
import com.heartmelody.dudui.domain.vo.TreatmentRecordsVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface HmUserInfoMapper {
    UserInfo getUserInfo(HmUserInfoDTO hmUserInfoDTO);
    UserInfo getByTel(String tel);
    Integer insert(UserInfo userInfo);
    List<DiagnosticLoggingVO> getDiagnosticLogging(HmUserInfoDTO hmUserInfoDTO);
    List<TreatmentRecordsVO> getTreatmentRecords(HmUserInfoDTO hmUserInfoDTO);
    List<SceneInfoVO> getFavoriteScene(HmUserInfoDTO hmUserInfoDTO);
    Integer updateUserInfo(HmUserInfoDTO hmUserInfoDTO);
}
