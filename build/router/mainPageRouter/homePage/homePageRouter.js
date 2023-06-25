"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// setup multer for homePage
const uploadImage_1 = __importDefault(require("../../../upload/uploadImage"));
//controller
const homePageController_1 = require("../../../controller/homePageController");
// create router for homepage 
router.post('/homePage', uploadImage_1.default.single('backGroundImage'), homePageController_1.homePageController);
router.get('/getHomePage', homePageController_1.getHomePageController);
exports.default = router;
