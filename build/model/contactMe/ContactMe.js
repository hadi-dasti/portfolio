"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactMe = exports.contactMeSchema = void 0;
const mongoose_1 = require("mongoose");
;
// build contactMeSchema 
exports.contactMeSchema = new mongoose_1.Schema({
    name: { type: String, minlength: 4, maxLength: 30, required: [true, 'please provide a Name'] },
    emailAddress: { type: String, unique: true, required: [true, 'please provide an Email_Address'] },
    subject: { type: String, minLength: 5, required: [true, 'please provide a subject'] },
    yourMessage: { type: String, minlength: 4, maxLength: 30, required: [true, 'please provide a Your_Message'] }
}, {
    timestamps: true
});
// build model of contactMeSchema
exports.ContactMe = (0, mongoose_1.model)('ContactMe', exports.contactMeSchema);
