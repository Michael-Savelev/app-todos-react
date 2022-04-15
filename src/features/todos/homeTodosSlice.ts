import { createSlice, PayloadAction,createAsyncThunk } from "@reduxjs/toolkit"
import { RootState, AppThunk } from "../../app/store";
import { IAllTodos, ITodos } from "../../types/interfaces";

const initialState: IAllTodos = {
  todos: [
    { id: 1, title: "Убраться дома", completed: false},
    { id: 2, title: "Постричь газон", completed: false},
    { id: 3, title: "Вспомнить что у мены нет газона", completed: false},
    { id: 4, title: "Подумать о вечном", completed: false},
    { id: 5, title: "Приготовить еду", completed: true},
    { id: 6, title: "Покормить собаку", completed: true},
    { id: 7, title: "Позавтракать", completed: true},
  ]
}



export const homeTodosSlice = createSlice({
  name: 'homeTodos',
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

export const { addTodo, toggleCompletedTodo, removeTodo } = homeTodosSlice.actions
export const selectHomeTodos = (state: RootState) => state.homeTodos.todos
export default homeTodosSlice.reducer