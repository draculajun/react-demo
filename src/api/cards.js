import Server from "./server";
import kcAxios from "../utils/axios/core";

// 商户分页
const CardsApi = {
    page: function (data) {
        return kcAxios.kcPostByForm({
            url: `${Server.KC_DIGITALMALL_API}/cards/item/getInfos`,
            data
        });
    }
}

export default CardsApi;
