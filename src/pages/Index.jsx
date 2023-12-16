import IndustryApi from "../api/industry";
import Menu from "../components/index/Menu";
import {useEffect, useState} from "react";
import './index.css'
import {useNavigate} from "react-router-dom";

export function Index() {
    const [menuInfoList, setMenuInfoList] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        IndustryApi.getIndustryAndIndus().then(res => {
            setMenuInfoList(res.data.List);
        })
    }, [])

    function handleMenuClick(menuInfoList, industryId, subIndustryId) {
        navigate('/commercial', {
            state: {
                menuInfoList,
                industryId,
                subIndustryId,
            }
        })
    }

    return (
        <div className='indexContainer'>
            <Menu className={'menu'} menuInfoList={menuInfoList} handleMenuClick={handleMenuClick}></Menu>
            <div className={'rollPic'}>container</div>
        </div>
    )
}