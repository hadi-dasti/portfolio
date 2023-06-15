"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// Implementation  Admin portFolio router
const adminPageRouter_1 = __importDefault(require("./mainPageRouter/adminPageRouter"));
router.use('/portfolio/admin', adminPageRouter_1.default);
// Implementation  homepage routers for portfolio
const homePage_1 = __importDefault(require("./mainPageRouter/homePage"));
router.use('/portfolio', homePage_1.default);
exports.default = router;
