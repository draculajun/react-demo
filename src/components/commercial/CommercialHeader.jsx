import {useState} from "react";
import './CommercialHeader.scss';

export default function CommercialHeader({menuInfoList}) {

    let menuInfoIndustryMap = new Map();
    menuInfoList.forEach(e => {
        menuInfoIndustryMap.set(e.IndustryId, e.Sub);
    });

    menuInfoList = [
        {
            IndustryId: 0,
            IndustryName: '全部'
        },
        ...menuInfoList,
    ];

    const [currentIndustry, setCurrentIndustry] = useState(0);
    const [currentSubIndustry, setCurrentSubIndustry] = useState(0);

    const [subIndustryList, setSubIndustryList] = useState([{
        IndusId: 0,
        Name: '全部'
    }]);

    function industryClickHandler(item) {
        return (e) => {
            e.preventDefault();
            setCurrentIndustry(item.IndustryId);

            const tmpSubIndustryList = [{
                IndusId: 0,
                Name: '全部',
            }
            ];
            if (item.IndustryId != 0) {
                tmpSubIndustryList.push(...menuInfoIndustryMap.get(item.IndustryId))
                setSubIndustryList(tmpSubIndustryList);
            }
            setCurrentSubIndustry(0);
        }
    }

    function subIndustryClickHandler(item) {
        return (e) => {
            e.preventDefault();

            setCurrentSubIndustry(item.IndusId);
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
                        {menuInfoList.map((item) => (
                            <li key={item.IndustryId}>
                                <a href="#" className={item.IndustryId == currentIndustry ? 'active' : ''}
                                   onClick={industryClickHandler(item)}> {item.IndustryName} </a>
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
                                    <a href="#" className={item.IndusId == currentSubIndustry ? 'active' : ''}
                                       onClick={subIndustryClickHandler(item)}> {item.Name} </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>

            </div>
        </div>
    )
}