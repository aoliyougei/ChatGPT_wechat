
import request from './../utils/request';

export function sendMessage(data) {
	return request({
		url: 'gpt/send/text',
		method: 'GET',
		data
	})
}


