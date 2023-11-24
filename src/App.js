import './App.css';
import {Component} from "react";
import {Todo} from "./components/todo/Todo";
import {nanoid} from "nanoid";

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
        }],

        isDoneNum: 0,
    };

    handleKeyUp = (event) => {
        const {keyCode, target} = event;

        if (keyCode !== 13) return;

        if (target.value.trim() === '') return;

        const newTodoList = [{
            id: nanoid(),
            name: target.value,
            isDone: false,
        }, ...this.state.todoList];

        this.setState({todoList: newTodoList});

        target.value = '';
    }

    changeTodo = (id, isDone) => {
        let newTodoList = this.state.todoList.map(e => {
            if (e.id === id) {
                e.isDone = isDone;
            }
            return e;
        });
        this.setState({todoList: newTodoList});
    }

    deleteTodo = (id) => {
        const newTodoList = this.state.todoList.filter(e => e.id !== id);
        this.setState({todoList: newTodoList});
    }

    render() {
        return (
            <div className="App">

                <input onKeyUp={this.handleKeyUp} className={'textInput'} placeholder='请输入任务名称，按回车确认'/>

                <div className={'todoListContainer'}>
                    {
                        this.state.todoList.map(todo => {
                            return <Todo todo={todo} key={todo.id} changeTodo={this.changeTodo}
                                         deleteTodo={this.deleteTodo}></Todo>
                        })
                    }
                </div>

                <div>
                    <input type='checkbox'/>
                    <span>已完成{this.state.isDoneNum}/全部{this.state.todoList.length}</span>
                </div>

            </div>
        );
    }

}

