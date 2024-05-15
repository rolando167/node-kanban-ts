// import http from "http";
// @ts-ignore
import { app } from "./core/config/express.ts";
// @ts-ignore
import { PORT } from "./core/config/env.ts";
// @ts-ignore
import { conectarBD } from "./databases/database.ts";

export class Server{

    constructor(){
        conectarBD();
    }
    // const server = http.createServer(app);
    // server.listen(3000, () =>{
    //     console.log(`🚀 Servidor ejecutando en puerto: 3000 👍`);
    // })

    //funcion Servidor
    // async function servidors () {
    //     await app.listen(PORT || 4000);
    //     console.log(`♦♦ → Servidor ejecutando en el puerto ${PORT || 4000} 👍`);
    // }

    listen = async (): Promise<any> => {
        await app.listen(PORT || 4000, ()=>{
            console.log(`♦♦ → Servidor ejecutando en el puerto ${PORT || 4000} 👍`);
        })
    }

}