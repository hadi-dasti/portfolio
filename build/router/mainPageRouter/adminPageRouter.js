"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// controller admin 
const adminPageController_1 = require("../../controller/adminPageController");
// login Router admin
router.post('/login', adminPageController_1.loginAdminController);
exports.default = router;
