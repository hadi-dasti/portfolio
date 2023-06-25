"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSubPageOneMyPOrtFolio_4 = void 0;
// handel router Page_4  of viewAll myPOrtFolio
const getSubPageOneMyPOrtFolio_4 = (req, res) => {
    try {
        const Page_4 = [
            {
                title: "show shop"
            },
            {
                content: ["React", "Bootstrap"]
            },
            {
                description: "An  ui only   .... more"
            }
        ];
        if (Page_4.length === 0) {
            return res.status(404).json({
                success: false,
                msg: "Error Not Found  Page_4"
            });
        }
        ;
        return res.status(200).json({
            success: true,
            data: Page_4,
            msg: "Successfully create get Page_4 of myPortFolio"
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
exports.getSubPageOneMyPOrtFolio_4 = getSubPageOneMyPOrtFolio_4;
