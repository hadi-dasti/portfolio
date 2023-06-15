import {Request,Response } from 'express';
import {Admin,IAdmin } from '../model/Admin';

// singUp Admin
export const loginAdminController = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        // Check if admin with email and password already exists
        const existingAdmin = await Admin.findOne({
            $or: [{ email, password }]
        });
        
        // exist admin in database
        if (existingAdmin) {
            return res.status(400).json({
                success: false,
                msg: "email and password already is database"
            })
        };

        // create  document of modal Admin
        const newAdmin: IAdmin | null = await Admin.create({
            email,
            password
        });

        if (!newAdmin) {
            return res.status(404).json({
                success: false,
                msg : "Error Not Found"
            })
        }

        // export generate token 
        const token = newAdmin.generateToken();


        return res.status(201).json({
            success: true,
            data: {
                token,
                newAdmin:newAdmin._id
            },
            msg: 'successfully  generate token for singUp Admin'
        });
       

    } catch (error: any) {
        return res.status(500).json({
            success: false,
            msg: "Internal Server Error" + "&&" + error.message
        })
    };
};

// get Amin
export const getAdminController = async (req: Request, res: Response) => {
    try {
        const getAdmin = await Admin.find({}, {
            __v: false,
            updatedAt : false
        });

        if (!getAdmin) {
            return res.status(404).json({
                success: false,
                msg : "Error Not Found"
            })
        };

        return res.status(200).json({
            success: true,
            data: getAdmin,
            msg: "Successfully get All Admin"
        });

    } catch (err: any) {
        return res.status(500).json({
            success: false,
            msg : "Internal Server Error" + "&:&" + err.message
        })
    };
};