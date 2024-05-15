// import http from "http";
// @ts-ignore
import { app } from "./core/config/express.ts";
// @ts-ignore
import { PORT } from "./core/config/env.ts";
// @ts-ignore
import { conectarBD } from "./databases/database.ts";
// @ts-ignore
import router from "./routes/indexRoute.ts";

export class Server{

    constructor(){
        conectarBD();
        this.routes();
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
    routes(){
        app.use('/api/v1',  router);
    }
    listen = async (): Promise<any> => {
        await app.listen(PORT || 4000, ()=>{
            console.log(`♦♦ → Servidor ejecutando en el puerto ${PORT || 4000} 👍`);
        })
    }

}