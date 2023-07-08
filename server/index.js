import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import postRoutes from './routes/postRoutes.js' 
import clipRoutes from './routes/clipRoutes.js'
dotenv.config()
const app = express();
app.use(cors());    
//app.use(express.json({limit: '50mb'}));
app.use(bodyParser.json({limit:"30mb",extended:"true"}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:"true"}))
//app.use(urlencoded({ extended: true })); 
app.get('/',async (req,res)=>{
    res.send('Hello from stability ai')
}) 
app.use('/api/v1/posts',postRoutes)
app.use('/api/v1/clip',clipRoutes) 
const PORT = process.env.PORT || 8080 
const CONNECTION_URL = process.env.MONGO_DB
 mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>app.listen(PORT,()=>console.log(`Serverver running on port: ${PORT}`))).catch((error)=>console.log(error))
 

