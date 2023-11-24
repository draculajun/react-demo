import {Component} from "react";
import './todoList.css'
import {Todo} from "../todo/Todo";

export class TodoList extends Component {
  render() {
    const {todoList} = this.props;

    return (
        <div className={'todoListContainer'}>
          {
            todoList.map(todo => {
              return <Todo todo={todo} key={todo.id}></Todo>
            })
          }
        </div>
    )
  }
}