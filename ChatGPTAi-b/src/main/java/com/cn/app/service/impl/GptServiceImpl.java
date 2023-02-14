/**
 * @author 明明不是下雨天
 */
package com.cn.app.service.impl;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.cn.app.dto.SendMessageDto;
import com.cn.app.exception.CustomException;
import com.cn.app.service.GptService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.WebClient;

/**
 * The type Gpt service.
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class GptServiceImpl implements GptService {

    @Value("${gpt.key}")
    private String basicAuth;

    @Override
    public String sendMessage(SendMessageDto dto) {
        final JSONObject body = new JSONObject();
        body.put("prompt", dto.getText());
        body.put("max_tokens", 2048);
        body.put("model", "text-davinci-003");
        try {
            final String response = WebClient
                    .create()
                    .post().
                    uri("https://api.openai.com/v1/completions")
                    .header(HttpHeaders.AUTHORIZATION, basicAuth).body(BodyInserters.fromValue(body))
                    .retrieve()
                    .bodyToMono(String.class)
                    .block();

            final JSONObject block = JSONObject.parseObject(response);

            assert block != null;

            final String choices = block.get("choices").toString();

            final JSONArray jsonArray = JSONObject.parseArray(choices);

            return jsonArray.get(0).toString();

        } catch (Exception e) {
            throw new CustomException("OpenAi服务器高负载,请稍后再试", null);
        }


    }
}
