import {Response, Request} from 'express';
import { userService } from '../Services';

export const UserController = {

    getAllUsers: async(req:Request, res:Response)=>{
        try {
          const data = await userService.getAll();
          console.log(data);

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

    update: async(req:Request, res:Response)=>{
        try {
          const {id} = req.params;
          const data = await userService.update(id, req.body);
          return res.json(data);
        } catch (error:any) {
          res.status(400).json({
            message: error.message
          })
        }
    },

    delete: async(req:Request, res:Response)=>{
        try {
          const {id} = req.params;
          const data = await userService.delete(id);
          return res.json(data);
        } catch (error:any) {
          res.status(400).json({
            message: error.message
          })
        }
    },
}