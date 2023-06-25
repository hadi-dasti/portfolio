import { Request, Response } from 'express';


// handel router Page_3  of viewAll myPOrtFolio
export const getSubPageOneMyPOrtFolio_3 = (req: Request, res: Response) => {
    try {
        const Page_3 = [
            {
                title : "contact manager website"
            },
            {
                content : ["React","NodeJS","MUI"]
            },
            {
                description:"simple rtl contact manager with react and nodejs .... more"
            }
        ];

        if (Page_3.length === 0) {
            return res.status(404).json({
                success: false,
                msg: "Error Not Found  Page_3"
            });
        };

        return res.status(200).json({
            success: true,
            data: Page_3,
            msg: "Successfully create get Page_3 of myPortFolio"
        });

    } catch (err: any) {
        return res.status(500).json({
            success: false,
            msg: "Internal Server Error" + "&:&" + err.message
        });
    };
};