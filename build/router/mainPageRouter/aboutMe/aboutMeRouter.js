"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// setup controller of aboutMe
const aboutMeController_1 = require("../../../controller/aboutMeController");
// setup get router information of aboutMe
router.get('/', aboutMeController_1.getAboutMe);
exports.default = router;
