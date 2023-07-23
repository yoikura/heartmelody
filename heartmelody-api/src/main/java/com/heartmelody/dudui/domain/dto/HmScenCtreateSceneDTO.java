package com.heartmelody.dudui.domain.dto;

import lombok.Data;
import org.apache.tika.exception.TikaException;
import org.apache.tika.metadata.Metadata;
import org.apache.tika.parser.AutoDetectParser;
import org.apache.tika.parser.ParseContext;
import org.apache.tika.sax.BodyContentHandler;
import org.springframework.web.multipart.MultipartFile;
import org.xml.sax.SAXException;

import java.io.IOException;
import java.io.InputStream;
import java.text.DecimalFormat;

@Data
public class HmScenCtreateSceneDTO {
    /*{“uid” : “1”,
“mp3Data” : “文件转码base64数据”,
“ifHaveLyrics” : “true”,
“senceDescription” : “场景描述”}*/
    private Integer uid;
    private MultipartFile mp3Data;
    private boolean ifHaveLyrics;
    private String senceDescription;

    public Integer getDurationInSeconds() throws IOException {
        // 使用 Tika 解析音频文件
        InputStream input = mp3Data.getInputStream();
        BodyContentHandler handler = new BodyContentHandler();
        Metadata metadata = new Metadata();
        AutoDetectParser parser = new AutoDetectParser();
        try {
            parser.parse(input, handler, metadata, new ParseContext());
        } catch (SAXException | TikaException e) {
            e.printStackTrace();
        }
        // 获取音频文件的时长（秒）
        return Integer.parseInt(metadata.get("xmpDM:duration"))/ 1000;
    }

    public String getType() {
        return mp3Data.getContentType();
    }

    public double getSize() {
        long size = mp3Data.getSize();
        DecimalFormat df = new DecimalFormat("0.00");
        String sizeInMB = df.format((double) size / (1024 * 1024));
        return Double.parseDouble(sizeInMB);
    }
}
