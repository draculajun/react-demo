import './App.css';
import {Component} from "react";
import {Todo} from "./components/todo/Todo";

export default class App extends Component {
    state = {
        'todoList': [{
            id: 1,
            name: 'todo1',
            isDone: false,
        }, {
            id: 2,
            name: 'todo2',
            isDone: false,
        }, {
            id: 3,
            name: 'todo3',
            isDone: true,
        }]
    };

    handleKeyUp = (event) => {
        const {keyCode, target} = event;

        if (keyCode !== 13) return;

        if (target.value.trim() == '') return;

        const newTodoList = [{
            id: this.state.todoList.length + 1,
            name: target.value,
            isDone: false,
        }, ...this.state.todoList];

        this.setState({todoList: newTodoList});

        target.value = '';
    }

    changeTodo = (id, isDone) => {
        let newTodoList = this.state.todoList.map(e => {
            if (e.id == id) {
                e.isDone = isDone;
            }
            return e;
        });
        this.setState({todoList: newTodoList});
    }

    render() {
        return (
            <div className="App">

                <input onKeyUp={this.handleKeyUp} className={'textInput'} placeholder='请输入任务名称，按回车确认'/>

                <div className={'todoListContainer'}>
                    {
                        this.state.todoList.map(todo => {
                            return <Todo todo={todo} key={todo.id} changeTodo={this.changeTodo}></Todo>
                        })
                    }
                </div>

            </div>
        );
    }

}

