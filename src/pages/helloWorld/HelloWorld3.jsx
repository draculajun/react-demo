import {useLocation} from "react-router-dom";

export default function HelloWorld3() {
    const location = useLocation();

    let id;
    if (location.state) {
        id = location.state.id;
    }

    return (
        <>
            <h1>Hello World {id}</h1>
        </>
    )
}