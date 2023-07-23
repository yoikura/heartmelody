package com.heartmelody.dudui.utils;

import com.apistd.uni.Uni;
import com.apistd.uni.UniException;
import com.apistd.uni.UniResponse;
import com.apistd.uni.sms.UniSMS;
import com.apistd.uni.sms.UniMessage;

import java.util.HashMap;
import java.util.Map;

public class uniSmsUtil {
    public static String ACCESS_KEY_ID = "jtSBdcnP3xzmeVxVWydPCPcESQrQd4PaYKm1csa9GP3Yhj6oa";
    private static String ACCESS_KEY_SECRET = "HGNsHHFjRUJvk8m71oQe19KAx1zVkS";

    public static void main(String[] args) {
        // 初始化
        Uni.init(ACCESS_KEY_ID, ACCESS_KEY_SECRET); // 若使用简易验签模式仅传入第一个参数即可

        // 设置自定义参数 (变量短信)
        Map<String, String> templateData = new HashMap<String, String>();
        templateData.put("code", "666666");
        templateData.put("ttl","10");

        // 构建信息
        UniMessage message = UniSMS.buildMessage()
                .setTo("13275377979")
                .setSignature("心曲")
                .setTemplateId("pub_verif_ttl3")
                .setTemplateData(templateData);

        // 发送短信
        try {
            UniResponse res = message.send();
            System.out.println(res);
        } catch (UniException e) {
            System.out.println("Error: " + e);
            System.out.println("RequestId: " + e.requestId);
        }
    }
}

