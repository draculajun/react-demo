import {Outlet, useLocation} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {Breadcrumb} from "antd";
import routeConfig from '../router/config'

export default function EmptyBreadcrmb() {

    const location = useLocation();
    const [breadcrumbItems, setBreadcrumbItems] = useState([]);

    let routeConfigMap = new Map();

    function getRouteConfigMap(routeConfig, parentPath) {
        routeConfig.map(e => {
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
        console.log(routeConfigMap)

        const pathname = location.pathname;
        const breadcrumbItems = pathname.split('/').map((item, index) => (
            <Breadcrumb.Item key={index}>
                <a>{item == '' ? '' : routeConfigMap.get(item).title}</a>
            </Breadcrumb.Item>
        ));
        setBreadcrumbItems(breadcrumbItems);
    }, [location]);

    return (
        <>
            <Breadcrumb separator=">" style={{margin: "20px"}}>
                {breadcrumbItems}
            </Breadcrumb>

            <Outlet/>
        </>
    )
}