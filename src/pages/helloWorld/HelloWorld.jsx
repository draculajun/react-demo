import {NavLink, Outlet, Route, Routes} from "react-router-dom";
import './hello.css'
import HelloWorld1 from "./HelloWorld1";
import HelloWorld2 from "./HelloWorld2";

export default function HelloWorld() {
    return (
        <>
            <h1>router</h1>

            <NavLink className='link' to={'hello1'}>hello1</NavLink>
            <NavLink className='link' to={'hello2'}>hello2</NavLink>

            <Outlet/>
        </>
    )
}