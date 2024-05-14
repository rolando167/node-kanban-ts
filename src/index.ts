 
import http from "http";
 
// @ts-ignore
import { app } from "./core/config/express.ts";
 
 

const server = http.createServer(app);

server.listen(3000, () =>{
    console.log(`🚀 Servidor ejecutando en puerto: 3000 👍`);
})
