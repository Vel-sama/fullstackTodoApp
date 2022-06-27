import TodoModel from '../models/TodoModel.js';

export const getTodos = (req, res) => {
  return TodoModel.find((err, resp) => {
    if (err) res.status(500).send(err);
    res.status(200).send(resp);
  })
}

export const addTodo = (req, res) => {
  const todo = new TodoModel(req.body);
  return todo.save((err, resp) => {
    if (err) res.status(500).send(err);
    res.status(200).send(resp);
  });
}

export const updateTodo = (req, res) => {
  return TodoModel.findByIdAndUpdate({_id: req.params.id}, req.body, (err, resp) => {
    if (err) res.status(500).send(err);
    res.status(200).send(resp);
    }
  )
}

export const deleteTodo = (req, res) => {
  return TodoModel.deleteOne({_id: req.params.id}, (err, resp) => {
    if (err) res.status(500).send(err);
    res.status(200).send(resp);
  })
}