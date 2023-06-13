"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = exports.adminSchema = exports.JWT_EXPIRATION_TIME = exports.JWT_SECRETE = void 0;
const mongoose_1 = require("mongoose");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv = __importStar(require("dotenv"));
const path_1 = require("path");
// setup join path as dotenv
dotenv.config({ path: (0, path_1.join)(__dirname, '../../../portfolio/.env') });
exports.JWT_SECRETE = process.env.JWT_SECRETE;
exports.JWT_EXPIRATION_TIME = process.env.JWT_EXPIRATION_TIME;
;
//  create schema
exports.adminSchema = new mongoose_1.Schema({
    email: { type: String, unique: true, required: [true, 'please provide an email'] },
    password: { type: String, unique: true, minLength: 8, required: [true, 'please provide a password'] },
    token: { type: String },
    tokenExpiration: { type: Date }
}, {
    timestamps: true
});
// Hash the password before saving it to the database
exports.adminSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const admin = this;
        if (!admin.isModified('password')) {
            return next();
        }
        // hash password
        const salt = yield bcryptjs_1.default.genSalt();
        const hashPassword = yield bcryptjs_1.default.hash(admin.password, salt);
        admin.password = hashPassword;
        return next();
    });
});
// Define  method to generate a token
exports.adminSchema.methods.generateToken = function () {
    const tokenAdmin = jsonwebtoken_1.default.sign({ adminId: this._id }, exports.JWT_SECRETE, { expiresIn: exports.JWT_EXPIRATION_TIME });
    this.token = tokenAdmin;
    this.tokenExpiration = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toString();
    this.save();
    return tokenAdmin;
};
exports.Admin = (0, mongoose_1.model)('Admin', exports.adminSchema);
