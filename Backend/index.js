import express from "express";
import cookieParser from "cookie-parser";
import cors from 'cors'
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./Routes/auth.js";
import userRoute from "./Routes/user.js";
import doctorRoute from "./Routes/doctor.js";
import reviewRoute from "./Routes/review.js";

dotenv.config()

const app  = express()
const port = process.env.PORT || 8000

const corsOptions ={
    origin:true
}
app.get('/',(req,res)=>{
    res.send('Api is Working')
})

//==========database connecion=========
mongoose.set('strictQuery', false)
const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL,{
         useNewUrlParser: true,
         useUnifiedTopology: true,
        })
        console.log('Mongodb database is connected')
    }
    catch (err) {
        console.error('MongoDB database connection failed:', err);
        // Exit the process or handle the error as needed
        process.exit(1);
    }
}

//===========middle ware=======
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions))
app.use('/api/v1/auth',authRoute)  // domain/api/v1/auth/register
app.use('/api/v1/users',userRoute)  // domain/api/v1/user/register
app.use('/api/v1/doctors',doctorRoute)  // domain/api/v1/doctor/register
app.use('/api/v1/reviews',reviewRoute)  // domain/api/v1/review/register

app.listen(port, ()=>{
    connectDB();
    console.log('Server is running on Port '+ port)
})