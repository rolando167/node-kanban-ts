import {Router} from 'express';

const router = Router();
/*=============================================================================
|   Modulo:  Auth
|   Fecha: 15-05-2024
|   Ruta Test:  http://localhost:3000/api/v1/auth/
 *===========================================================================*/

router.get('/', function(req, res) {
    res.status(200).json({
        state: true,
        message: '✔️ Modulo Auth!!'
    })
});

export default router;