// import http from "http";

// @ts-ignore
import { app } from "./core/config/express.ts";
// @ts-ignore
import { PORT } from "./core/config/env.ts";
// @ts-ignore
import { DB_CONNECTION_P1 } from "./core/config/database.ts";

import mongoose from "mongoose";
// const server = http.createServer(app);
// server.listen(3000, () =>{
//     console.log(`🚀 Servidor ejecutando en puerto: 3000 👍`);
// })

//funcion Servidor
async function servidor () {
    await app.listen(PORT || 4000);
    console.log(`🚀º ♦ → ♠ ♣ ♥ ■ ░▒▓ █ Servidor ejecutando en el puerto ${PORT || 4000} 👍`);
}

//Iniciar Servidor
servidor();



// base de datos
async function baseDatos ()   {

    try {
        await mongoose.connect( DB_CONNECTION_P1  );
        console.log('DB Online :D');
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la BD ver logs');
    }


}

//Iniciar base de datos
baseDatos();
