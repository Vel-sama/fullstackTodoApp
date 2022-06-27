import TodoProps from '../models/TodoProps.model';
import TodoModel from '../models/Todo.model';

export default class TodoService {
  async getTodos() {
    const requestOptions = {
      method: 'GET',
      headers:
        {
          'Content-Type': 'application/json',
        },
    };

    let response = await fetch('http://localhost:3333/api/todo', requestOptions);

    if (!response.ok) {
      throw new Error(response.statusText)
    } else {
      const data = await response.json();
      return data.map((item: any) => item as TodoModel)
    }
  }
}