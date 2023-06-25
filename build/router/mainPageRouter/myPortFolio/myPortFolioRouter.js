"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// setup myPortFolio controller
const myPortfolioController_1 = require("../../../controller/myPortFolioController/myPortfolioController");
// setup myPortFolio[subPage_1] controller
const myPortfolioSubPage_1_1 = require("../../../controller/myPortFolioController/myPortfolioSubPage_1");
// setup myPortFolio[subPage_2] controller
const myPortfolioSubPage_2_1 = require("../../../controller/myPortFolioController/myPortfolioSubPage_2");
// setup myPortFolio[subPage_3] controller
const myPortfolioSubPage_3_1 = require("../../../controller/myPortFolioController/myPortfolioSubPage_3");
// setup myPortFolio[subPage_4] controller
const myPortfolioSubPage_4_1 = require("../../../controller/myPortFolioController/myPortfolioSubPage_4");
// view all router of myPortFolio 
router.get('/', myPortfolioController_1.getMainPageMyPortfolio);
//subPage [#page 1 router] of myPortFolio
router.get('/myPortFolio_1', myPortfolioSubPage_1_1.getSubPageOneMyPOrtFolio_1);
//subPage [#page 2 router] of myPortFolio
router.get('/myPortFolio_2', myPortfolioSubPage_2_1.getSubPageOneMyPOrtFolio_2);
//subPage [#page 3 router] of myPortFolio
router.get('/myPortFolio_3', myPortfolioSubPage_3_1.getSubPageOneMyPOrtFolio_3);
//subPage [#page 3 router] of myPortFolio
router.get('/myPortFolio_4', myPortfolioSubPage_4_1.getSubPageOneMyPOrtFolio_4);
exports.default = router;
