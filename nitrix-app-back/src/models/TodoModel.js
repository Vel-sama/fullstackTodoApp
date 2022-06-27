import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  status: {
    type: Boolean,
    required: true
  }
})

const TodoModel = mongoose.model('Todo', TodoSchema);

export default TodoModel;