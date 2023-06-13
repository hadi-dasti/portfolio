import mongoose from 'mongoose';


// config url
const mongo_url = 'mongodb://127.0.0.1/portfolio';


//connect database
async function connectDB() {
   try {
       await mongoose.connect(mongo_url)
       console.log('mongodb connect successfully ');
} catch (err:any) {
       console.log('MongoDB connection error:' + ':' + err.message);
} 
};

export default connectDB;
