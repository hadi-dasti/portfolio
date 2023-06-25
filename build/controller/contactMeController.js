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
exports.redirectToEmail = exports.sendDataContactMe = exports.getViewContactMeController = void 0;
const ContactMe_1 = require("../model/contactMe/ContactMe");
// get view contactMe
const getViewContactMeController = (req, res) => {
    try {
        const dataContactMe = [
            { title: "Interested in collaborating with meI’m always open to discussing product design work or partnership opportunities." },
            {
                form_data: ["Name", "Email_Address", "Subject", "Your_Message"]
            },
            {
                socialMedia: ["GitHub", "Linkedin", "WhatsUp", "Telegram"]
            }
        ];
        if (dataContactMe.length === 0) {
            return res.status(404).json({
                success: false,
                msg: "Error Not Found"
            });
        }
        ;
        return res.status(200).json({
            success: true,
            data: dataContactMe
        });
    }
    catch (err) {
        return res.status(500).json({
            success: false,
            msg: "Internal Server Error" + "&:&" + err.message
        });
    }
    ;
};
exports.getViewContactMeController = getViewContactMeController;
// send data of contactMa
const sendDataContactMe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, emailAddress, subject, YourMessage } = req.body;
        // build document of mode contactSchema
        const newContact = yield ContactMe_1.ContactMe.create({
            name,
            emailAddress,
            subject,
            YourMessage
        });
        if (!newContact) {
            return res.status(404).json({
                success: false,
                msg: "Failed to create contact"
            });
        }
        ;
        return res.status(201).json({
            success: true,
            sendData: newContact._id,
            msg: "successfully build send data in contactMe"
        });
    }
    catch (err) {
        return res.status(500).json({
            success: false,
            msg: "Internal Server Error" + "&:&" + err.message
        });
    }
    ;
});
exports.sendDataContactMe = sendDataContactMe;
// redirect to my email
const redirectToEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const redirectedToME = yield ContactMe_1.ContactMe.findOne({}, {
            __v: 0
        });
        if (!redirectedToME) {
            return res.status(404).json({
                success: false,
                msg: "Not Found ContactMe"
            });
        }
        ;
        return res.redirect(`discussing on emailTo:${redirectedToME.emailAddress}`);
    }
    catch (err) {
        return res.status(500).json({
            success: false,
            msg: "Internal Server Error" + "&:&" + err.message
        });
    }
    ;
});
exports.redirectToEmail = redirectToEmail;
