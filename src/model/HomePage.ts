import { model, Schema, Document } from 'mongoose';

//interface
export interface Image extends Document{
     backGroundImage : string
};

// create schema
export const homePageSchema = new Schema<Image>({
    backGroundImage: { type: String, required: [false, 'please provide a backGroundImage'] }
}, {
    timestamps: true
});

// create model of Schema
export const homePageImage = model<Image>('BackGroundImage', homePageSchema);