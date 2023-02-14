/**
 * @author 明明不是下雨天
 */
package com.cn.app.utils;

import com.alibaba.fastjson.JSONObject;

/**
 * The type Wx subscribe template.
 */
@SuppressWarnings("all")
public class JsonUtils {


    public static JSONObject jsonCase(String key, Object val) {
        final JSONObject character = new JSONObject();
        character.put(key, val);
        return character;
    }
}
