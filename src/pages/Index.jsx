import IndustryApi from "../api/industry";
import Menu from "../components/index/Menu";
import {useEffect, useState} from "react";
import './index.css'

export function Index() {
    const [menuInfoList, setMenuInfoList] = useState([]);

    useEffect(() => {
        IndustryApi.getIndustryAndIndus().then(res => {
            setMenuInfoList(res.data.List);
        })
    }, [])

    return (
        <div className='indexContainer'>
            <Menu className={'menu'} menuInfoList={menuInfoList}></Menu>
            <div className={'rollPic'}>container</div>
        </div>
    )
}