import express from "express"
import APP from "../Models/App.js"
const router=express.Router()
router.get("/apps",async(req,res)=>{
    try{
        const apps = await APP.find({}) 
         res.status(200).json(apps);
    }
    catch(error)
    {
        res.status(404).json({message:error.message});
    }
})
export default router;  