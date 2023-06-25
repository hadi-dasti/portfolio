import { model, Schema, Document } from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt,{Secret} from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import { join } from 'path';


// setup join path as dotenv
dotenv.config({path: join (__dirname,'../../../portfolio/.env') });
export const JWT_SECRETE = process.env.JWT_SECRETE;
export const JWT_EXPIRATION_TIME = process.env.JWT_EXPIRATION_TIME;


// setup interface 
export interface IAdmin extends Document{
    email: string,
    password: string,
    token: string,
    tokenExpiration: Date,
    generateToken : () =>string
};


//  create schema
export const adminSchema = new Schema<IAdmin>({
    email: { type: String, unique: true, required: [true, 'please provide an email'] },
    password: { type: String, unique: true, minLength: 8, required: [true, 'please provide a password'] },
    token: {type: String },
    tokenExpiration: {type: Date }
}, {
    timestamps: true
});

// Hash the password before saving it to the database
adminSchema.pre<IAdmin>('save', async function (next) {
    const admin = this;
    if (!admin.isModified('password')) {
        return next()
    }

    // hash password
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(admin.password, salt);
    admin.password = hashPassword;
    return next();
});

// Define  method to generate a token
adminSchema.methods.generateToken = function () {
    const tokenAdmin = jwt.sign({ adminId: this._id },
        JWT_SECRETE as Secret,
        { expiresIn: JWT_EXPIRATION_TIME })
    this.token = tokenAdmin;
    this.tokenExpiration = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toString();
    this.save();
    return tokenAdmin
};

export const Admin = model<IAdmin>('Admin', adminSchema);


