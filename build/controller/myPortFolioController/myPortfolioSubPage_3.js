"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSubPageOneMyPOrtFolio_3 = void 0;
// handel router Page_3  of viewAll myPOrtFolio
const getSubPageOneMyPOrtFolio_3 = (req, res) => {
    try {
        const Page_3 = [
            {
                title: "contact manager website"
            },
            {
                content: ["React", "NodeJS", "MUI"]
            },
            {
                description: "simple rtl contact manager with react and nodejs .... more"
            }
        ];
        if (Page_3.length === 0) {
            return res.status(404).json({
                success: false,
                msg: "Error Not Found  Page_3"
            });
        }
        ;
        return res.status(200).json({
            success: true,
            data: Page_3,
            msg: "Successfully create get Page_3 of myPortFolio"
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
exports.getSubPageOneMyPOrtFolio_3 = getSubPageOneMyPOrtFolio_3;
