import { model, Schema, Document } from 'mongoose';


// setup interface  data of contactMe modelSchema;
export interface IContactMe extends Document{
    name: string,
    emailAddress: string,
    subject: string,
    yourMessage:string
};


// build contactMeSchema 
export const contactMeSchema = new Schema<IContactMe>({
    name: { type: String, minlength: 4, maxLength: 30, required: [true, 'please provide a Name'] },
    emailAddress: { type: String, unique: true, required: [true, 'please provide an Email_Address'] },
    subject: { type: String, minLength: 5, required: [true, 'please provide a subject'] },
    yourMessage: { type: String, minlength: 4, maxLength: 30, required: [true, 'please provide a Your_Message'] }
}, {
    timestamps: true
});



// build model of contactMeSchema
export const ContactMe = model<IContactMe>('ContactMe', contactMeSchema);