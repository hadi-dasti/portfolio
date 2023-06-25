"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
//setup controller
const contactMeController_1 = require("../../../controller/contactMeController");
// get view contactMe
router.get('/viewContactMe', contactMeController_1.getViewContactMeController);
router.post('/contactMe/sendData', contactMeController_1.sendDataContactMe);
router.get('/contactMe/redirectToEmail', contactMeController_1.redirectToEmail);
exports.default = router;
