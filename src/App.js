import './App.css';
import {Component} from "react";
import {TodoClass} from "./components/todo/TodoClass";
import {nanoid} from "nanoid";
import kcAxios from "./utils/axios/core";
import TodoFunc from "./components/todo/TodoFunc";

export default class App extends Component {
    state = {
        todoList: [{
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

    handleCheckAll = (event) => {
        if (event.target.checked) {
            this.state.todoList.forEach(e => e.isDone = true);
        } else {
            this.state.todoList.forEach(e => e.isDone = false);
        }
        this.setState({todoList: this.state.todoList});
    }

    deleteTodo = (id) => {
        const newTodoList = this.state.todoList.filter(e => e.id !== id);
        this.setState({todoList: newTodoList});
    }

    isCheckAll = () => {
        if (this.state.todoList.length === 0) return false;

        const isDoneNum = this.state.todoList.filter(e => e.isDone === true).length;
        if (isDoneNum === this.state.todoList.length) {
            return true;
        }
        return false;
    }

    handleDeleteDone = () => {
        const newTodoList = this.state.todoList.filter(e => e.isDone === false);
        this.setState({todoList: newTodoList});
    }

    handleLogin = () => {
        kcAxios.kcPostByForm({
            url: 'https://api.900sui.cn:442/v1/u/user/login',
            data: {
                phone: '18621212121',
                password: '111111',
                loginType: 2,
            }
        }).then(res => {
            debugger
        })
    }

    render() {
        const isDoneNum = this.state.todoList.filter(e => e.isDone === true).length;
        return (
            <div className="App">

                <input onKeyUp={this.handleKeyUp}
                       className={'textInput'}
                       placeholder='请输入任务名称，按回车确认'/>

                <div className={'todoListContainer'}>
                    {
                        this.state.todoList.map(todo => {
                            return <TodoClass todo={todo} key={todo.id}
                                             changeTodo={this.changeTodo}
                                             deleteTodo={this.deleteTodo}></TodoClass>
                        })
                    }
                </div>

                <div className={'todoListContainer'}>
                    {
                        this.state.todoList.map(todo => {
                            return <TodoFunc todo={todo} key={todo.id}
                                             changeTodo={this.changeTodo}
                                             deleteTodo={this.deleteTodo}></TodoFunc>
                        })
                    }
                </div>

                <div className={'foot'}>
                    <div>
                        <input type='checkbox'
                               checked={this.isCheckAll()}
                               onChange={this.handleCheckAll}/>
                        <span>已完成{isDoneNum} / 全部{this.state.todoList.length}</span>
                    </div>
                    <div>
                        <button onClick={this.handleDeleteDone}
                                className={'footBtn'}>
                            清除已完成任务
                        </button>
                    </div>
                </div>

                <button onClick={this.handleLogin}>login</button>
            </div>
        );
    }

}

