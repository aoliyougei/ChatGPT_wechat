/**
 * @author 明明不是下雨天
 */
package com.cn.app.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class SendMessageDto {

    @NotBlank(message = "发送文本不能为空")
    private String text;

}
