import { Router } from 'express';
const router: Router = Router();

//setup controller
import {getViewContactMeController,sendDataContactMe,redirectToEmail} from '../../../controller/contactMeController';


// get view contactMe
router.get('/viewContactMe', getViewContactMeController);
router.post('/contactMe/sendData', sendDataContactMe);
router.get('/contactMe/redirectToEmail', redirectToEmail);







export default router;