import express from "express";
const router = express.Router();
// @ts-ignore
import authRoute from "./AuthRoute.ts";
// @ts-ignore
import taskRoute from "./TaskRoute.ts";

/*=============================================================================
|   Modulo:  Rutas Totales
|   Fecha: 15-05-2024
|   Ruta Test:  http://localhost:3000/api/v1/
 *===========================================================================*/

router.get('/', function(req, res, next) {
    res.status(200).send('🚀 Bienvenidos a la pagina principal API!! ✋');
});

router.use('/auth', [], authRoute);
router.use('/task', [], taskRoute);

export default router;