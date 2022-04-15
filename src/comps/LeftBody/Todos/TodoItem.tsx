import React from "react";
import styles from "../../../styles/TodoItem.module.css"
import trash from "../../../img/icons/trash.svg"
import {useAppDispatch} from "../../../app/hooks";
import {toggleCompletedTodo, removeTodo} from "../../../features/todos/homeTodosSlice";
import {ITodoItem, ITodos} from "../../../types/interfaces";

export const deleteCounter: Array<number> = []

const TodoItem: React.FC<ITodoItem> = (props) => {
  const todo = props.todo
  const actions = props.actions
  const classes: Array<string> = []
  const dispatch = useAppDispatch()
  const todoId: number = todo.id
  const completedTodoHandler = () => {
    setTimeout(() => {dispatch(actions.toggleCompletedTodo(todoId))}, 500)
  }
  const removeTodoHandler = () => {
    dispatch(actions.removeTodo(todoId))
    deleteCounter.push(todoId)
  }
  if (todo.completed) {
    classes.push(styles.done)
  }
  return(
    <div className={styles.wrapper}>
      <label>
        <input
          type="checkbox"
          onClick={completedTodoHandler}
          defaultChecked={todo.completed}
        />
          <span className={classes.join(' ')}> {todo.title}</span>
      </label>
      <img
        className={styles.trash}
        src={trash}
        onClick={removeTodoHandler}/>
    </div>
  )
}

export default TodoItem