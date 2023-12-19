import {NavLink, Outlet, useLocation} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {Breadcrumb} from "antd";
import routeConfig from '../router/config';
import './EmptyBreadcrmb.scss';

export default function EmptyBreadcrmb() {

    const location = useLocation();
    const [breadcrumbItems, setBreadcrumbItems] = useState([]);

    let routeConfigMap = new Map();

    function getRouteConfigMap(routeConfig, parentPath) {
        routeConfig.forEach(e => {
            routeConfigMap.set(e.path, {
                fullPath: parentPath == null ? e.path : (parentPath == '/' ? '' : parentPath + '/') + e.path,
                title: e.title,
            });
            if (e.children != null) {
                getRouteConfigMap(e.children, routeConfigMap.get(e.path).fullPath);
            }
        })
    }

    useEffect(() => {
        getRouteConfigMap(routeConfig, null);

        // 通过路由配置组合面包屑内容
        const pathname = location.pathname;
        let tmpBreadcrumbItemsArr = pathname.split('/').filter(e => e != '');
        let tmpBreadcrumbItems = tmpBreadcrumbItemsArr.map((item, index) => (
            <Breadcrumb.Item key={index}>
                <NavLink className={index == tmpBreadcrumbItemsArr.length - 1 ? 'linked' : ''}
                         to={`/${routeConfigMap.get(item).fullPath}`}>
                    {item == '' ? '' : routeConfigMap.get(item).title}
                </NavLink>
            </Breadcrumb.Item>
        ));

        //去除"emptyBreadcrmb"自身，增加最上层"主页"按钮
        tmpBreadcrumbItems = tmpBreadcrumbItems.splice(1);
        tmpBreadcrumbItems = [
            <Breadcrumb.Item key={1}>
                <NavLink to={'/index'}>主页</NavLink>
            </Breadcrumb.Item>, ...tmpBreadcrumbItems
        ];

        setBreadcrumbItems(tmpBreadcrumbItems);
    }, [location.pathname]);

    return (
        <>
            <Breadcrumb separator=">" style={{margin: "20px"}}>
                {breadcrumbItems}
            </Breadcrumb>

            <Outlet/>
        </>
    )
}