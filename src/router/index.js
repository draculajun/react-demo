import {createBrowserRouter, Navigate} from "react-router-dom";
import HelloWorld from "../pages/helloWorld/HelloWorld";
import App from "../App";
import HelloWorld1 from "../pages/helloWorld/HelloWorld1";
import HelloWorld2 from "../pages/helloWorld/HelloWorld2";
import Todo from "../components/todo/Todo";
import HelloWorld3 from "../pages/helloWorld/HelloWorld3";
import ErrorPage from "../pages/ErrorPage";
import {Index} from "../pages/Index";
import Commercial from '../pages/commercial/Index';
import EmptyBreadcrmb from "../pages/EmptyBreadcrmb";
import help from "./help";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/index"/>,
    }, {
        path: "/",
        element: <App/>,
        children: [
            {
                path: 'index',
                element: <Index/>
            }, {
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
                        path: "hello2/:id",
                        element: <HelloWorld2/>,
                    }, {
                        path: "hello3",
                        element: <HelloWorld3/>,
                    }
                ]
            }, {
                path: "todo",
                element: <Todo/>,
            }, {
                path: 'commercial',
                element: <Commercial/>
            }, {
                path: 'emptyBreadcrmb',
                element: <Navigate to="/emptyBreadcrmb/help/"/>
            }, {
                path: 'emptyBreadcrmb/help',
                element: <Navigate to="/emptyBreadcrmb/help/shoppingProcess"/>
            }, {
                path: 'emptyBreadcrmb',
                element: <EmptyBreadcrmb/>,
                children: [
                    help,
                ],
            }
        ]
    }, {
        path: "*",
        element: <ErrorPage/>,
    },
]);

export default router;