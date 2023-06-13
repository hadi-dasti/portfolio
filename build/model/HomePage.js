"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.homePageImage = exports.homePageSchema = void 0;
const mongoose_1 = require("mongoose");
;
// create schema
exports.homePageSchema = new mongoose_1.Schema({
    backGroundImage: { type: String, required: [false, 'please provide a backGroundImage'] }
}, {
    timestamps: true
});
// create model of Schema
exports.homePageImage = (0, mongoose_1.model)('BackGroundImage', exports.homePageSchema);
