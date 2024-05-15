import {Response, Request, NextFunction} from 'express';
import { userService } from '../Services';

export const UserController = {

    getAllUsers: async(req:Request, res:Response, next:NextFunction)=>{
        try {
          const data = await userService.getAll();
          return res.json(data);
        } catch (error:any) {
          res.status(400).json({
            message: error.message
          })
        }
    },

    create: async(req:Request, res:Response)=>{
        try {
            const data = await userService.create(req.body);
            return res.json(data);
        } catch (error:any) {
            res.status(400).json({
              message: error.message
            })
        }
    },
}