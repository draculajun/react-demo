import {useParams} from "react-router-dom";

export default function HelloWorld2() {
    const params = useParams();

    return (
        <>
            <h1>Hello World {params.id}</h1>
        </>
    )
}