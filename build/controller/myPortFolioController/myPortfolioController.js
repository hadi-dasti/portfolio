"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMainPageMyPortfolio = void 0;
// setup myPortFolio 
const getMainPageMyPortfolio = (req, res) => {
    try {
        const mainPage = [
            { title: "MY PORTFOLIO" },
            {
                reducedPages: [
                    { title: 'Page 1', content: 'Simply Recipes website' },
                    { title: 'Page 2', content: 'A simple ToDo list mobile app' },
                    { title: 'Page 3', content: 'content manager website' },
                    { title: 'Page 4', content: 'shoe shop' }
                ]
            }
        ];
        if (mainPage.length === 0) {
            return res.status(404).json({
                success: false,
                msg: "Error Not Found"
            });
        }
        ;
        return res.status(200).json({
            success: true,
            data: mainPage,
            msg: "successfully get myPortFolio"
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
exports.getMainPageMyPortfolio = getMainPageMyPortfolio;
