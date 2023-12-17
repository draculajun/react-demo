import {useNavigate} from "react-router-dom";

export default function HelloWorld1() {

    const navigate = useNavigate();

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
        </>
    )
}