package com.heartmelody.dudui.service.impl;

import com.aliyun.dysmsapi20170525.models.SendSmsRequest;
import com.aliyun.dysmsapi20170525.models.SendSmsResponse;
import com.aliyun.dysmsapi20170525.models.SendSmsResponseBody;
import com.heartmelody.dudui.config.SMSConfig;
import com.heartmelody.dudui.domain.common.HmResult;
import com.heartmelody.dudui.domain.entity.UserInfo;
import com.heartmelody.dudui.mapper.HmUserInfoMapper;
import com.heartmelody.dudui.service.HmUserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;
import com.aliyun.teaopenapi.models.Config;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Map;

@Service
public class HmUserInfoServiceImpl implements HmUserInfoService {
    @Autowired
    private SMSConfig smsConfig;

    @Autowired
    private HmUserInfoMapper hmUserInfoMapper;

    @Autowired
    private RedisTemplate<String,String> redisTemplate;

    @Autowired
    private HttpServletResponse response;

    @Override
    public boolean send(String tel, String code) {
        try{
            //配置阿里云
            Config config = new Config()
                    .setAccessKeyId("LTAI5t9HggHRzZTc5PMTrzoG") //您的AccessKey ID
                    .setAccessKeySecret("BTujskllAqOSAGfyiYS0zutEuAyHyU"); // 您的AccessKey Secret
            // 访问的域名
            config.endpoint = "dysmsapi.aliyuncs.com";

            com.aliyun.dysmsapi20170525.Client client =  new com.aliyun.dysmsapi20170525.Client(config);

            SendSmsRequest sendSmsRequest = new SendSmsRequest()
                    .setPhoneNumbers(tel)
                    .setSignName("heartmelody")
                    .setTemplateCode("SMS_275285392")
                    .setTemplateParam("{\"code\":\""+code+"\"}");
            // 复制代码运行请自行打印 API 的返回值
            SendSmsResponse response = client.sendSms(sendSmsRequest);
            SendSmsResponseBody body = response.getBody();
            System.out.println(body.getMessage());
            return "OK".equals(body.getMessage());
        }catch(Exception e){
            e.printStackTrace();
        }
        return false;
    }

    @Override
    public HmResult<UserInfo> login(HttpServletRequest request ,Map<String, String> map) {
//        if(request.getSession().getAttribute("user")!=null){
//            return HmResult.error("已经登录");
//        }
        //获取手机号
        String tel = map.get("tel");
        //获取验证码
        String code = map.get("code");
        //从Redis中获取验证码
        String codeFromRedis = redisTemplate.opsForValue().get(tel);
        if (codeFromRedis != null && codeFromRedis.equals(code)){
            UserInfo user = hmUserInfoMapper.getByTel(tel);
            if (user == null){
                //当前用户为新用户，自动完成注册
                user = new UserInfo();
                user.setTel(tel);
                user.setUserName(tel);
                hmUserInfoMapper.insert(user);
                UserInfo user1 = hmUserInfoMapper.getByTel(tel);
                redisTemplate.opsForSet().add("user", user1.getUid().toString());
                redisTemplate.delete(tel);
                return HmResult.success(user1);
            }else {
                redisTemplate.opsForSet().add("user", user.getUid().toString());
                redisTemplate.delete(tel);
                return HmResult.success(user);
            }
        }
        return HmResult.error("登录失败！");
    }

    public HmResult<String> logout(HttpServletRequest request) {
        Long userId = (Long)request.getSession().getAttribute("user");
        if(userId == null){
            return HmResult.error("未登录");
        }else {
            redisTemplate.opsForSet().remove(userId.toString());
//            request.getSession().removeAttribute("user");
            return HmResult.success("退出成功！");
        }
    }
}
