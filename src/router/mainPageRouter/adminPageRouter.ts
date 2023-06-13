import { Router} from 'express';
const router: Router = Router();


// controller admin 
import { loginAdminController } from '../../controller/adminPageController';

// login Router admin
router.post('/login',loginAdminController)



export default router;