import { combineReducers, configureStore , ThunkAction, Action } from "@reduxjs/toolkit"
import homeReducer from "../features/todos/homeTodosSlice";
import familyReducer from "../features/todos/familyTodosSlice"
import sportReducer from "../features/todos/sportTodosSlice";
import workReducer from "../features/todos/workTodosSlice";

const rootReducer = combineReducers( {
  homeTodos: homeReducer,
  familyTodos: familyReducer,
  sportTodos: sportReducer,
  workTodos: workReducer
  }
)

export const store = configureStore({
  reducer: rootReducer
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
  >;