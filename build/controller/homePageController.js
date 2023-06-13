"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHomePageController = exports.homePageController = void 0;
const HomePage_1 = require("../model/HomePage");
// setup image in homePage
const homePageController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // upload filename photo
        const file = req.file;
        const { backGroundImage } = req.body;
        // create document of model homePage
        const homePage = yield HomePage_1.homePageImage.create({
            backGroundImage
        });
        if (!homePage) {
            return res.status(404).json({
                success: false,
                msg: 'Not Found Error'
            });
        }
        ;
        return res.status(201).json({
            success: true,
            data: homePage._id,
            msg: "successfully create image in homepage"
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            msg: "Internal Server Error" + " && " + error.message
        });
    }
});
exports.homePageController = homePageController;
// get homePage
const getHomePageController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = {
            title: '<h1>Welcome to portfolio!</h1>',
            message: 'This is some sample content.',
        };
        if (!data) {
            return res.status(404).json({
                success: false,
                msg: 'Not Found Error'
            });
        }
        ;
        return res.status(200).json({
            success: true,
            data: data,
            msg: "Successfully get data of homepage"
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            msg: "Internal Server Error" + " &&" + error.message
        });
    }
});
exports.getHomePageController = getHomePageController;
