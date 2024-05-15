import {Router} from 'express';

const router = Router();

/*=============================================================================
|   Modulo:  Users
|   Fecha: 15-05-2024
|   Ruta Test:  http://localhost:3000/api/v1/users/
 *===========================================================================*/

router.get('/', function(req, res) {
    res.status(200).json({
        state: true,
        message: '✔️ Modulo Users!!',
        date: new Date()
    })
});

export default router;