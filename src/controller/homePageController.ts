import { Request,Response } from "express"
import { homePageImage, Image } from '../model/HomePage';

// setup image in homePage
export const homePageController = async (req: Request, res: Response) => {
    try {
        // upload filename photo
        const file = req.file;
        
        const { backGroundImage } = req.body;

        // create document of model homePage
        const homePage: Image = await homePageImage.create({
            backGroundImage
        });

        if (!homePage) {
            return res.status(404).json({
                success: false,
                msg: 'Not Found Error'
            })
        };

        return res.status(201).json({
            success: true,
            data: homePage._id,
            msg: "successfully create image in homepage"
        });

    } catch (error: any) {
        return res.status(500).json({
            success: false,
            msg: "Internal Server Error" + " && " + error.message
        });
    }
};

// get homePage
export const getHomePageController = async (req: Request, res: Response) => {
    try {
        const data = {
            title: '<h1>Welcome to portfolio!</h1>',
            message: 'This is some sample content.',
        };
         
        if (!data) {
            return res.status(404).json({
                success: false,
                msg : 'Not Found Error'
            })
        };

        return res.status(200).json({
            success: true,
            data: data,
            msg : "Successfully get data of homepage"
        })
    
    } catch (error:any) {
        return res.status(500).json({
            success: false,
            msg : "Internal Server Error" + " &&" + error.message
        })
    }
};