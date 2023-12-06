import {useState} from "react";

export default function HelloWorld1() {

    const [aaa, setAaa] = useState(true);

    return (
        <>
            {
                aaa ? <h1>Hello World1</h1> : null
            }
        </>
    )
}