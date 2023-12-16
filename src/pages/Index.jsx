import IndustryApi from "../api/industry";
import Menu from "../components/index/Menu";
import {useEffect, useState} from "react";
import './index.css'
import {useNavigate} from "react-router-dom";

export function Index() {
    const [industryList, setIndustryList] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        IndustryApi.getIndustryAndIndus().then(res => {
            setIndustryList(res.data.List);
        })
    }, [])

    function handleMenuClick(industryId, subIndustryId) {
        navigate('/commercial', {
            state: {
                industryList,
                industryId,
                subIndustryId,
            }
        })
    }

    return (
        <div className='indexContainer'>
            <Menu className={'menu'} industryList={industryList} handleMenuClick={handleMenuClick}></Menu>
            <div className={'rollPic'}>container</div>
        </div>
    )
}