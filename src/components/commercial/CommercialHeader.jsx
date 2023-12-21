import {useState, useMemo} from "react";
import './CommercialHeader.scss';
import {Button} from "antd";

export default function CommercialHeader({industryList, industryId, subIndustryId, onChange}) {
    const menuInfoIndustryMap = useMemo(() => {
        let tmpMap = new Map();
        industryList.forEach(e => {
            tmpMap.set(e.IndustryId, e.Sub);
        });
        return tmpMap;
    }, [industryList]);

    industryList = [
        {
            IndustryId: 0,
            IndustryName: '全部'
        },
        ...industryList,
    ];

    const initSubIndustry = {
        IndusId: 0,
        Name: '全部'
    };

    let tmpSubIndustryList;
    if (industryId != null) {
        tmpSubIndustryList = [
            initSubIndustry, ...menuInfoIndustryMap.get(industryId)
        ];
    } else {
        tmpSubIndustryList = [initSubIndustry];
    }
    const [subIndustryList, setSubIndustryList] = useState(tmpSubIndustryList);

    const [currentIndustry, setCurrentIndustry] = useState(industryId == null ? 0 : industryId);
    const [currentSubIndustry, setCurrentSubIndustry] = useState(subIndustryId == null ? 0 : subIndustryId);

    function industryClickHandler(item) {
        return (e) => {
            e.preventDefault();
            setCurrentIndustry(item.IndustryId);

            let tmpSubIndustryList = [initSubIndustry];
            if (item.IndustryId !== 0) {
                tmpSubIndustryList.push(...menuInfoIndustryMap.get(item.IndustryId));
            }

            setSubIndustryList(tmpSubIndustryList);
            setCurrentSubIndustry(0);

            onChange(item.IndustryId, 0);
        }
    }

    function subIndustryClickHandler(item) {
        return (e) => {
            e.preventDefault();

            setCurrentSubIndustry(item.IndusId);

            onChange(currentIndustry, item.IndusId);
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
                        {industryList.map((item) => (
                            <li key={item.IndustryId}>
                                <Button type="link" className={item.IndustryId === currentIndustry ? 'active' : ''}
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
                                    <Button type="link" className={item.IndusId === currentSubIndustry ? 'active' : ''}
                                            onClick={subIndustryClickHandler(item)}> {item.Name} </Button>
                                </li>
                            ))
                        }
                    </ul>
                </div>

            </div>
        </div>
    )
}