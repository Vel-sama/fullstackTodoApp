import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import todoRouter from './routes/TodoRoutes.js'

dotenv.config();

const app = express();
const port = process.env.PORT || 3333;

mongoose.connect(process.env.MONGOURL, (err) => {
  if (err) console.log(err);
  console.log('Database connected');
});

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', todoRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${ port }`);
})