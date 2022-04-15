import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState, AppThunk } from "../../app/store";
import { IAllTodos, ITodos } from "../../types/interfaces";

const initialState: IAllTodos = {
  todos: [
    { id: 1, title: "Начать встречаться с моделью", completed: false},
    { id: 2, title: "Жениться", completed: false},
    { id: 3, title: "Развестись", completed: false},
    { id: 4, title: "Начать встречаться с нормальной девушкой", completed: false},
    { id: 5, title: "Начать токсичные отношения", completed: true},
    { id: 6, title: "Понять что они токсичные", completed: true},
    { id: 7, title: "Выйти из токсичных отношений", completed: true},
  ]
}

export const familyTodosSlice = createSlice({
  name: 'familyTodos',
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

export const { addTodo, toggleCompletedTodo, removeTodo } = familyTodosSlice.actions
export const selectFamilyTodos = (state: RootState) => state.familyTodos.todos
export default familyTodosSlice.reducer