import { Schema, model, models } from "mongoose";
import { hashSync, genSaltSync, compareSync }  from 'bcrypt';

const UsuarioSchema = new Schema({

    nombre: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    img: {
        type: String,
    },
    role: {
        type: String,
        required: false,
        default: 'USER_ROLE'
    },
    google: {
        type: Boolean,
        default: false
    },
    create_at: {
        required: true,
        type: Date
    },
    update_at: {
        required: true,
        type: Date,
        default: Date.now
    }
});

UsuarioSchema.methods.encryptPassword = (password: string) => hashSync(password, genSaltSync(10));

UsuarioSchema.methods.validPassword = function (password: string) {
  return compareSync(password, this.password);
};

// UsuarioSchema.method('toJSON', function() {

// })

export const UserModel = models.Users || model('Users', UsuarioSchema);