import {Component} from "react";
import './todo.css'

export class Todo extends Component {
    state = {
        mouse: false,
    }

    handleMouseLeave = (flag) => {
        return () => {
            this.setState({mouse: flag});
        }
    }

    handleCheck = (id) => {
        return (event) => {
            const {changeTodo} = this.props;
            changeTodo(id, event.target.checked);
        }
    }

    render() {
        const {todo} = this.props;

        return (
            <div className={'todo'}
                 style={{backgroundColor: this.state.mouse ? '#ddd' : '#fff'}}
                 onMouseLeave={this.handleMouseLeave(false)} onMouseEnter={this.handleMouseLeave(true)}
                 key={todo.id}>
                <input style={{cursor: 'pointer'}} type={'checkbox'} defaultChecked={todo.isDone}
                       onChange={this.handleCheck(todo.id)}/>
                <span>{todo.name}</span>

                <button style={{display: this.state.mouse ? 'block' : 'none'}} className={'btn'}>删除</button>
            </div>
        )
    }
}