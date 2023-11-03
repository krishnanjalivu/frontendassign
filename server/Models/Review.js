import mongoose from "mongoose";
const Schema=mongoose.Schema;

const ReviewSchema=new Schema({
    App:String,
    Translated_Review: String,
    Sentiment:String

})
const REVIEW=mongoose.model("REVIEW",ReviewSchema)
export default REVIEW