"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myResumeController = void 0;
// setup myResume 
const myResumeController = (req, res) => {
    try {
        const dataMyResume = {
            "ui_ux": {
                "things_I_enjoy_designing": ["UX", "UI", "Web", "Apps", "Logos"]
            },
            "back_end": {
                "Languages I speak": ["JavaScript", "PHP", "NodeJs", "GraphQL"],
                "Dev Tools": ["ExpressJS", "Strapi", "WordPress", "contentFull"]
            },
            "front_end": {
                "Languages I speak": ["JavaScript", "HTML", "CSS", "PHP"],
                "Dev Tools": ["React Native", "ReactJS", "NextJS", "GatsbyJS"]
            }
        };
        if (!dataMyResume) {
            return res.status(404).json({
                success: false,
                msg: "Error Not Found"
            });
        }
        ;
        return res.status(200).json({
            success: true,
            data: dataMyResume,
            msg: "successfully myResume"
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
exports.myResumeController = myResumeController;
