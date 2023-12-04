import './App.css';
import {Component} from "react";
import {NavLink, Route, Routes} from "react-router-dom";
import HelloWorld from "./pages/helloWorld/HelloWorld";
import Todo from "./components/todo/Todo";

export default class App extends Component {

    render() {
        return (
            <div className={'App'}>
                <NavLink className='link' to={'/router'}>router</NavLink>
                <NavLink className='link' to={'/todo'}>todo2</NavLink>

                <Routes>
                    <Route path='/router' element={<HelloWorld/>}/>
                    <Route path='/todo' element={<Todo/>}/>
                </Routes>
            </div>
        );
    }

}

