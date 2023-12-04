import './App.css';
import {Component} from "react";
import {NavLink, Outlet} from "react-router-dom";

export default class App extends Component {

    render() {
        return (
            <div className={'App'}>
                <NavLink className='link' to={'/hello'}>router</NavLink>
                <NavLink className='link' to={'/todo'}>todo2</NavLink>

                <Outlet/>
            </div>
        );
    }

}

