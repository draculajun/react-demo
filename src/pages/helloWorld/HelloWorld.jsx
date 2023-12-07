import {NavLink, Outlet} from "react-router-dom";
import './hello.css'
import {Button} from "antd";
import React from "react";

export default function HelloWorld() {
    return (
        <>
            <h1>router</h1>

            <NavLink className='link' to={`hello1`}>hello1</NavLink>
            <NavLink className='link' to={'hello2/2'}>hello2</NavLink>
            <NavLink className='link' to={'hello3'}>hello3</NavLink>

            <Button type="primary">Primary</Button>

            <Outlet/>
        </>
    )
}