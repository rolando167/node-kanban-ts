import { Schema, model, models } from "mongoose";

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

export const TaskModel = models.Tasks || model('Tasks', taskSchema); // si no existe crea la collecion en bd