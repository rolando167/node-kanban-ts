import { Schema, model } from "mongoose";

const taskSchema = new Schema({
    name:{
      type: String,
      required: true
    },
    description:{
      type: String
    },
    status:{
      type: Boolean,
      default: true
    }
  });

export const TaskModel = model('tasks', taskSchema);