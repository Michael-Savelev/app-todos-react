export interface ITodos {
  id: number,
  title: string,
  completed: boolean
}

export interface IAllTodos {
  todos: Array<ITodos>
}

export interface IPropsTodos {
  todos: Array<ITodos>,
  actions: any
}

export interface ISuccess {
  arrayCounters: Array<number>
}

export interface ITodoItem {
  todo: ITodos
  key: number
  actions: any
}
export interface SuccessProps {
  heading: string,
  value: any
}