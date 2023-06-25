import { Router } from 'express';
const router: Router = Router();

// setup myPortFolio controller
import { getMainPageMyPortfolio } from '../../../controller/myPortFolioController/myPortfolioController';
// setup myPortFolio[subPage_1] controller
import {getSubPageOneMyPOrtFolio_1} from '../../../controller/myPortFolioController/myPortfolioSubPage_1';
// setup myPortFolio[subPage_2] controller
import { getSubPageOneMyPOrtFolio_2 } from '../../../controller/myPortFolioController/myPortfolioSubPage_2';
// setup myPortFolio[subPage_3] controller
import { getSubPageOneMyPOrtFolio_3 } from '../../../controller/myPortFolioController/myPortfolioSubPage_3';
// setup myPortFolio[subPage_4] controller
import { getSubPageOneMyPOrtFolio_4 } from '../../../controller/myPortFolioController/myPortfolioSubPage_4';



// view all router of myPortFolio 
router.get('/', getMainPageMyPortfolio);

//subPage [#page 1 router] of myPortFolio
router.get('/myPortFolio_1', getSubPageOneMyPOrtFolio_1);

//subPage [#page 2 router] of myPortFolio
router.get('/myPortFolio_2', getSubPageOneMyPOrtFolio_2);

//subPage [#page 3 router] of myPortFolio
router.get('/myPortFolio_3', getSubPageOneMyPOrtFolio_3);

//subPage [#page 3 router] of myPortFolio
router.get('/myPortFolio_4', getSubPageOneMyPOrtFolio_4);




export default router;