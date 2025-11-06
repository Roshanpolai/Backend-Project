import { response } from "express";
import { asyncHnadler } from "../utils/asyncHandler.js";

const registerUser = asyncHnadler( async(req, res) =>{
    res.status(200).json({
        message: "Running"
    })
})

export {registerUser}