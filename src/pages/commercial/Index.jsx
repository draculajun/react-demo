import CommercialHeader from "../../components/commercial/CommercialHeader";
import {useLocation} from "react-router-dom";
import {Pagination, Spin, Tabs} from "antd";
import HonestyBusiness from "../../components/index/HonestyBusiness";
import {useEffect, useState} from "react";
import CardsApi from "../../api/cards";
import './Index.scss';

export default function Index() {

    const location = useLocation();

    const [loading, setLoading] = useState(false);

    const [honestyBusinessList, setHonestyBusinessList] = useState([]);
    const [total, setTotal] = useState(0);

    const [search, setSearch] = useState({
        industryId: location.state.industryId,
        bindId: location.state.subIndustryId,
        did: 0,
        districtId: 0,
        sortId: 0,
        page: 1,
        pageSize: 8,
    });

    useEffect(() => {
        queryCards(search);
    }, [search.industryId, search.bindId, search.page, search.pageSize]);

    function queryCards(search) {
        setLoading(true);
        CardsApi.page(search).then(res => {
            setHonestyBusinessList(res.data.Lists);

            setTotal(res.data.TotalNum);
            setLoading(false);
        });
    }

    function handleCommercialChange(currentIndustry, currentSubIndustry) {
        setSearch({
            ...search,
            page: 1,
            industryId: currentIndustry,
            bindId: currentSubIndustry,
        });
    }

    function handleCommercialPageChange(page, pageSize) {
        setSearch({
            ...search,
            page: page,
            pageSize: pageSize,
        });
    }

    return (
        <div className="commercialContainer">
            <CommercialHeader {...location.state} onChange={handleCommercialChange}></CommercialHeader>

            <div className="tabContainer">
                <Tabs defaultActiveKey="1" items={[{
                    key: '1',
                    label: '综合排序',
                }]}>
                </Tabs>

                <div className="orderBtnGroupContainer">
                    <Pagination class="pagination_wrapper" size="small" defaultCurrent={search.page} total={total}
                                pageSize={search.pageSize} onChange={handleCommercialPageChange}/>
                </div>
            </div>

            <Spin spinning={loading}>
                <HonestyBusiness honestyBusinessList={honestyBusinessList}></HonestyBusiness>
            </Spin>
        </div>
    )
}