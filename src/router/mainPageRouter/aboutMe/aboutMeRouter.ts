import { Router } from 'express';
const router: Router = Router();

// setup controller of aboutMe
import { getAboutMe } from '../../../controller/aboutMeController';

// setup get router information of aboutMe
router.get('/', getAboutMe);


export default router;