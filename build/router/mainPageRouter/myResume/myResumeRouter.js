"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// import controller of myResume
const myResumeController_1 = require("../../../controller/myResumeController");
// setup myResume router
router.get('/', myResumeController_1.myResumeController);
exports.default = router;
