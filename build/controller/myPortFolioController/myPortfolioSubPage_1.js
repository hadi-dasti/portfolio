"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSubPageOneMyPOrtFolio_1 = void 0;
// handel router Page_1  of viewAll myPOrtFolio
const getSubPageOneMyPOrtFolio_1 = (req, res) => {
    try {
        const Page_1 = [
            {
                title: "Simply Recipes Website"
            },
            {
                content: ["Gatsby", "Contentful", "Sass"]
            }
        ];
        if (Page_1.length === 0) {
            return res.status(404).json({
                success: false,
                msg: "Error Not Found  Page_1"
            });
        }
        ;
        return res.status(200).json({
            success: true,
            data: Page_1,
            msg: "Successfully create get Page_1 of myPortFolio"
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
exports.getSubPageOneMyPOrtFolio_1 = getSubPageOneMyPOrtFolio_1;
