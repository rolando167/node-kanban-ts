import express from "express";
const router = express.Router();

/*=============================================================================
|   Modulo:  Rutas Totales
|   Fecha: 08-05-2024
|   Ruta Test:  http://localhost:3000/api/v1/
 *===========================================================================*/

router.get('/', function(req, res, next) {
    res.status(200).send('🚀 Bienvenidos a la pagina principal API!! ✋');
});



export default router;