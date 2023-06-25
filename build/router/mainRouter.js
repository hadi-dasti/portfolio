"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// Implementation  homepage in portfolio
const homePageRouter_1 = __importDefault(require("./mainPageRouter/homePage/homePageRouter"));
router.use('/portfolio', homePageRouter_1.default);
// Implementation  Admin portFolio router
const adminPageRouter_1 = __importDefault(require("./mainPageRouter/admin/adminPageRouter"));
router.use('/portfolio/admin', adminPageRouter_1.default);
// Implementation About Me in portFolio
const aboutMeRouter_1 = __importDefault(require("./mainPageRouter/aboutMe/aboutMeRouter"));
router.use('/portfolio/aboutMe', aboutMeRouter_1.default);
// Implementation myResume in portFolio
const myResumeRouter_1 = __importDefault(require("./mainPageRouter/myResume/myResumeRouter"));
router.use('/portfolio/myResume', myResumeRouter_1.default);
// Implementation myPortFolio in portFolio
const myPortFolioRouter_1 = __importDefault(require("./mainPageRouter/myPortFolio/myPortFolioRouter"));
router.use('/portfolio/myPortFolio', myPortFolioRouter_1.default);
// Implementation client comment in portFolio
const clientComment_1 = __importDefault(require("./mainPageRouter/clientComment/clientComment"));
router.use('/portfolio/clientComment', clientComment_1.default);
// Implementation contactMe in portFolio
const contactMeRouter_1 = __importDefault(require("./mainPageRouter/contactMe/contactMeRouter"));
router.use('/portfolio/contactMe', contactMeRouter_1.default);
exports.default = router;
