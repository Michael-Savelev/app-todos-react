import React, {useRef, useState} from "react";
import styles from "../../../styles/Todos.module.css"
import TodoItem from "./TodoItem";
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {addTodo} from "../../../features/todos/familyTodosSlice";
import {IAllTodos, IPropsTodos, ITodos} from "../../../types/interfaces";

const Todos: React.FC<IPropsTodos> = (props) => {
  const todos = props.todos
  const actions = props.actions
  console.log(actions)
  const dispatch = useAppDispatch()
  const [todoValue, setTodoValue] = useState('')
  const value = String(todoValue) || '';

  const addTodoHandler = () => {
    if (value.length > 0)
    dispatch(actions.addTodo(value))
    setTodoValue('')
  }
  return(
    <div>
      <div className={styles.input}>
        <input
          value={todoValue}
          id="add"
          type="text"
          className={styles.int}
          placeholder="Введите новую задачу"
          onChange={(e) => setTodoValue(e.target.value)}
        />
        <label htmlFor="add" className={styles.lbl}></label>
        <a
          className="waves-effect waves-light btn"
          onClick={addTodoHandler}
        >
          Создать задачу</a>
      </div>
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>Активные задачи</h1>
      <li className={styles.li}>
        { todos.map( (todo: ITodos) => {
          if (!todo.completed) {
            return <TodoItem todo={todo} key={todo.id} actions={actions}/>}
        } ) }
      </li>
      <h1 className={styles.heading}>Завершенные задачи</h1>
      <li className={styles.li}>
        {todos.map((todo: ITodos) => {
          if (todo.completed) {
            return <TodoItem todo={todo} key={todo.id} actions={actions} />}
        } ) }
      </li>
    </div>
    </div>
  )
}

export default Todos