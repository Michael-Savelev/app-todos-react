import React from "react";
import {ITodos} from "../types/interfaces";
import {useAppSelector} from "../app/hooks";
import {addTodo, removeTodo, selectSportTodos, toggleCompletedTodo} from "../features/todos/sportTodosSlice";
import {deleteCounter} from "../comps/LeftBody/Todos/TodoItem";
import styles from "../styles/HomePage.module.css";
import WeeksSuccess from "../comps/LeftBody/WeeksSuccess /WeeksSuccess";
import Todos from "../comps/LeftBody/Todos/Todos";

const SportPage: React.FC = () => {
  const todos: Array<ITodos> = useAppSelector(selectSportTodos)
  const completedTodos = todos.filter(todo => todo.completed === true)
  const deletedTodos = deleteCounter
  const arrayCounters: Array<number> = [todos.length, completedTodos.length, deletedTodos.length]
  const actions = { addTodo, toggleCompletedTodo, removeTodo}
  return(
    <>
      <div>
        <div className={styles.wrapper}>
          <WeeksSuccess
            arrayCounters={arrayCounters}
          />
          <Todos
            todos={todos}
            actions={actions}
          />
        </div>
      </div>
    </>
  )
}
export default SportPage