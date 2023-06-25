"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClientsCommentController = void 0;
// handle clientsComment
const getClientsCommentController = (req, res) => {
    try {
        const review = [
            { title: "review" },
            { image: "profile developer" },
            { fullName: "my developer" },
            { job: "full stack developer" },
            { description: "lorem ipsum" }
        ];
        if (review.length === 0) {
            return res.status(404).json({
                success: false,
                msg: "Error not Found clientComments"
            });
        }
        ;
        return res.status(200).json({
            success: true,
            data: review,
            msg: "Successfully create review clientsComment"
        });
    }
    catch (err) {
        return res.status(500).json({
            success: false,
            msg: "Internal Server Error" + " " + err.message
        });
    }
    ;
};
exports.getClientsCommentController = getClientsCommentController;
