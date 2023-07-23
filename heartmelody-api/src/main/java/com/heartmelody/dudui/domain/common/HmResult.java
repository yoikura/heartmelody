package com.heartmelody.dudui.domain.common;

import lombok.Data;

@Data
public class HmResult<T> {
    //返回码
    private String return_code;

    //提示信息
    private String tips;

    private T data;

    /**
     * 普通成功
     */
    public static HmResult success() {
        HmResult r = new HmResult();
        r.return_code = "success";
        r.tips = "操作成功";
        return r;
    }

    /**
     * 返回数据成功
     */
    public static <T> HmResult<T> success(T object) {
        HmResult<T> r = new HmResult<T>();
        r.data = object;
        r.return_code = "success";
        r.tips = "操作成功";
        return r;
    }

    /**
     * 错误
     */
    public static <T> HmResult<T> error(String msg) {
        HmResult r = new HmResult();
        r.data = msg;
        r.return_code = "error";
        r.tips = "操作失败";
        return r;
    }
}
