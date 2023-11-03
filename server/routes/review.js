import express from "express"
import REVIEW from "../Models/Review.js"
const router=express.Router()
router.get("/reviews",async(req,res)=>{
    try{
        const reviews = await REVIEW.find({}) 
         res.status(200).json(reviews);
    }
    catch(error)
    {
        res.status(404).json({message:error.message});
    }
})
export default router;  