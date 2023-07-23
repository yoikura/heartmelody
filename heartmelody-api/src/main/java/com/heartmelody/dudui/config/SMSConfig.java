package com.heartmelody.dudui.config;

import lombok.Data;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties(prefix = "aliyun.sms")
@Data
public class SMSConfig {
    private String regionId;
    private String accessKeyId;
    private String accessKeySecret;
}
