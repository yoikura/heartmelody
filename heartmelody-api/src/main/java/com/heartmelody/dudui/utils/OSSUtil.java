package com.heartmelody.dudui.utils;

import com.aliyun.oss.ClientConfiguration;
import com.aliyun.oss.OSSClient;
import com.aliyun.oss.common.auth.DefaultCredentialProvider;
import com.aliyun.oss.model.*;
import com.heartmelody.dudui.config.OssConfig;
import org.springframework.util.ObjectUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Random;

public class OSSUtil {

    private OSSUtil() {
    }

    /**
     * oss 工具客户端
     */
    private volatile static OSSClient ossClient = null;

    /**
     * 上传文件至阿里云 OSS
     * 文件上传成功,返回文件完整访问路径
     * 文件上传失败,返回 null
     *
     * @param ossConfig oss 配置信息
     * @param file      待上传文件
     * @param fileDir   文件保存目录   music/mp3data/
     * @param fileName  文件重命名(文件后缀需要带）
     * @return oss 中的相对文件路径
     */
    public static String upload(OssConfig ossConfig, MultipartFile file, String fileDir, String fileName) throws IOException {
        initOSS(ossConfig);
        StringBuilder fileUrl = new StringBuilder();
        InputStream ins = null;
        try {
            if (ObjectUtils.isEmpty(fileName)) {
                String suffix = file.getOriginalFilename().substring(file.getOriginalFilename().lastIndexOf('.'));
                fileName = System.currentTimeMillis() + "-" + new Random().nextInt(1000) + suffix;
            }
            if (!fileDir.endsWith("/")) fileDir = fileDir.concat("/");
            fileUrl.append(fileDir).append(fileName);
            ossClient.setBucketAcl(ossConfig.getBucketName(), CannedAccessControlList.PublicRead);
            ins = file.getInputStream();
            PutObjectResult result = ossClient.putObject(ossConfig.getBucketName(), fileUrl.toString(), ins);
            ins.close();
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        } catch (Throwable throwable) {
            throwable.printStackTrace();
        } finally {
            if (ins != null) ins.close();
        }
        fileUrl.insert(0, ossConfig.getUrl());
        return fileUrl.toString();
    }

    /**
     * @param ossConfig oss信息
     * @return 初始化 oss 客户端
     */
    private static OSSClient initOSS(OssConfig ossConfig) {
        if (ossClient == null) {
            synchronized (OSSUtil.class) {
                if (ossClient == null) {
                    ossClient = new OSSClient(ossConfig.getEndpoint(),
                            new DefaultCredentialProvider(ossConfig.getAccessKeyId(), ossConfig.getAccessKeySecret()),
                            new ClientConfiguration());
                }
            }
        }
        return ossClient;
    }

    /**
     * @param keyName 存放路径+文件名
     * @return      oss获取文件下载路径
     */
    public static URL getUrl(String keyName, OssConfig ossConfig) {
        initOSS(ossConfig);
        Date expiration = new Date(new Date().getTime() + 3600l * 1000 * 24 * 365 * 10);// 设置URL过期时间为10年
        URL url = ossClient.generatePresignedUrl(ossConfig.getBucketName(), keyName, expiration);// 生成URL
        return url;
    }

    public static List<String> getEmoFile(String path,OssConfig ossConfig){
        initOSS(ossConfig);
        ListObjectsRequest request = new ListObjectsRequest(ossConfig.getBucketName()).withPrefix(path);

        ObjectListing objectListing;
        List<OSSObjectSummary> summaries = new ArrayList<>();
        List<String> res = new ArrayList<>();
        do {
            objectListing = ossClient.listObjects(request);
            summaries.addAll(objectListing.getObjectSummaries());
            request.setMarker(objectListing.getNextMarker());
        } while (objectListing.isTruncated());
        for (OSSObjectSummary summary : summaries) {
            res.add(summary.getKey());
        }
        return res;
    }
}
