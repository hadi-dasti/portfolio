"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSubPageOneMyPOrtFolio_2 = void 0;
// handel router Page_2  of viewAll myPOrtFolio
const getSubPageOneMyPOrtFolio_2 = (req, res) => {
    try {
        const Page_2 = [
            {
                title: "A simple ToDo list mobile App"
            },
            {
                content: "ReactNative"
            },
            {
                description: "A rtl todo list mobile .... more"
            }
        ];
        if (Page_2.length === 0) {
            return res.status(404).json({
                success: false,
                msg: "Error Not Found  Page_1"
            });
        }
        ;
        return res.status(200).json({
            success: true,
            data: Page_2,
            msg: "Successfully create get Page_2 of myPortFolio"
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
exports.getSubPageOneMyPOrtFolio_2 = getSubPageOneMyPOrtFolio_2;
