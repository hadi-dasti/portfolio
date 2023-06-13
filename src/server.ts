import express from 'express'; 
import * as dotenv from 'dotenv';
import { join } from 'path';


//setup app 
export const app = express();

// setup listen port 
dotenv.config();
export const PORT = process.env.PORT

//config router
import mainRouter from './router/mainRouter';

// setup mongod
import connectDB  from './configDatabase';
connectDB();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// path for uploadImage employee
app.use('/image',express.static(join(__dirname,'image')))

// setup main router
app.use('/', mainRouter);

// start application
app.listen(PORT, () => {
    console.log(`start portfolio application on port ${PORT}`)
});