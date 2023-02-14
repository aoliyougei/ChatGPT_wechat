/**
 * @author 明明不是下雨天
 */
package com.cn.app.controller;

import com.cn.app.dto.SendMessageDto;
import com.cn.app.msg.Result;
import com.cn.app.service.GptService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

/**
 * The type Gpt controller.
 */
@Slf4j
@RestController
@RequestMapping("/gpt")
@RequiredArgsConstructor
public class GptController {

    private final GptService gptService;

    @GetMapping(value = "/send/text", name = "发送消息", produces = MediaType.APPLICATION_JSON_VALUE)
    public Result sendMessage(@Validated SendMessageDto dto) {
        return Result.data(gptService.sendMessage(dto));
    }

}
