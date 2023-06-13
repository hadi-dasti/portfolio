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
exports.loginAdminController = void 0;
const Admin_1 = require("../model/Admin");
// singUp Admin
const loginAdminController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        // Check if admin with email and password already exists
        const existingAdmin = yield Admin_1.Admin.findOne({
            $or: [{ email, password }]
        });
        // exist admin in database
        if (existingAdmin) {
            return res.status(400).json({
                success: false,
                msg: "email and password already is database"
            });
        }
        ;
        // create  document of modal Admin
        const newAdmin = yield Admin_1.Admin.create({
            email,
            password
        });
        if (!newAdmin) {
            return res.status(404).json({
                success: false,
                msg: "Error Not Found"
            });
        }
        // export generate token 
        const token = newAdmin.generateToken();
        return res.status(201).json({
            success: true,
            data: {
                token,
                newAdmin: newAdmin._id
            },
            msg: 'successfully  generate token for singUp Admin'
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            msg: "Internal Server Error" + "&&" + error.message
        });
    }
    ;
});
exports.loginAdminController = loginAdminController;
