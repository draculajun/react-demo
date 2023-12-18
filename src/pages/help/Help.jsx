import './Index.scss';
import {NavLink, Outlet} from "react-router-dom";
import React from "react";
import help from '../../router/help';

export default function Help() {
    const helpMenuList = [help];

    return (
        <>
            <div className="helpContainer">
                <div className="leftMenuContainer">
                    {
                        helpMenuList.map(item => (
                            <div key={item.title}>
                                <div className="subTitle">
                                    {item.title}
                                </div>
                                <ul>
                                    {
                                        item.children.map(subItem => (
                                            <NavLink key={subItem.title} className='link'
                                                     to={subItem.path}>{subItem.title}</NavLink>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </div>
                <div style={{flex: '1', marginLeft: '30px'}}>
                    <Outlet/>
                </div>
            </div>
        </>
    )
}