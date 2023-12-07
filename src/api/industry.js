import Server from './server.js'
import kcAxios from "../utils/axios/core";

const IndustryApi = {
    // 获取领域及行业（首页菜单）
    getIndustryAndIndus: function () {
        return kcAxios.kcGet(`${Server.KC_DIGITALMALL_API}/public/indus/getIndustryAndIndus`);
    }
}

export default IndustryApi;