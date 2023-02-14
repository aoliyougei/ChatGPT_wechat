package com.cn.app.service;

import com.cn.app.dto.SendMessageDto;

public interface GptService {

    String sendMessage(SendMessageDto dto);
}
