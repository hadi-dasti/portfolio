import { Router } from 'express';
const router: Router = Router();

// import controller of myResume
import { myResumeController } from '../../../controller/myResumeController';

// setup myResume router
router.get('/', myResumeController);


export default router;