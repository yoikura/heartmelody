package com.heartmelody.dudui.utils;

import cn.hutool.http.Header;
import cn.hutool.http.HttpRequest;
import com.alibaba.fastjson.JSONObject;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

// 使用hutool封装的工具包
@Slf4j
public class HttpClient {
    // 一个携带authentication的请求发送，主要是为了获得信息，主要是使用post发送的请求

    public static String request(String url,Object params, String token, boolean needToken) {
        log.info("request请求 ---> url:" + url + ",参数:" + params + ",token:" + token);
        if (!needToken || token != null) {
            // 使用hutool工具包发送请求
            HttpRequest request = HttpRequest.post(url)
                    .header(Header.CONTENT_TYPE, "application/json")
                    .header(Header.ACCEPT_CHARSET, "UTF-8")
                    .header(Header.ACCEPT, MediaType.ALL_VALUE);
            if (token != null) {
                request.header(Header.AUTHORIZATION, token);
            }
            request.timeout(60 * 1000);
            if (params != null) {
                // 设置参数
                request.body(JSONObject.toJSONString(params));
            }
            log.info("向url:" + url + "发送信息--->");
            String response = request.execute().body();
            if (response != null) {
                log.info("request请求 正常返回：" + response + " request:" + request + " 参数:" + params.toString() + " token:" + token + " needToken:" + needToken);
                return response;
            }
            if (response == null) {
                log.info("request请求 返回为空：" + url.toString() + " request:" + request.toString() + " 参数:" + params.toString() + " token:" + token + " needToken:" + response);
            } else {
                log.info("request请求 返回出错了：" + url.toString() + " request:" + request.toString() + " 参数:" + params.toString() + " token:" + token + " needToken:" + response.toString());
            }
        }
        log.info("在请求:" + url + "时候,token不合理" + new SimpleDateFormat("yyyyMMdd").format(new Date()));
        return null;
    }

    // 携带特定名字request，也可以封装为map使用上面的方法
    public String request(String url, String keyName, List<Map<String, Object>> mapList, String token, Boolean needToken) {
        Map<String, Object> mp = new HashMap<>();
        mp.put(keyName, mapList);
        return request(url, mp, token, needToken);
    }
}