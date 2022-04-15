import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit"
import { RootState, AppThunk } from "../../app/store";

const initialState = {
  todos: [
    { id: 1, title: "Начать бегать по утрам. 1 попытка.", completed: false},
    { id: 2, title: "Начать бегать по утрам. 2 попытка.", completed: false},
    { id: 3, title: "Забить", completed: false},
    { id: 4, title: "Продать абонемент в спортзал", completed: false},
    { id: 5, title: "Купить спортивную одежду", completed: true},
    { id: 6, title: "Купить абонемент в зал", completed: true},
    { id: 7, title: "Купить спортпит", completed: true},
  ]
}

export const sportTodosSlice = createSlice({
  name: 'sportTodos',
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
    },

  },
})

export const { addTodo, toggleCompletedTodo, removeTodo} = sportTodosSlice.actions
export const selectSportTodos = (state: RootState) => state.sportTodos.todos
export default sportTodosSlice.reducer