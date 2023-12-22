import {memo, useMemo, useState} from "react";
import './CommercialHeader.scss';
import {Button} from "antd";

export default memo(function CommercialHeader({industryList, industryId, bindId, onChange}) {
    const {menuInfoIndustryMap, newIndustryList, initSubIndustry} = useMemo(() => {
        let menuInfoIndustryMap = new Map();
        industryList.forEach(e => {
            menuInfoIndustryMap.set(e.IndustryId, e.Sub);
        });
        menuInfoIndustryMap.set(0, []);

        let newIndustryList = [
            {
                IndustryId: 0,
                IndustryName: '全部'
            },
            ...industryList,
        ];

        let initSubIndustry = {
            IndusId: 0,
            Name: '全部'
        };
        return {menuInfoIndustryMap, newIndustryList, initSubIndustry};
    }, [industryList]);

    let tmpSubIndustryList;
    if (industryId != null) {
        tmpSubIndustryList = [
            initSubIndustry, ...menuInfoIndustryMap.get(industryId)
        ];
    } else {
        tmpSubIndustryList = [initSubIndustry];
    }
    const [subIndustryList, setSubIndustryList] = useState(tmpSubIndustryList);

    function industryClickHandler(item) {
        return (e) => {
            e.preventDefault();

            let tmpSubIndustryList = [initSubIndustry];
            if (item.IndustryId !== 0) {
                tmpSubIndustryList.push(...menuInfoIndustryMap.get(item.IndustryId));
            }

            setSubIndustryList(tmpSubIndustryList);

            if (industryId !== item.IndustryId) {
                onChange(item.IndustryId, 0);
            }
        }
    }

    function subIndustryClickHandler(item) {
        return (e) => {
            e.preventDefault();

            if (bindId !== item.IndusId) {
                onChange(industryId, item.IndusId);
            }
        }
    }

    return (
        <div>
            <div className={'commercialHeaderContainer'}>

                <div className={'commercialHeader_layout'}>
                    <div className={'caregoryLeft'}>
                        领域分类
                    </div>
                    <ul className={'commercialHeaderRight'}>
                        {newIndustryList.map((item) => (
                            <li key={item.IndustryId}>
                                <Button type="link" className={item.IndustryId === industryId ? 'active' : ''}
                                        onClick={industryClickHandler(item)}> {item.IndustryName} </Button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={'commercialHeader_layout'}>
                    <div className={'caregoryLeft'}>
                        行业分类
                    </div>
                    <ul className={'commercialHeaderRight'}>
                        {
                            subIndustryList.map(item => (
                                <li key={item.IndusId}>
                                    <Button type="link" className={item.IndusId === bindId ? 'active' : ''}
                                            onClick={subIndustryClickHandler(item)}> {item.Name} </Button>
                                </li>
                            ))
                        }
                    </ul>
                </div>

            </div>
        </div>
    )
})