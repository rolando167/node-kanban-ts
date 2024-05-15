import {Router} from 'express';
import { UserController } from '../app/Controllers/UserController';
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
router.get('/getAll', UserController.getAllUsers);
router.post('/create',UserController.create);
router.patch('/:id',UserController.update);
router.delete('/:id', UserController.delete);
export default router;