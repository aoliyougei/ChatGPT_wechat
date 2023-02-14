package com.cn.app.exception;


/**
 * 自定义异常
 *
 * @author 时间海
 * @date 2022/11/28
 */
@SuppressWarnings("all")
public class CustomException extends RuntimeException {

    private String message;

    private Integer code;


    public CustomException(final String message, final Integer code) {
        super(message);
        this.message = message;
        this.code = code;
    }
}
