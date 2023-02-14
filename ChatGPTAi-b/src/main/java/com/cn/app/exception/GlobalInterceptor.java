package com.cn.app.exception;

import com.cn.app.msg.Result;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.List;


@RestControllerAdvice
@SuppressWarnings("all")
public class GlobalInterceptor {


    @ResponseBody
    @ExceptionHandler(value = Exception.class)
    public Result exceptionHandler(Exception e) {
        e.getStackTrace();
        if (e instanceof MethodArgumentNotValidException) {
            final List<ObjectError> allErrors = ((MethodArgumentNotValidException) e).getBindingResult().getAllErrors();
            return Result.error(allErrors.get(0).getDefaultMessage());

        }
        if (e instanceof CustomException) {
            return Result.build(40000, e.getMessage(), null);

        }

        return Result.error(e.getMessage());
    }


}
