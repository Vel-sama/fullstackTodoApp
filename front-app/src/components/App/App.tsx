import React, { useEffect, useState } from 'react';
import './App.css';
import { Todo } from "../Todo/Todo";
import { Form } from "../Form/Form";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { v4 as uuidv4 } from "uuid";
import TodoService from '../../services/Todo.service';

function App() { 
  const todoService = new TodoService();
  const [todos, setTodos] = useState<{ _id: string; text: string, status: boolean }[]>([]);
  
  const getTodos = async () => {
    const response = await todoService.getTodos();
    setTodos(response);  
  }

  const addTodo = (text: string) => {
    const todo = {
      _id: uuidv4(),
      text,
      status: false
    };

    setTodos([...todos, todo]);
  };

  const removeTodo = (id: string) => {
    setTodos(todos.filter((item : any) => item._id !== id));
  };

  const updateTodo = (id: string, text: string) => {
    const itemIndexToUpdate = todos.findIndex((todo : any) => todo._id === id);
    const todoCopy = [...todos];
    todoCopy[itemIndexToUpdate].text = text;
    setTodos(todoCopy);
    console.log(todos);
  };
  
  useEffect(() => {
    getTodos();
  }, [])

  return (
    <Grid container>
      <Grid container justifyContent="center">
        <Grid item>
          <Box>
            <Form addTodo={addTodo} />
          </Box>
        </Grid>
      </Grid>
      <Grid container m={2} justifyContent="center">
        <Grid item>
          {todos.map((todo : any) => (
            <Todo
              key={todo._id}
              todo={todo}
              removeTodo={() => removeTodo(todo._id)}
              updateTodo={(text) => updateTodo(todo._id, text)}
            />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
