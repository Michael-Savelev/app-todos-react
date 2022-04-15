import React from "react";
import styles from "../styles/HomePage.module.css"
import WeeksSuccess from "../comps/LeftBody/WeeksSuccess /WeeksSuccess";
import Todos from "../comps/LeftBody/Todos/Todos";
import { useAppSelector } from "../app/hooks";
import { selectHomeTodos } from "../features/todos/homeTodosSlice";
import { deleteCounter } from "../comps/LeftBody/Todos/TodoItem";
import { ITodos} from "../types/interfaces";
import { addTodo, toggleCompletedTodo, removeTodo } from "../features/todos/homeTodosSlice";

const HomePage: React.FC = () => {
  const todos: Array<ITodos> = useAppSelector(selectHomeTodos)
  const completedTodos = todos.filter(todo => todo.completed === true)
  const deletedTodos = deleteCounter
  const arrayCounters: Array<number> = [todos.length, completedTodos.length, deletedTodos.length]
  const actions = { addTodo, toggleCompletedTodo, removeTodo, }
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

export default HomePage