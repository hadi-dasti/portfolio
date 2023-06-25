import { Router} from 'express';
const router: Router = Router();


// controller admin 
import { loginAdminController,getAdminController } from '../../../controller/adminPageController';

// admin validation 
import { adminValidation } from '../../../validation/adminValidator';

// login Router admin
router.post('/login', adminValidation, loginAdminController);
router.get('/getAdmin', getAdminController);


export default router;