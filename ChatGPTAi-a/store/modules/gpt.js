// 引用用户请求api
import {sendMessage} from '../../api/gpt';

const actions = {
	sendMessage({commit}, param) {
	    return new Promise((resolve, reject) => {
			sendMessage(param).then(response => {
	            resolve(response)
	        }).catch(error => {
				resolve(error)
	        })
	    })
	}
};

export default {
    namespaced: true,
    actions
}
