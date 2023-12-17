/* 预付码颜色——————开始 */
import gray from "../assets/img/qrCode/i-code-gray.png";
import red from "../assets/img/qrCode/i-code-red.png";
import yellows from "../assets/img/qrCode/i-code-yellows.png";
import green from "../assets/img/qrCode/i-code.png";
import black from "../assets/img/qrCode/i-code-black.png";
export const GRAY_CODE = {
    id: 1,
    text: '灰码',
    iconPath: gray,
    color: '#7F7F7F',
};

export const RED_CODE = {
    value: 2,
    text: '红码',
    iconPath: red,
    color: '#ED0103',
};

export const YELLOW_CODE = {
    value: 3,
    text: '黄码',
    iconPath: yellows,
    color: '#FECF03',
};

export const GREEN_CODE = {
    value: 4,
    text: '绿码',
    iconPath: green,
    color: '#039974',
};

export const BLACK_CODE = {
    value: 5,
    text: '黑码',
    iconPath: black,
    color: '#333333',
};

export const CODE_LIST = [
    GRAY_CODE,
    RED_CODE,
    YELLOW_CODE,
    GREEN_CODE,
    BLACK_CODE,
];

export function getQrColorByCode(code) {
    return CODE_LIST.find((item) => item.value === code);
}

/* 预付码颜色——————结束 */