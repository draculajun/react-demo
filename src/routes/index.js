import {Navigate, useRoutes} from "react-router-dom";
import HelloWorld from "../pages/helloWorld/HelloWorld";
import App from "../App";
import HelloWorld1 from "../pages/helloWorld/HelloWorld1";
import HelloWorld2 from "../pages/helloWorld/HelloWorld2";
import Todo from "../components/todo/Todo";

const Routes = () => {
    const routes = useRoutes([
        {
            path: '/',
            element: <Navigate to="/hello"/>
        }, {
            path: "/",
            element: <App/>,
            children: [
                {
                    path: 'hello',
                    element: <Navigate to="/hello/hello1"/>
                }, {
                    path: "hello",
                    element: <HelloWorld/>,
                    children: [
                        {
                            path: "hello1",
                            element: <HelloWorld1/>,
                        }, {
                            path: "hello2",
                            element: <HelloWorld2/>,
                        }
                    ]
                }, {
                    path: "todo",
                    element: <Todo/>,
                }
            ]
        },
    ])

    return routes;
}

export default Routes;