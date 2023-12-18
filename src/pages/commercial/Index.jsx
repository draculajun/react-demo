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
        industryId: 0,
        bindId: 0,
        did: 0,
        districtId: 0,
        sortId: 0,
        page: 1,
        pageSize: 8,
    });

    useEffect(() => {
        queryCards(location.state.industryId, location.state.subIndustryId, 1, search.pageSize);
    }, [location.state.industryId, location.state.subIndustryId]);

    function queryCards(currentIndustry, currentSubIndustry, page, pageSize) {
        let tmpSearch = {
            ...search,
            industryId: currentIndustry,
            bindId: currentSubIndustry,
            page: page,
            pageSize: pageSize,
        }
        setSearch(tmpSearch);

        setLoading(true);
        CardsApi.page(tmpSearch).then(res => {
            setHonestyBusinessList(res.data.Lists);

            setTotal(res.data.TotalNum);
            setLoading(false);
        });
    }

    function handleCommercialChange(currentIndustry, currentSubIndustry) {
        queryCards(currentIndustry, currentSubIndustry, search.page, search.pageSize);
    }

    function handleCommercialPageChange(page, pageSize) {
        queryCards(search.industryId, search.bindId, page, pageSize);
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

            {/*            <div class="orderBtnGroupContainer">
                <!-- 原型界面要求允许升序降序，后台接口目前不具备此功能，故改用li
                <OrderBtn v-for="(item, index) in orderTypelist" :key="index" :btnInfo="item" name="name"
                          @click="orderBtnClickHandler">
                </OrderBtn>-->
                <ul class="orderBtn_wrapper">
                    <li v-for="(item) in orderTypelist" :key="item.id">
                    <a href="#" :class="item.clicked == true ? 'active' : ''"
                    @click.prevent="orderBtnClickHandler(item)">{{ item.name }}</a>
            </li>
        </ul>

        <el-pagination small class="pagination_wrapper" layout="prev, pager, next"
                           :total="parseInt(pageInfo.total)"
    :page-size="pageInfo.pageSize"
    :current-page.sync="pageInfo.page"
    @current-change="pageChangeHandler"/>
            </div>*/}

            <Spin spinning={loading}>
                <HonestyBusiness honestyBusinessList={honestyBusinessList}></HonestyBusiness>
            </Spin>
        </div>
    )
}