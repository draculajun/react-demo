import CommercialHeader from "../../components/commercial/CommercialHeader";
import {useLocation} from "react-router-dom";
import {Spin, Tabs} from "antd";
import HonestyBusiness from "../../components/index/HonestyBusiness";
import {useEffect, useState} from "react";
import CardsApi from "../../api/cards";

export default function Index() {

    const location = useLocation();

    const [loading, setLoading] = useState(false);

    const [honestyBusinessList, setHonestyBusinessList] = useState([]);

    useEffect(() => {
        setLoading(true);
        CardsApi.page({
            industryId: location.state.industryId,
            bindId: location.state.subIndustryId,
            page: 1,
            pageSize: 10,
        }).then(res => {
            setHonestyBusinessList(res.data.Lists);
            setLoading(false);
        })
    }, [location.state.industryId, location.state.subIndustryId]);

    // const orderTypelist = [
    //     {
    //         id: 1,
    //         name: '销量',
    //     }, {
    //         id: 2,
    //         name: '价格',
    //     }, {
    //         id: 3,
    //         name: '评分',
    //     },
    // ];

    return (
        <div>
            <CommercialHeader {...location.state}></CommercialHeader>

            <Tabs defaultActiveKey="1" items={[{
                key: '1',
                label: '综合排序',
            }]}>
            </Tabs>

            <Spin spinning={loading}>
                <HonestyBusiness honestyBusinessList={honestyBusinessList}></HonestyBusiness>
            </Spin>
        </div>
    )
}