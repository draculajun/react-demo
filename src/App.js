import './App.css';
import {Component} from "react";
import {NavLink, Route, Routes} from "react-router-dom";
import HelloWorld from "./pages/helloWorld/HelloWorld";
import Todo from "./components/todo/Todo";
import HelloWorld1 from "./pages/helloWorld/HelloWorld1";
import HelloWorld2 from "./pages/helloWorld/HelloWorld2";

export default class App extends Component {

    render() {
        return (
            <div className={'App'}>
                <NavLink className='link' to={'/router'}>router</NavLink>
                <NavLink className='link' to={'/todo'}>todo2</NavLink>

                <Routes>
                    <Route path='/router' element={<HelloWorld/>}>
                        <Route index element={<HelloWorld1/>}/>
                        <Route path={'hello1'} element={<HelloWorld1/>}/>
                        <Route path={'hello2'} element={<HelloWorld2/>}/>
                    </Route>
                    <Route path='/todo' element={<Todo/>}/>
                </Routes>
            </div>
        );
    }

}

