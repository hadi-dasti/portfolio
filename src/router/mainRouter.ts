import { Router } from 'express';
const router: Router = Router();



// Implementation  homepage in portfolio
import homePage from './mainPageRouter/homePage/homePageRouter';
router.use('/portfolio', homePage);

// Implementation  Admin portFolio router
import adminPortfolio from './mainPageRouter/admin/adminPageRouter';
router.use('/portfolio/admin', adminPortfolio);


// Implementation About Me in portFolio
import aboutMe from './mainPageRouter/aboutMe/aboutMeRouter';
router.use('/portfolio/aboutMe', aboutMe);

// Implementation myResume in portFolio
import myResume from './mainPageRouter/myResume/myResumeRouter';
router.use('/portfolio/myResume', myResume);

// Implementation myPortFolio in portFolio
import myPortFolio from './mainPageRouter/myPortFolio/myPortFolioRouter';
router.use('/portfolio/myPortFolio', myPortFolio);

// Implementation client comment in portFolio
import clientComments from './mainPageRouter/clientComment/clientComment';
router.use('/portfolio/clientComment', clientComments);


// Implementation contactMe in portFolio
import contactMe from './mainPageRouter/contactMe/contactMeRouter';
router.use('/portfolio/contactMe', contactMe);


export default router;