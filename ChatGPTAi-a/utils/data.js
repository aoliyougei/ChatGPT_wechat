const DataGPTKey = 'data';

const EnableKey = "enable"


export function setDataGPT(data) {
    uni.setStorageSync(DataGPTKey, data)
}

export function getDataGPT() {
    return uni.getStorageSync(DataGPTKey)
}

export function setEnable(data) {
    return uni.setStorageSync(EnableKey, data)
}

export function getEnable() {
    return uni.getStorageSync(EnableKey)
}

export function removeEnable() {
    return uni.removeStorageSync(EnableKey)
}

export function removeDataGPT() {
    return uni.removeStorageSync(DataGPTKey)
}
