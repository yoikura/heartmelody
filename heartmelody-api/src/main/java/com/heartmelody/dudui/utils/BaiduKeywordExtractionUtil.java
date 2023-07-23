package com.heartmelody.dudui.utils;
import com.alibaba.fastjson.JSON;
import okhttp3.*;
import org.json.JSONObject;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class BaiduKeywordExtractionUtil {
    public static final String API_KEY = "xnuGlvxVECUjI3BYpg0aiLhj";
    public static final String SECRET_KEY = "xFAKdG0cR5MDf3ml9RpEReaOF3RcD8K5";

    static final OkHttpClient HTTP_CLIENT = new OkHttpClient().newBuilder().build();

    public static void main(String []args) throws IOException {
        List<String> list = getKeyword("雨后夕阳下开鲜花的田野",10);
        System.out.println(list);

    }
    /*请求参数
    参数	 类型  是否必选	     描述
    text string	是	原文本内容，最大65535字符（1个汉字=1个字符），建议在文本中同一词语的出现次数少于500次
    num	 int	否	需要提取的关键词数量的最大值，取值为大于等于1的正整数，无num字段时返回全部关键词（提示：num取值较大时，返回的关键词数量可能小于num值）*/
    /*返回参数
    参数	说明	描述
    log_id	uint64	请求唯一标识码
    results	array	关键词提取结果的数组集合
    +score	float	关键词的置信度，数值范围[0,1]
    +word	string	提取出的关键词*/
    public static List<String> getKeyword(String text,Integer num) throws IOException{
        List<String> reList = new ArrayList<>();
        MediaType mediaType = MediaType.parse("application/x-www-form-urlencoded");
        RequestBody body = RequestBody.create(mediaType, "{\"text\":[\""+text+"\"],\"num\":"+num+"}");
        Request request = new Request.Builder()
                .url("https://aip.baidubce.com/rpc/2.0/nlp/v1/txt_keywords_extraction?access_token=" + getAccessToken())
                .method("POST", body)
                .addHeader("Content-Type", "application/x-www-form-urlencoded")
                .build();
        Response response = HTTP_CLIENT.newCall(request).execute();
        String reString = response.body().string();
        System.out.println("提取关键词结果"+reString);
        Map reMap = JSON.parseObject(reString);
        List<Map> resultsList = (List<Map>) reMap.get("results");
        for(Map m:resultsList){
            reList.add((String) m.get("word"));
        }
        return reList;
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
