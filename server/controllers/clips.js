// import express from "express";
// import {Configuration,OpenAIApi} from "openai";
// import * as dotenv from 'dotenv'
// // import mongoose from 'mongoose'
// // import PostSchema from "../models/post.js";

// dotenv.config()
// const configuration = new Configuration({
//     apiKey: process.env.API_KEY,
// })
// const openai = new OpenAIApi(configuration) 
// export const getClips = async(req,res)=>{
   
//     try{
//         const{prompt}=req.body
//         const response= await openai.createImage({
//             prompt,
//             n:1,
//             size: '1024x1024',
//             response_format:'b64_json'
//         })
// const image=response.data.data[0].b64_json
//         res.status(200).json(image)
//     }
//     catch(error){
//         console.log(error.message)
//     }
// }

