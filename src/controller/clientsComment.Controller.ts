import { Request, Response } from 'express';




// handle clientsComment
export const getClientsCommentController = (req: Request, res: Response) => {
    try {
        const review = [
            { title: "review" },
            { image: "profile developer" },
            { fullName: "my developer" },
            { job: "full stack developer" },
            {description:"lorem ipsum"}
        ];

        if (review.length === 0) {
            return res.status(404).json({
                success: false,
                msg: "Error not Found clientComments"
            });
        };

        return res.status(200).json({
            success: true,
            data: review,
            msg: "Successfully create review clientsComment"
        });

    } catch (err: any) {
        return res.status(500).json({
            success: false,
            msg: "Internal Server Error" + " " + err.message
        });
    };
};