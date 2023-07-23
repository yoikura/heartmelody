package com.heartmelody.dudui.utils;

import com.alibaba.fastjson.JSON;
import com.heartmelody.dudui.domain.enums.AnxietyLevelsEnum;
import okhttp3.*;
import org.json.JSONObject;

import java.io.*;
import java.math.BigDecimal;
import java.util.Collections;
import java.util.IdentityHashMap;
import java.util.List;
import java.util.Map;

public class BaiduTextSentimentAnalysisUtil {
    public static final String API_KEY = "xnuGlvxVECUjI3BYpg0aiLhj";
    public static final String SECRET_KEY = "xFAKdG0cR5MDf3ml9RpEReaOF3RcD8K5";

    static final OkHttpClient HTTP_CLIENT = new OkHttpClient().newBuilder().build();

    public static void main(String []args) throws IOException{
        //用户输入的文本情感分析
        AnxietyLevelsEnum anxietyLevelsEnum = getTextSentimentAnalysis("我很不开心");
        System.out.println(anxietyLevelsEnum);
        //歌词情感分析，判断正向负向
        Integer integer = getLrcSentimentAnalysis("我很不开心");
        System.out.println(integer);
    }
    /*请求参数
    参数	  类型	描述
    text string	文本内容，最大2048字节
    返回参数
    参数	说明	描述
    log_id	uint64	请求唯一标识码
    sentiment	int	表示情感极性分类结果，0:负向，1:中性，2:正向
    confidence	float	表示分类的置信度，取值范围[0,1]
    positive_prob	float	表示属于积极类别的概率 ，取值范围[0,1]
    negative_prob	float	表示属于消极类别的概率，取值范围[0,,1]*/
    //用户输入的文本情感分析
    public static AnxietyLevelsEnum getTextSentimentAnalysis(String text) throws IOException{
    MediaType mediaType = MediaType.parse("application/json");
    RequestBody body = RequestBody.create(mediaType,  "{\"text\":\""+text+"\"}");
    Request request = new Request.Builder()
            .url("https://aip.baidubce.com/rpc/2.0/nlp/v1/sentiment_classify?charset=&access_token=" + getAccessToken())
            .method("POST", body)
            .addHeader("Content-Type", "application/json")
            .addHeader("Accept", "application/json")
            .build();
    Response response = HTTP_CLIENT.newCall(request).execute();
    String reString = response.body().string();
    System.out.println("文本情感分析结果"+reString);
    Map reMap = JSON.parseObject(reString);
    List<Map<String, BigDecimal>> itemsList = (List<Map<String, BigDecimal>>) reMap.get("items");
    Map<String, BigDecimal> itemsMap = itemsList.get(0);
    BigDecimal positive_prob = itemsMap.get("positive_prob");
    if(positive_prob.compareTo(BigDecimal.valueOf(0.75)) > 0 &&positive_prob.compareTo(BigDecimal.valueOf(1)) < 1){
        return AnxietyLevelsEnum.NORMAL;
    }else if(positive_prob.compareTo(BigDecimal.valueOf(0.5)) > 0 &&positive_prob.compareTo(BigDecimal.valueOf(0.75)) < 1){
        return AnxietyLevelsEnum.MILD;
    }else if(positive_prob.compareTo(BigDecimal.valueOf(0.25)) > 0 &&positive_prob.compareTo(BigDecimal.valueOf(0.5)) < 1){
        return AnxietyLevelsEnum.MODERATE;
    }else {
        return AnxietyLevelsEnum.SEVERE;
    }
}

//    sentiment	int	表示情感极性分类结果，0:负向，1:中性，2:正向
//歌词情感分析，判断正向负向
    static Integer getLrcSentimentAnalysis(String text) throws IOException{
        MediaType mediaType = MediaType.parse("application/json");
        RequestBody body = RequestBody.create(mediaType,  "{\"text\":\""+text+"\"}");
        Request request = new Request.Builder()
                .url("https://aip.baidubce.com/rpc/2.0/nlp/v1/sentiment_classify?charset=&access_token=" + getAccessToken())
                .method("POST", body)
                .addHeader("Content-Type", "application/json")
                .addHeader("Accept", "application/json")
                .build();
        Response response = HTTP_CLIENT.newCall(request).execute();
        String reString = response.body().string();
        System.out.println("文本情感分析结果"+reString);
        Map reMap = JSON.parseObject(reString);
        List<Map<String, Integer>> itemsList = (List<Map<String, Integer>>) reMap.get("items");
        Map<String, Integer> itemsMap = itemsList.get(0);
        Integer sentiment = itemsMap.get("sentiment");
        return sentiment;
    }
    /**
     * 从用户的AK，SK生成鉴权签名（Access Token）
     *
     * @return 鉴权签名（Access Token）
     * @throws IOException IO异常
     */
    static String getAccessToken() throws IOException {
        MediaType mediaType = MediaType.parse("application/x-www-form-urlencoded");
        RequestBody body = RequestBody.create(mediaType, "grant_type=client_credentials&client_id=" + API_KEY
                + "&client_secret=" + SECRET_KEY);
        Request request = new Request.Builder()
                .url("https://aip.baidubce.com/oauth/2.0/token")
                .method("POST", body)
                .addHeader("Content-Type", "application/x-www-form-urlencoded")
                .build();
        Response response = HTTP_CLIENT.newCall(request).execute();
        return new JSONObject(response.body().string()).getString("access_token");
    }
}

