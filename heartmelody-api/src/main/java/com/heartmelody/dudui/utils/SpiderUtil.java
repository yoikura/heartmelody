//package com.heartmelody.dudui.utils;
//
//import cn.hutool.crypto.SecureUtil;
//import cn.hutool.crypto.digest.MD5;
//import cn.hutool.http.HttpUtil;
//import com.alibaba.fastjson.JSON;
//import com.alibaba.fastjson.JSONArray;
//import com.alibaba.fastjson.JSONObject;
//import io.netty.handler.codec.http.HttpRequest;
//import io.netty.handler.codec.http.HttpResponse;
//import lombok.SneakyThrows;
//import net.lightbody.bmp.BrowserMobProxy;
//import net.lightbody.bmp.BrowserMobProxyServer;
//import net.lightbody.bmp.client.ClientUtil;
//import net.lightbody.bmp.filters.RequestFilter;
//import net.lightbody.bmp.proxy.CaptureType;
//import net.lightbody.bmp.util.HttpMessageContents;
//import net.lightbody.bmp.util.HttpMessageInfo;
//import org.openqa.selenium.By;
//import org.openqa.selenium.Proxy;
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.WebElement;
//import org.openqa.selenium.chrome.ChromeDriver;
//import org.openqa.selenium.chrome.ChromeOptions;
//
//import java.io.File;
//import java.io.FileOutputStream;
//import java.io.IOException;
//import java.nio.file.Files;
//import java.nio.file.Path;
//import java.nio.file.Paths;
//import java.util.*;
//import java.util.concurrent.*;
//
///**
// * 1.传入，中文词组，具有分隔符
// * 2.使用百度翻译api，按照分隔符翻译为英文
// * 3.使用驱动尝试获取图片保存
// * 4.直接尝试保存oss
// * 5.给一个地址
// * 思路变更，使用comparable类，当这里成功上传到我们的oss上的时候，comparable类加入进去内容
// * */
//
//// todo 1.重复保存 2.static内不会初始化 3.comparable 4.多个请求，然后将图片变为视频存储在oss
//public class SpiderUtil {
//
//    static String driverUrl = "src/main/resources/driver/chromedriver.exe";
//
//    static String url = "https://skybox.blockadelabs.com/";
//
//    static String imageUrl = "https://blockade-platform-production.s3.amazonaws.com";
//
//    static ExecutorService pool = Executors.newFixedThreadPool(3);
//    static CompletionService<String> completionService = new ExecutorCompletionService<>(pool);
//
//    static int IMG_NUM = 4;
//    public static Path start(List<String> desc) throws InterruptedException, IOException {
//        if(desc == null ||desc.size() == 0)
//            throw new RuntimeException("desc为空");
//        Path path = Paths.get(System.getProperty("user.dir"),"src/out/img/" + System.currentTimeMillis() + "/");
//        // 创建文件夹
//        Files.createDirectories(path);
//
//        System.out.println(path.toAbsolutePath());
//
//        File files = new File(path.toAbsolutePath() + java.io.File.separator);
//        while (Objects.requireNonNull(files.listFiles()).length < IMG_NUM){
//
//            int min = Math.min((IMG_NUM / 2), IMG_NUM - files.listFiles().length);
//
//            for(int i = 0 ; i < min ; ++i){
//                CompletableFuture<Integer> future = new CompletableFuture<>();
//                completionService.submit(()->{
//                    try {
//                        SpiderUtil.getImageBySpider(desc,future,path);
//                    } catch (InterruptedException e) {
//                        e.printStackTrace();
//                    }
//                    future.get(120,TimeUnit.SECONDS);
//                    return "ok";
//                });
//                Thread.sleep(1000);
//            }
//
//            // 等待所有任务完成
//            for (int i = 0; i < min; i++) {
//                try {
//                    Future<String> future = completionService.take();
//                    future.get(120,TimeUnit.SECONDS);
//                } catch (InterruptedException | ExecutionException | TimeoutException e) {
//                    e.printStackTrace();
//                }
//            }
//
//            Thread.sleep(3000);
//        }
//
//        return path;
//
//    }
//
//    static{
//        System.setProperty("webdriver.chrome.driver", driverUrl);
//    }
//
//    public static void main(String[] args) throws IOException, InterruptedException {
//        start(Collections.singletonList("大海"));
//
//    }
//    public static void getImageBySpider(List<String> desc, CompletableFuture<Integer> future, Path path) throws InterruptedException {
//        String[] arr = desc.toArray(new String[0]);
//        StringBuilder key = new StringBuilder();
//        /**
//         * 百度翻译
//         * */
//        for(String str : arr){
//            key.append(translate(str)).append(",");
//        }
//        /*---------------------------------*/
//        // 创建chrome驱动
//        BrowserMobProxy browserMobProxy = new BrowserMobProxyServer();
//        browserMobProxy.start();
//        browserMobProxy.enableHarCaptureTypes(CaptureType.REQUEST_CONTENT, CaptureType.RESPONSE_CONTENT);
//        browserMobProxy.setHarCaptureTypes(CaptureType.RESPONSE_CONTENT);
//        browserMobProxy.newHar("kk");
//        Proxy seleniumProxy = ClientUtil.createSeleniumProxy(browserMobProxy);
//        // 设置浏览器参数
//        ChromeOptions options = new ChromeOptions();
//        options.setProxy(seleniumProxy);
//        options.setAcceptInsecureCerts(true);
//        options.setExperimentalOption("useAutomationExtension", false);
//        WebDriver driver = new ChromeDriver(options);
//
//        Timer timer = new Timer();
//        TimerTask task = new TimerTask() {
//            @Override
//            public void run() {
//                driver.quit();
//                browserMobProxy.stop();
//            }
//        };
//        // 超时关闭
//        timer.schedule(task,120*1000);
//        // 监听网络请求
//        browserMobProxy.addRequestFilter(new RequestFilter() {
//            @Override
//            public HttpResponse filterRequest(HttpRequest request, HttpMessageContents contents,
//                                              HttpMessageInfo messageInfo) {
//                try {
//                    if(request.getUri().contains("/images/imagine/vibrant")){
//                        if (saveImage(imageUrl + request.getUri(),path.toAbsolutePath().toString() + File.separator)) {
//                            future.complete(1);
//                            System.out.println("保存成功");
//                            driver.quit();
//                            browserMobProxy.stop();
//                        }else{
//                            System.out.println("保存出现问题");
//
//                        }
//                    }
//                } catch (Exception e){
//
//                }
//                return null;
//            }
//        });
//        driver.get(url);
//        // 获取输入框，输入selenium
//        Thread.sleep(2000);
//        WebElement wordEl = driver.findElement(By.cssSelector(".h-9.w-full.px-2.bg-transparent.text-white-700.transition-colors.duration-200.rounded-t.border-b.border-b-black-500.outline-none.disabled\\:opacity-50.hover\\:bg-black\\/40.focus-within\\:bg-black\\/40.focus\\:outline-none.focus\\:ring-1.focus\\:ring-green-500\\/50.focus\\:ring-offset-2.focus\\:ring-offset-black.disabled\\:cursor-not-allowed"));
//        WebElement confirm = driver.findElement(By.cssSelector(".flex-row > button:nth-child(2)"));
//        confirm.click();
//        WebElement element = driver.findElement(By.cssSelector("div.space-y-4:nth-child(1) > button:nth-child(2)"));
//        Thread.sleep(200);
//        element.click();
//        Thread.sleep(200);
//        wordEl.click();
//        Thread.sleep(200);
//        WebElement elemento = driver.findElement(By.cssSelector("div.space-y-4:nth-child(1) > button:nth-child(2)"));
//        elemento.click();
//        Thread.sleep(400);
//        wordEl.sendKeys(key.toString());
//
//        WebElement searchButton = driver.findElement(By.cssSelector(".relative.inline-flex.items-center.justify-center.text-sm.font-bold.transition-colors.duration-200.rounded.border-2[type='submit']"));
//
//
//        searchButton.click();
//    }
//
//    private static boolean saveImage(String imgUrl,String path) throws IOException {
//        System.out.println("Get -》" + imgUrl);
//        try {
//            byte[] bytes = HttpUtil.downloadBytes(imgUrl);
//            FileOutputStream out = new FileOutputStream(path + System.currentTimeMillis() + ".png");
//            out.write(bytes);
//            out.close();
//            return true;
//        }catch (Exception e){
//            e.printStackTrace();
//            return false;
//        }
//
//    }
//
//    private static String translate(String content){
//        String url = "http://api.fanyi.baidu.com/api/trans/vip/translate";
//        String strWait2Hash = "20230410001636442" + content + "1435660288" + "YFmMoeFcamYUOe_pSp9r";
//        String encrypt = SecureUtil.md5(strWait2Hash);
//
//        Map<String,Object> mp = new HashMap<>();
//        mp.put("q",content);
//        mp.put("from","zh");
//        mp.put("to","en");
//        mp.put("appid","20230410001636442");
//        mp.put("salt","1435660288");
//        mp.put("sign",encrypt);
//
//        String s = HttpUtil.get(url, mp);
//        Map parse = (Map) JSON.parse(s);
//        JSONArray res = (JSONArray) parse.get("trans_result");
//
//        Object dst = ((JSONObject) res.get(0)).get("dst");
//        System.out.println(dst);
//        return (String) dst;
//    }
//}
