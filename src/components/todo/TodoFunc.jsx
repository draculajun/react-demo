import {useState} from 'react';
import './todo.css';

export default function TodoFunc({todo, changeTodo, deleteTodo}) {
    const [mouse, setMouse] = useState(false);

    function handleMouseLeave(flag) {
        return () => {
            setMouse(flag);
        }
    }

    return (
        <div className={'todo'}
             style={{backgroundColor: mouse ? '#ddd' : '#fff'}}
             onMouseLeave={handleMouseLeave(false)} onMouseEnter={handleMouseLeave(true)}
             key={todo.id}>
            <input style={{cursor: 'pointer'}} type={'checkbox'}
                   checked={todo.isDone}
                   onChange={(event) => {
                       changeTodo(todo.id, event.target.checked)
                   }}/>
            <span>{todo.name}</span>

            <button style={{display: mouse ? 'block' : 'none'}} className={'btn'}
                    onClick={() => {
                        deleteTodo(todo.id)
                    }}>删除
            </button>
        </div>
    )
}