//package com.heartmelody.dudui.utils;
//
//import com.heartmelody.dudui.config.OssConfig;
//
//import org.bytedeco.ffmpeg.global.avutil;
//import org.bytedeco.javacv.*;
//
//import org.bytedeco.ffmpeg.global.avcodec;
//
//
//import javax.imageio.ImageIO;
//import java.awt.image.BufferedImage;
//import java.io.*;
//import java.nio.file.Path;
//import java.nio.file.Paths;
//import java.util.HashMap;
//import java.util.Map;
//
//public class JavaCVUtil {
//
//    static Path path = Paths.get(System.getProperty("user.dir"),"src/out/");
//    static int width = 1600;
//    static int height = 900;
//
//    static int IMG_NUM = 4;
//
//
//   public static void main(String[] args) throws FrameRecorder.Exception {
//        createMp4(path +  java.io.File.separator + "video" +  java.io.File.separator + System.currentTimeMillis() + ".mp4", path +  java.io.File.separator + "audio" +  java.io.File.separator +"bandaotiehecut.mp3", path +  java.io.File.separator + "img" +  java.io.File.separator + "1684644922707" + File.separator,null);
//    }
//
//    public static String createMp4(String mp4SavePath, String audioPath, String imgPath, OssConfig ossConfig) throws FrameRecorder.Exception {
//        long l = System.currentTimeMillis();
//        File files = new File(imgPath);
//        Map<Integer, File> imgMap = new HashMap<Integer, File>();
//        int num = 0;
//        File[] files1 = files.listFiles();
//        for (File imgFile : files1) {
//            imgMap.put(num, imgFile);
//            num++;
//        }
//
//        //视频宽高最好是按照常见的视频的宽高  16：9  或者 9：16
//        FFmpegFrameRecorder recorder = new FFmpegFrameRecorder(mp4SavePath, width, height);
//        //设置视频编码层模式
//        recorder.setVideoCodec(avcodec.AV_CODEC_ID_H264);
//        //设置视频为25帧每秒
//        recorder.setFrameRate(20);
//        //设置视频图像数据格式
//        recorder.setPixelFormat(avutil.AV_PIX_FMT_YUV420P);
//        recorder.setFormat("mp4");
//        try {
//
//            recorder.start();
//            Java2DFrameConverter converter = new Java2DFrameConverter();
//
//            for (int i = 0; i < imgMap.size(); i++) {
//
//                BufferedImage read = ImageIO.read(imgMap.get(i));
//                Frame frame = converter.getFrame(read);
//                for(int z = 0 ; z < 60/IMG_NUM * 20 ; ++z){
//                    recorder.record(frame);
//                }
//            }
//        } catch (Exception e) {
//            e.printStackTrace();
//        } finally {
//            //最后一定要结束并释放资源
//            recorder.stop();
//            recorder.release();
//            System.out.println((System.currentTimeMillis() - l ) / 1000);
//        }
//
//        try {
//            /*if(!mergeAudioAndVideo(mp4SavePath, audioPath, mp4SavePath + "new.mp4",ossConfig))
//                throw new RuntimeException("生成视频错误");
//            else{
//
//                String strUrl = mp4SavePath + "new.mp4";
//                File file = new File(strUrl);
//                InputStream inputStream = new FileInputStream(file);
//                MultipartFile multipartFile = new MockMultipartFile(file.getName(),"","video/wbem", inputStream);
//
//                String ossPath = System.currentTimeMillis() + "SpiderCreate.webm";
//                // 保存到oss阿里云
//                String upload = OSSUtil.upload(ossConfig, multipartFile, "scene/scene", ossPath);
//                return upload;
//
//            }*/
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//
//        return null;
//    }
//
//    public static boolean mergeAudioAndVideo(String videoPath, String audioPath, String outPut,OssConfig ossConfig) throws Exception {
//        File file = new File(videoPath);
//        if (!file.exists()) {
//            return false;
//        }
//        FrameRecorder recorder = null;
//        FrameGrabber grabber1 = null;
//        FrameGrabber grabber2 = null;
//        try {
//            //抓取视频帧
//            grabber1 = new FFmpegFrameGrabber(videoPath);
//            //抓取音频帧
//            grabber2 = new FFmpegFrameGrabber(audioPath);
//            grabber1.start();
//            grabber2.start();
//            //创建录制
//            recorder = new FFmpegFrameRecorder(outPut,
//                    grabber1.getImageWidth(), grabber1.getImageHeight(),
//                    grabber2.getAudioChannels());
//
//            recorder.setFormat("mp4");
//            recorder.setFrameRate(grabber1.getFrameRate());
//            recorder.setSampleRate(grabber2.getSampleRate());
//            //设置视频编码层模式
//            recorder.setVideoCodec(avcodec.AV_CODEC_ID_H264);
//            //设置视频为25帧每秒
//            recorder.setFrameRate(1);
//            //设置视频图像数据格式
//            recorder.setPixelFormat(avutil.AV_PIX_FMT_YUV420P);
//
//            recorder.start();
//
//            Frame frame1;
//            Frame frame2 ;
//            //先录入视频
//            int videoFrameCount1 = 0;
//            while ((frame1 = grabber1.grabFrame()) != null ){
//
//                recorder.record(frame1);
//                videoFrameCount1++;
//            }
//            //然后录入音频
//            while ((frame2 = grabber2.grabFrame()) != null) {
//
//                recorder.record(frame2);
//            }
//            grabber1.stop();
//            grabber2.stop();
//            recorder.stop();
//        } catch (Exception e) {
//            e.printStackTrace();
//        } finally {
//            try {
//                if (recorder != null) {
//                    recorder.release();
//                }
//                if (grabber1 != null) {
//                    grabber1.release();
//                }
//                if (grabber2 != null) {
//                    grabber2.release();
//                }
//            } catch (FrameRecorder.Exception e) {
//                e.printStackTrace();
//            }
//        }
//        return true;
//
//    }
//
//    public static void cutAudioFromStart(String path) {
//        //样本视频
//        String audioOne = path;
//        //剪辑以后的视频
//        String cutStartAudio = path + "cut.mp3";
//        try {
//            //生成 帧recorder
//            FFmpegFrameRecorder recorder = new FFmpegFrameRecorder(cutStartAudio, 2);
//            recorder.setAudioOption("crf", "0");
//            recorder.setAudioQuality(0);
//            //设置比特率
//            recorder.setAudioBitrate(192000);
//            //设置采样率
//            recorder.setSampleRate(44100);
//            //设置声道
//            recorder.setAudioChannels(2);
//            //设置编码格式
//            recorder.setAudioCodec(avcodec.AV_CODEC_ID_MP3);
//            recorder.start();
//            //加载样本音频
//            FFmpegFrameGrabber grabberOne = FFmpegFrameGrabber.createDefault(audioOne);
//            grabberOne.start();
//            Frame f;
//            int total=0;
//            //计算音频样本帧的数量
//            while((f=grabberOne.grabSamples())!=null)
//            {
//                total++;
//            }
//            //计算时长
//            long durationInSec = grabberOne.getFormatContext().duration() / 1000000;
//            //按比例计算开始录入的帧
//            int startFrameNum = getStartOrEndFrameNumber(60, durationInSec, total);
//            //输出剪辑的开始时间，时长，总共帧数量，开始记录的帧位置
//            int i = 0;
//            //再次读取
//            grabberOne.restart();
//            while ((f = grabberOne.grabSamples()) != null) {
//                //略过不需要记录的帧，只从需要的帧位置开始记录
//                if (i > startFrameNum) {
//                    continue;
//                }
//                i++;
//                recorder.record(f);
//            }
//            recorder.close();
//            grabberOne.close();
//
//        } catch (Exception e){
//        }
//    }
//    private static int getStartOrEndFrameNumber(long startOrEndAtSecond, long durationInSecond, int totalFrame) {
//        if (startOrEndAtSecond >= durationInSecond)
//            return (int) durationInSecond;
//        double percent = startOrEndAtSecond / (double) durationInSecond;
//        return (int) Math.round(totalFrame * percent);
//    }
//
//}
