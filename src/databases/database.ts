import mongoose from "mongoose";

const DB_USER =  process.env.DB_USER;
const DB_PASSWORD =  process.env.DB_PASSWORD;
const DB_STRING =  process.env.DB_STRING;
const DB_HOST =  process.env.DB_HOST;
const DB_PORT =  process.env.DB_PORT;
const DB_NAME =  process.env.DB_NAME;

// const DB_CONNECTION =  `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;
const DB_CONNECTION_URI1 =  `${DB_STRING}://${DB_HOST}:${DB_PORT}/${DB_NAME}`;


// base de datos
const conectarBD = async () => {
    try {
        await mongoose.connect(DB_CONNECTION_URI1 as string);
        console.log('█ → DB conectado exitosamente!!');
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la BD ver logs');
    }
}

export {
    conectarBD
};