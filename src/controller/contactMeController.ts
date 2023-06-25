import {Request,Response } from 'express';
import { ContactMe,IContactMe} from '../model/contactMe/ContactMe';

// get view contactMe
export const getViewContactMeController = (req: Request, res: Response) => {
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
        };

        return res.status(200).json({
            success: true,
            data : dataContactMe
        });

    } catch (err: any) {
        return res.status(500).json({
            success: false,
            msg: "Internal Server Error" + "&:&" + err.message
        });
    };
};

// send data of contactMa
export const sendDataContactMe = async (req: Request, res: Response) => {
    try {
        const { name, emailAddress, subject, YourMessage } = req.body;
        
        // build document of mode contactSchema
        const newContact: IContactMe = await ContactMe.create({
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
        };

        return res.status(201).json({
            success: true,
            sendData: newContact._id,
            msg: "successfully build send data in contactMe"
        });

    } catch (err: any) {
        return res.status(500).json({
            success: false,
            msg: "Internal Server Error" + "&:&" + err.message
        });
    };
};

// redirect to my email
export const redirectToEmail = async (req: Request, res: Response) => {
    try {
        const redirectedToME = await ContactMe.findOne({}, {
            __v: 0
        });

        if (!redirectedToME) {
            return res.status(404).json({
                success: false,
                msg: "Not Found ContactMe"
            });
        };

        return res.redirect(`discussing on emailTo:${redirectedToME.emailAddress}`);

    } catch (err: any) {
        return res.status(500).json({
            success: false,
            msg:"Internal Server Error" + "&:&"+err.message
        });
    };
};