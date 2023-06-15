import { Router } from 'express';
const router: Router = Router();


// Implementation  Admin portFolio router
import adminPortfolio from './mainPageRouter/adminPageRouter';
router.use('/portfolio/admin', adminPortfolio);


// Implementation  homepage routers for portfolio
import homePage from './mainPageRouter/homePage';
router.use('/portfolio', homePage);




export default router;