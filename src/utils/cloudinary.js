import { v2 as cloudinary} from "cloudinary";

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
        
        // Wait for Cloudinary to upload
        const result = await cloudinary.uploader.upload(localFilePath, {
        resource_type: "auto"
        });

        //console.log("File uploaded successfully:", result.secure_url);

       fs.unlinkSync(localFilePath);
       // Return the full Cloudinary response
       return result;
    }
    catch (error) {
    console.error("Cloudinary upload failed:", error.message);

    // Remove the temp file if it still exists
    if (fs.existsSync(localFilePath)) fs.unlinkSync(localFilePath);

    return null;
  }
};
export {uploadOnCloudinary}