// import http from "http";

// @ts-ignore
import { app } from "./core/config/express.ts";
// @ts-ignore
import { PORT } from "./core/config/env.ts";

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