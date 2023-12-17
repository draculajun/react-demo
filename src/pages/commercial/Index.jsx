import CommercialHeader from "../../components/commercial/CommercialHeader";
import {useLocation} from "react-router-dom";
import {Tabs} from "antd";
import HonestyBusiness from "../../components/index/HonestyBusiness";
import {useEffect, useState} from "react";
import CardsApi from "../../api/cards";

export default function Index() {

    const location = useLocation();

    const [honestyBusinessList, setHonestyBusinessList] = useState([]);

    useEffect(() => {
        CardsApi.page({
            industryId: location.state.industryId,
            bindId: location.state.subIndustryId,
            page: 1,
            pageSize: 10,
        }).then(res => {
            setHonestyBusinessList(res.data.Lists);
        })
    }, []);

    const orderTypelist = [
        {
            id: 1,
            name: '销量',
        }, {
            id: 2,
            name: '价格',
        }, {
            id: 3,
            name: '评分',
        },
    ];

    return (
        <div>
            <CommercialHeader {...location.state}></CommercialHeader>

            <Tabs defaultActiveKey="1" items={[{
                key: '1',
                label: '综合排序',
            }]}>
            </Tabs>

            <HonestyBusiness honestyBusinessList={honestyBusinessList}></HonestyBusiness>
        </div>
    )
}