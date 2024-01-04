import {useReducer, useState} from "react";

export function ReducerTest() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    function personReducer(person, action) {
        switch (action.type) {
            case 'update': {
                return {
                    ...person,
                    name: action.name,
                    age: action.age,
                }
            }
        }
        throw Error('Unknown action: ' + action.type);
    }

    const [person, dispatch] = useReducer(personReducer, {name: '', age: ''});

    const handleUpdatePerson = () => {
        dispatch({
            type: 'update',
            name: name,
            age: age,
        });
    }

    return (
        <div style={{margin: '10px'}}>
            姓名：<input value={name} onChange={e => setName(e.target.value)}/>
            <p/>
            年龄：<input value={age} onChange={e => setAge(e.target.value)}/>

            <p/>
            <button onClick={handleUpdatePerson}>更新</button>

            <p/>
            {person.name}
            <p/>
            {person.age}
            <p/>

        </div>
    )
}