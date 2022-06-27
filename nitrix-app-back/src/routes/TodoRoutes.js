import express from 'express';
import { addTodo, deleteTodo, getTodos, updateTodo } from '../controllers/TodoController.js'

const todoRouter = express.Router();

todoRouter.route('/todo')
  .get(getTodos)
  .post(addTodo)

todoRouter.route('/todo/:id')
  .put(updateTodo)
  .delete(deleteTodo)


export default todoRouter;