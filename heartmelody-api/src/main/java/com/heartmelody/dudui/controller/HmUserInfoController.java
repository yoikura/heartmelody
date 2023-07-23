package com.heartmelody.dudui.controller;

import com.alibaba.druid.util.StringUtils;
import com.heartmelody.dudui.domain.dto.HmUserInfoDTO;
import com.heartmelody.dudui.domain.entity.*;
import com.heartmelody.dudui.domain.common.HmResult;
import com.heartmelody.dudui.domain.vo.DiagnosticLoggingVO;
import com.heartmelody.dudui.domain.vo.SceneInfoVO;
import com.heartmelody.dudui.domain.vo.TreatmentRecordsVO;
import com.heartmelody.dudui.mapper.HmUserInfoMapper;
import com.heartmelody.dudui.service.HmUserInfoService;
import com.heartmelody.dudui.utils.RandomUtil;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.concurrent.TimeUnit;

@Api("用户信息模块")
@RestController
@RequestMapping("/userinfo")
@Slf4j
@CrossOrigin
public class HmUserInfoController {
    @Autowired
    HmUserInfoMapper hmUserInfoMapper;

    @Autowired
    HmUserInfoService hmUserInfoService;

    @Autowired
    private RedisTemplate<String,String> redisTemplate;

    @PostMapping("/sendMsg")
    @ApiOperation("发送验证码")
    public HmResult<String> SysLogin(@RequestBody HmUserInfoDTO dto){
        String tel = dto.getTel();
        if (!StringUtils.isEmpty(tel)){
            //生成随机验证码
            String code = RandomUtil.getSixBitRandom();
            System.out.println(code);
            //调用Api完成发送短信
//            boolean isSend = hmUserInfoService.send(dto.getTel(),code);
            if(true){
                redisTemplate.opsForValue().set(dto.getTel(),code,2, TimeUnit.MINUTES);
                return HmResult.success(code);
            }
        }
        return HmResult.error("发送失败");
    }

    @PostMapping("/SysLogin")
    @ApiOperation("登录")
    public HmResult<UserInfo> login(HttpServletRequest request, @RequestBody Map<String, String> map){
        return hmUserInfoService.login(request,map);
    }

    @PostMapping("/SysLogout")
    @ApiOperation("登录")
    public HmResult<String> logout(HttpServletRequest request,@RequestBody Map<String,String> map){
        return hmUserInfoService.logout(request);
    }

    @PostMapping("/SysGetPersonalInfo")
    @ApiOperation("查询用户基本信息")
    public HmResult<UserInfo> SysGetPersonalInfo(@RequestBody HmUserInfoDTO dto){
        UserInfo userInfo = hmUserInfoMapper.getUserInfo(dto);
        return HmResult.success(userInfo);
    }

    // TODO
    @PostMapping("/SysgetDiagnosticLogging")
    @ApiOperation("获取诊断记录")
    public HmResult<List<DiagnosticLoggingVO>> SysgetDiagnosticLogging(@RequestBody HmUserInfoDTO dto){
        List<DiagnosticLoggingVO> list = hmUserInfoMapper.getDiagnosticLogging(dto);
        for(DiagnosticLoggingVO vo : list){
            if(vo.getEid()!=null){
                vo.setData("眼动仪数据 ");
            }else{
                vo.setData("");
            }
            if(vo.getEtid()!=null){
                vo.setData(vo.getData()+"脑机数据 ");
            }
            if(vo.getDescription()!=null){
                vo.setData(vo.getData()+"文本描述 ");
            }
        }
        return HmResult.success(list);
    }

    @PostMapping("/SysgetTreatmentRecords")
    @ApiOperation("获取治疗记录")
    public HmResult<List<TreatmentRecordsVO>> SysgetTreatmentRecords(@RequestBody HmUserInfoDTO dto){
        List<TreatmentRecordsVO> treatmentRecordsVOS = hmUserInfoMapper.getTreatmentRecords(dto);
        for (TreatmentRecordsVO vo : treatmentRecordsVOS){
            List<SceneInfoVO> list = hmUserInfoMapper.getFavoriteScene(dto);
            for (SceneInfoVO vo1:list){
                if(Objects.equals(vo1.getSid(), vo.getSid())){
                    vo.setFavorite(true);
                    break;
                }
            }
        }
        return HmResult.success(treatmentRecordsVOS);
    }

    @PostMapping("/SysgetFavoriteScene")
    @ApiOperation("获取喜欢的场景")
    public HmResult<List<SceneInfoVO>> SysgetFavoriteScene(@RequestBody HmUserInfoDTO dto){
        List<SceneInfoVO> list = hmUserInfoMapper.getFavoriteScene(dto);
        for(SceneInfoVO vo : list){
            vo.setFavorite(true);
        }
        return HmResult.success(list);
    }

    @PostMapping("/SysupdateUserInfo")
    @ApiOperation("修改个人信息")
    public HmResult<String> SysupdateUserInfo(@RequestBody HmUserInfoDTO dto){
        Integer result = hmUserInfoMapper.updateUserInfo(dto);
        if(result>0){
            return HmResult.success();
        }else {
            return HmResult.error("修改失败");
        }
    }
}
