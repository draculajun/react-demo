import {memo, useCallback, useState} from "react";

export default function UseMemoAndUseCallback() {

    const [txtValue, setTxtValue] = useState('');
    const [count, setCount] = useState(0);

    const onChange = useCallback((count) => {
        setTimeout(() => {
            setCount(count + 1);
        }, 1000)
    }, [count]);

    return (
        <>
            <p></p>
            <input value={txtValue} onChange={e => setTxtValue(e.target.value)}/>
            <p></p>
            <UseCallback count={count} onChange={onChange}></UseCallback>
        </>
    )
}

const UseCallback = memo(({count, onChange}) => {
    console.log('useCallback init');

    function setCount() {
        onChange(count)
    }

    return (
        <div>
            <span>{count}</span>
            <p></p>
            <button onClick={() => setCount(count)}>click</button>
        </div>
    )
});