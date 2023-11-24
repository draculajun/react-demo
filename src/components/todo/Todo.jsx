import {Component} from "react";
import './todo.css';
import PropTypes from 'prop-types';

export class Todo extends Component {

    static propTypes = {
        changeTodo: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired,
        todo: PropTypes.object.isRequired,
    }

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
        const {todo, changeTodo, deleteTodo} = this.props;

        return (
            <div className={'todo'}
                 style={{backgroundColor: this.state.mouse ? '#ddd' : '#fff'}}
                 onMouseLeave={this.handleMouseLeave(false)} onMouseEnter={this.handleMouseLeave(true)}
                 key={todo.id}>
                <input style={{cursor: 'pointer'}} type={'checkbox'} defaultChecked={todo.isDone}
                       onChange={(event) => {
                           changeTodo(todo.id, event.target.checked)
                       }}/>
                <span>{todo.name}</span>

                <button style={{display: this.state.mouse ? 'block' : 'none'}} className={'btn'}
                        onClick={() => {
                            deleteTodo(todo.id)
                        }}>删除
                </button>
            </div>
        )
    }
}