package com.heartmelody.dudui;

import com.heartmelody.dudui.domain.entity.SceneInfo;
import com.heartmelody.dudui.mapper.HmCreateSceneMapper;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.io.File;
import java.io.IOException;
import java.lang.reflect.Array;
import java.nio.file.Path;
import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

@RunWith(SpringRunner.class)
@SpringBootTest
public class RandomGetFile {

    @Autowired
    HmCreateSceneMapper mapper;

    public List<String> lists;
    {
        String str = "落日 日落 黄昏 傍晚 夕阳 晚霞 \n" +
                "\n" +
                "大海 海洋 海边 海 海岸 海滩 海滨 海水 海景 海浪 沙滩\n" +
                "\n" +
                "山川 山脉 山坡 山峰 山顶 高山 山\n" +
                "\n" +
                "北极光 极光 极地\n" +
                "\n" +
                "雪地 雪景 雪 大雪 雪花 冬雪\n" +
                "\n" +
                "星空 星星 星河 星海 银河 星 夜空 星夜 星际\n" +
                "\n" +
                "草地 草坪 草原 绿草 草\n" +
                "\n" +
                "鲜花 花 花朵 花海 \n" +
                "\n" +
                "晴天 晴朗 晴日 晴\n" +
                "\n" +
                "海岛 岛屿 岛 \n" +
                "\n" +
                "云层 云海 云彩 云 云朵 白云\n" +
                "\n" +
                "冬雪 冬天 冬日 冬季 \n" +
                "\n" +
                "枯树 枯藤 老树 树\n" +
                "\n" +
                "树 大树 树木 树林 树叶 森林 树枝\n" +
                "\n" +
                "椰子树 椰树 椰子\n" +
                "\n" +
                "冰川 冰岛 冰\n" +
                "\n" +
                "瀑布 喷泉 飞瀑 悬河\n" +
                "\n" +
                "悬崖 陡崖 峭壁 绝壁\n" +
                "\n" +
                "日出 黎明 拂晓 清晨 早晨 破晓 朝阳 晨曦 拂曙 曙光 旭日\n" +
                "\n" +
                "秋季 秋季 金秋 秋天 秋日 秋分 季秋 翠秋 果实满秋 秋高气爽\n" +
                "\n" +
                "枫叶 枫树叶 枫 红叶 红枫\n" +
                "\n" +
                "湖泊 湖水 湖海 湖池 泊湖 泊水 泽地 潭水 小谭 潭水\n" +
                "\n" +
                "溪水 溪流 小溪\n" +
                "\n" +
                "田野 田地 农田 农地 田间 乡野 农庄 田园\n" +
                "\n" +
                "花园 园林 庭园 花坛 园子\n" +
                "\n" +
                "温泉 泉水 泉\n" +
                "\n" +
                "夏日 夏天 夏季 炎夏 盛夏 炎炎夏日 夏\n" +
                "\n" +
                "蓝天 天空 青天 苍穹 蓝天白云 蔚蓝天空 澄蓝的天空 晴朗的天空 清澈的天空 碧空 天\n" +
                "\n" +
                "竹林 竹子 竹丛 竹笋 竹\n" +
                "\n" +
                "鸟 鸟鸣 鸟叫";
        String[] split = str.split("\n\n");
        lists = Arrays.stream(split).collect(Collectors.toList());
    }

    @Test
    public void setDesc(){
        // lists.forEach(System.out::println);
        List<SceneInfo> allScene = mapper.getAllScene();
        allScene.forEach((a)->{

            String descStr = a.getDescription().trim();

            StringBuilder sb = new StringBuilder(descStr);

            String[] words = a.getDescription().split("\\s+");
            for(String b : lists){
                for(String word : words){
                    if(b.contains(word)){
                        String[] split = b.trim().split("\\s+");
                        for(String s : split){
                            if(!s.equals(word))
                            sb.append(" ").append(s);
                        }
                    }
                }
            }
            mapper.updateScene(a.getSid(),sb.toString());
        });

        return;
    }

}
