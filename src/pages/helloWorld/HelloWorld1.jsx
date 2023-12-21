import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

export default function HelloWorld1() {

    const navigate = useNavigate();

    const [count, setCount] = useState(5);
    const [btnDisabled, setBtnDisabled] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (count > 0) {
                setCount(e => e - 1);
            } else {
                clearInterval(intervalId);
            }
        }, 1000);
        return () => {
            clearInterval(intervalId);
        }
    }, [count])

    function handleJump() {
        navigate('/hello/hello3?id=3', {
            state: {
                id: 3,
            }
        })
    }

    // navigate(1) // 前进
    // navigate(-1) // 后退

    return (
        <>
            {
                <h1>Hello World 1</h1>
            }

            <button onClick={handleJump}>jumpToHelloWorld3</button>

            <p></p>

            <button disabled={btnDisabled}>{count === 0 ? 'confirm' : count}</button>
        </>
    )
}