import {Router} from 'express';
import { taskController } from 'app/Controllers';
const router = Router();

/*=============================================================================
|   Modulo:  task
|   Fecha: 15-05-2024
|   Ruta Test:  http://localhost:3000/api/v1/task/
 *===========================================================================*/

router.get('/', function(req, res) {
    res.status(200).json({
        state: true,
        message: '✔️ Modulo task!!'
    })
});

export default router;