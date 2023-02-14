import env from '../utils/env';

function service(options = {}) {
    options.url = `${env.baseUrl}${options.url}`;


    return new Promise((resolved, rejected) => {
        options.success = (res) => {
            const {code, msg} = res.data
            if (code !== 20000) {
                rejected({text: msg})
            } else {
                resolved(JSON.parse(res.data.data))
            }
        };
        options.fail = (res) => {
            console.log(res)
            resolved({text:'OpenAi服务器高负载,请稍后重试'})
        };
        uni.request(options);
    });
}

export default service;
