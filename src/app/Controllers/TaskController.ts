import {Response, Request, NextFunction} from 'express';
import { taskService } from '../Services';

export const taskController = {
    getAllTask: async(req:Request, res:Response, next:NextFunction)=>{
      try {
        const data = await taskService.getAll();
        return res.json(data);
      } catch (error:any) {
        res.status(400).json({
          message: error.message
        })
      }
    },
}