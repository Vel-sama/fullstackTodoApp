import TodoModel from './Todo.model';

export default interface TodoProps {
  todo: TodoModel,
  removeTodo: () => void,
  updateTodo: (text: string) => void
}