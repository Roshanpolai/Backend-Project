import dotenv from"dotenv"
import connectDB from "./db/index.js"

dotenv.config({
    path:'./env'
})

connectDB()

.then(() =>{
    app.listen(process.env.PORT || 8000, () => {
        console.log(` server is running at port: $
            {process.env.PORT} `);
    })
})
.catch((err) =>{
    console.log("MONGO Db connection failed !!!",err);
})













/*<---- First Approach to connect Database ---->
import mongoose from "mongoose";
import { DB_NAME } from "./constants";

import express from "express"
const app = express()

(async () => {
    try{
        mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) =>{
            console.log("ERROR:", error);
            throw error
        })

        app.listen(process.env.PORT, () =>{
            console.log(`App is litening on port 
                ${process.env.PORT}`);
        })
    }
    catch(error){
        console.error("ERROR:", error)
        throw error
    }
})()
*/