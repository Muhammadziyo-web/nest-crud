import mongoose, { Schema } from 'mongoose';

const TodosShema = new mongoose.Schema(
  {
    title: String,
    text: String,
  },
  { timestamps: true },
);
export  default TodosShema