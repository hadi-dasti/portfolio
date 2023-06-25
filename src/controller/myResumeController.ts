import { Request, Response } from "express";



// setup myResume 
export const myResumeController = (req: Request, res: Response) => {
    try {
        const dataMyResume = {              
            "ui_ux": {
                "things_I_enjoy_designing": ["UX","UI","Web","Apps","Logos"]
            },
            "back_end": {
                "Languages I speak": ["JavaScript", "PHP", "NodeJs", "GraphQL"],
                "Dev Tools":
                    ["ExpressJS", "Strapi", "WordPress", "contentFull"]
            },
            "front_end": {
                "Languages I speak":
                    ["JavaScript", "HTML", "CSS", "PHP"],
                "Dev Tools":
                    ["React Native", "ReactJS", "NextJS", "GatsbyJS"]
            }
        };

        if (!dataMyResume) {
            return res.status(404).json({
                success: false,
                msg : "Error Not Found"
            });
        };

        return res.status(200).json({
            success: true,
            data: dataMyResume,
            msg: "successfully myResume"
        });

    } catch (err: any) {
        return res.status(500).json({
            success: false,
            msg: "Internal Server Error" + "&:&" + err.message
        });
    };
};