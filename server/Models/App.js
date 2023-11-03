import mongoose from "mongoose";
const Schema=mongoose.Schema;

const AppSchema=new Schema({
    App :String,
Category:String,
Rating :Number,
Reviews:Number,
Size:String,
Installs:String, 
Type:String,
Price:{
    type:Number,
    get: (v) => v / 100,
} ,
Content_Rating:String,
 Genres :String, 
 Last_Updated:String, 
 Current_Ver:String, 
 Android_Ver:String
},{ toJSON: { getters: true }})
const APP=mongoose.model("APP",AppSchema)
export default APP