import { Router } from 'express';
const router: Router = Router();

// setup multer for homePage
import  uploadImage  from '../../upload/uploadImage';

//controller
import { homePageController,getHomePageController } from '../../controller/homePageController';

// create router for homepage 
router.post('/homePage', uploadImage.single('backGroundImage'), homePageController);
router.get('/getHomePage',getHomePageController)





export default router;