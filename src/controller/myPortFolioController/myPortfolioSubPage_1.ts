import { Request, Response } from 'express';


// handel router Page_1  of viewAll myPOrtFolio
export const getSubPageOneMyPOrtFolio_1 = (req: Request, res: Response) => {
    try {
        const Page_1 = [
            {
                title : "Simply Recipes Website"
            },
            {
                content : ["Gatsby","Contentful","Sass"]
            }
        ];

        if (Page_1.length === 0) {
            return res.status(404).json({
                success: false,
                msg: "Error Not Found  Page_1"
            });
        };

        return res.status(200).json({
            success: true,
            data: Page_1,
            msg: "Successfully create get Page_1 of myPortFolio"
        });

    } catch (err: any) {
        return res.status(500).json({
            success: false,
            msg: "Internal Server Error" + "&:&" + err.message
        });
    };
};