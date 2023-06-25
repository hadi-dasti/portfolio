import { Request, Response } from 'express';


// handel router Page_2  of viewAll myPOrtFolio
export const getSubPageOneMyPOrtFolio_2 = (req: Request, res: Response) => {
    try {
        const Page_2 = [
            {
                title : "A simple ToDo list mobile App"
            },
            {
                content : "ReactNative"
            },
            {
                description:"A rtl todo list mobile .... more"
            }
        ];

        if (Page_2.length === 0) {
            return res.status(404).json({
                success: false,
                msg: "Error Not Found  Page_1"
            });
        };

        return res.status(200).json({
            success: true,
            data: Page_2,
            msg: "Successfully create get Page_2 of myPortFolio"
        });

    } catch (err: any) {
        return res.status(500).json({
            success: false,
            msg: "Internal Server Error" + "&:&" + err.message
        });
    };
};