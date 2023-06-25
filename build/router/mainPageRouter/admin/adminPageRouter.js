"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// controller admin 
const adminPageController_1 = require("../../../controller/adminPageController");
// admin validation 
const adminValidator_1 = require("../../../validation/adminValidator");
// login Router admin
router.post('/login', adminValidator_1.adminValidation, adminPageController_1.loginAdminController);
router.get('/getAdmin', adminPageController_1.getAdminController);
exports.default = router;
