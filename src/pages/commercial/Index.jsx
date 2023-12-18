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
        queryCards(location.state.industryId, location.state.subIndustryId, 1, 10);
    }, [location.state.industryId, location.state.subIndustryId]);

    function queryCards(currentIndustry, currentSubIndustry, page, pageSize) {
        setLoading(true);
        CardsApi.page({
            industryId: currentIndustry,
            bindId: currentSubIndustry,
            page: page,
            pageSize: pageSize,
        }).then(res => {
            setHonestyBusinessList(res.data.Lists);
            setLoading(false);
        })
    }

    function handleCommercialChange(currentIndustry, currentSubIndustry) {
        queryCards(currentIndustry, currentSubIndustry, 1, 10);
    }

    return (
        <div>
            <CommercialHeader {...location.state} onChange={handleCommercialChange}></CommercialHeader>

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