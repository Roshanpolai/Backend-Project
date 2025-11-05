import { v2 as cloudinary} from "cloudinary";
import { response } from "express";

import fs from "fs"; //fs-> File System module

//Connect to cloudinary
cloudinary.config({ 
  cloud_name: 'dczhoukla', 
  api_key: '453615356837277', 
  api_secret: 'gmCXu8kdQ_q4RFcK2Yx3dnfYpyU'
});

const uploadOnCloudinary = async (localFilePath) =>{
    try{
        if(!localFilePath) return null
        //uplode the file to cloudinary
        cloudinary.uploader.upload(localFilePath,{
            resource_type: "auto"
        })
        //file has been uploded successfully
        console.log("file is uploded successfully",response.url);
        return response
    }
    catch{
        fs.unlinkSync(localFilePath) //remove the 
        // locally saved temporary file as the 
        // uplode operation get failed
        return null;
    }
}

export {uploadOnCloudinary}