"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// handel controller for client comment
const clientsComment_Controller_1 = require("../../../controller/clientsComment.Controller");
router.get('/viewClient', clientsComment_Controller_1.getClientsCommentController);
exports.default = router;
