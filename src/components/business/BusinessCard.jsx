import './BusinessCard.scss'
import {getQrColorByCode, GRAY_CODE} from "../../utils/qrCode";
import {Flex} from "antd";

export default function BusinessCard({cardInfo}) {

    function getQrColor() {
        let item = getQrColorByCode(cardInfo.SafeCode);
        if (item) {
            return item.color;
        } else {
            return GRAY_CODE.color;
        }
    }

    return (
        <div className="businessCardContainer">
            <img className="imgBusinessInfo img-hover" src={cardInfo.ShopImage}></img>
            <div className="businessCardDetailContainer">
                <Flex align={'center'}>
                    <i className="kc-dm-qrcode icon" style={{color: getQrColor}}></i>
                    <span className="spanName">
                        {cardInfo.ShopName}
                    </span>
                </Flex>
                <Flex align={'center'}>
                    <i className="kc-dm-pinglun icon">
                    </i>
                    <span className="spanName">
                        评分：{parseFloat(cardInfo.CommentScore).toFixed(2)}分
                    </span>
                </Flex>
                <Flex align={'center'}>
                    <i className="kc-dm-zuobiao icon">
                    </i>
                    <span className="spanName">
                      {cardInfo.DName} - {cardInfo.DistrictNames}
                    </span>
                </Flex>
            </div>
        </div>
    )
}

