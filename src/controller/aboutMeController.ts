import { Request, Response } from "express";

// About Me Portfolio
export const getAboutMe = (req: Request, res: Response) => {
    try {
        // data in aboutMe
        const dataAboutMe = {
            About_Me: `About Me I design and code beautifully simple things, and I love what I do
                       Since beginning my journey as a freelance designer over 5 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use.
                       I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.`,
            My_Skills: ['HTML', 'CSS', 'JS', 'JavaScript', 'React', 'NodeJS', 'Git', 'WordPress', 'UI/UX', 'PHP']
        };
            
        if (!dataAboutMe) {
            return res.status(404).json({
                success: false,
                msg: "Error Not Found"
            });
        };

        return res.status(200).json({
            success: true,
            data: dataAboutMe,
            msg: "Successfully create page  AboutMe"
        });

    } catch (err: any) {
        return res.status(500).json({
            success: false,
            msg: "Internal Server Error" + '&:&' + err.message
        });
    };
};