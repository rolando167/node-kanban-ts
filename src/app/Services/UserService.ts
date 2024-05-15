import { UserModel } from "../domain/Models"
import bcrypt from 'bcrypt';

export const userService = {
    getAll: async()=>{
        return await UserModel.find();
    },

    create: async(entity: object)=>{
        // Encriptar contraseña
         const salt = bcrypt.genSaltSync();
        // usuario.password = bcrypt.hashSync( password, salt );

        return await UserModel.create(entity);
    },

    update: async(id:string, body:object)=>{
        return await UserModel.findByIdAndUpdate(id, body);
    },

    delete: async(id:string)=>{
        return await UserModel.findByIdAndDelete(id);
    }
}