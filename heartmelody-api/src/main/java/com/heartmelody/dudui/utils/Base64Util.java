package com.heartmelody.dudui.utils;

import org.apache.commons.codec.binary.Base64;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public class Base64Util {
    /**
     * 文件Base64转码
     *
     * @param file 文件
     * @return
     * @throws IOException 比如读写文件出错时
     */
    public static final String convertToBase64(MultipartFile file)throws IOException {
        String base64Encoder = "";
        byte[] buffer = null;
        try {
            buffer = file.getBytes();
            base64Encoder = Base64.encodeBase64String(buffer);
            //防止Base64编码中含有换行符，统一全部替换掉
            base64Encoder.replaceAll("[\\s*\t\n\r]", "");
            //添加前端读取需要的前缀
            base64Encoder = "data:iamge/jpeg;base64," + base64Encoder;
        } catch (IOException e) {
            e.printStackTrace();
        }
        return base64Encoder;
    }
}
