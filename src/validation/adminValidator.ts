import { Request, Response, NextFunction } from "express";
import Joi from 'joi';


//define validation data  request.body of admin model;
export const adminValidation = (req: Request, res: Response, next: NextFunction) => {
    
    // define req.body
    const adminData = Joi.object().keys({
        email: Joi.string().email().not().empty().required().messages({
            'string.base': `"email" should be a type of 'text'`,
            'string.empty': `"email" cannot be an empty field`,
            'string.email': `"email" should be a valid email`,
            'any.required': `"email" is a required field`
        }),
        password: Joi.string().min(8).max(30).pattern(/^(?=.*[a-zA-Z])(?=.*[0-9])/).required().messages({
            'string.pattern.base': 'Password must be between 8 and 30 characters and contain only alpha-numeric characters'
        }),
    })

    // handle Error  request body of admin
    try {
        const { error } = adminData.validate(req.body, { abortEarly: true });
        if (error) {
            const errors = error.details.map(detail => detail.message);
            return res.status(400).json({
                success: false,
                msg : errors.join(',')
            })
        }

        return next();

    } catch (err: any) {
        return res.status(500).json({
            success: false,
            msg : 'Internal Server Error' + '&:&' + err.message
        })
    };
};
