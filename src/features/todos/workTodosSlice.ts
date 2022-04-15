import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState, AppThunk } from "../../app/store";
import { IAllTodos, ITodos } from "../../types/interfaces";

const initialState: IAllTodos = {
  todos: [
    { id: 1, title: "Найти работу мечты", completed: false},
    { id: 2, title: "Стать экспертом в Front-end разработке", completed: false},
    { id: 3, title: "Создать IT-компанию №1 в мире", completed: false},
    { id: 4, title: "Улететь в космос", completed: false},
    { id: 5, title: "Выучиться на Front-end разработчика", completed: true},
    { id: 6, title: "Сделать резюме", completed: true},
    { id: 7, title: "Сделать проект Tasks Book для портфолио", completed: true},
  ]
}

export const workTodosSlice = createSlice({
  name: 'workTodos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<any>) => {
      state.todos.push({id: state.todos.length + 1, title: action.payload, completed: false})
    },
    toggleCompletedTodo: (state, action: PayloadAction<number>) => {
      const toggleTodo = state.todos.find( todo => todo.id === action.payload)
      toggleTodo!.completed = !toggleTodo!.completed
    },
    removeTodo: (state, action: PayloadAction<any>) => {
      state.todos = state.todos.filter( todo => todo.id !== action.payload)
    }
  }
})

export const { addTodo, toggleCompletedTodo, removeTodo } = workTodosSlice.actions
export const selectWorkTodos = (state: RootState) => state.workTodos.todos
export default workTodosSlice.reducer