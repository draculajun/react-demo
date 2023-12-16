import axios from 'axios';
import axiosRetry from 'axios-retry';
import qs from 'qs';

let timeout = 30000;

// 如果登录过则获取用户信息，并设置header(此项目似乎没有token认证)
const getLoginHeader = () => {

}

const defaultHeader = () => {
    let defaultConfig = {
        cid: 10992,
        device: 1,
    };
    // let fullUrl = window.location.href;
    // let paramMap = parseUrlParams(fullUrl);
    // paramMap.has('channel') ? (defaultConfig['channel'] = paramMap.get('channel')) : (defaultConfig['channel'] = defaultChannel);
    return defaultConfig;
}

const megerHeader = (header, config) => {
    if (header) {
        ["utoken", "cid", "Uid", "channel", "device", "IsRealNameAuth"].forEach(key => {
            if (header[key] != null) {
                config.headers[key] = header[key];
            }
        });
    }
}

const kcAxios = axios.create({
    timeout: timeout,
});

kcAxios.interceptors.request.use(config => {
    let dHeader = defaultHeader();
    let loginHeader = getLoginHeader();
    if (loginHeader) {
        let header = {...dHeader, ...loginHeader};
        megerHeader(header, config);
    } else {
        megerHeader(dHeader, config);
    }
    return config;
});

kcAxios.interceptors.response.use(
    response => {
        return response.data;
    },
    error => {
        if (error && error.response) {
            switch (error.response.error) {
                case 1:

                default:
                    error.errorMsg = `请求出错了，请联系管理员！`;
            }
            error.errorMsg = '请求出错了，请联系管理员！'
            return Promise.reject(error)
        }
    }
);

axiosRetry(kcAxios, {retries: 3});

function executeWrapper(promise, config) {
    return new Promise((resolve, reject) => {
        if (config && config.loading) {
            startLoading();
        }
        promise.then((res) => {
            if (config && config.loading) {
                endLoading();
            }
            resolve(res);
        }, (error) => {
            if (config && config.loading) {
                endLoading();
            }
            reject(error);
        })
    });
}

kcAxios.kcGet = function (url, config) {
    return executeWrapper(kcAxios.get(url), config);
}

kcAxios.kcDelete = function (url, config) {
    return executeWrapper(kcAxios.delete(url), config);
}

kcAxios.kcPostByForm = function (params, config) {
    return executeWrapper(kcAxios.post(params.url, qs.stringify(params.data)), config);
}

// 文件上传
kcAxios.kcPostByFormData = function (params, config) {
    return executeWrapper(kcAxios.post(params.url, params.data, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }), config);
}

kcAxios.kcPostByJson = function (params, config) {
    return executeWrapper(kcAxios.post(params.url, params.data), config);
}

function startLoading() {

}

function endLoading() {
}


export default kcAxios;
