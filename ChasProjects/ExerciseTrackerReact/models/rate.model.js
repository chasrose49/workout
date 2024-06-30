const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ratingsSchema= new Schema({
username:{
    type:String,
    required:true,
    trim:true,
    minlength:3
},
starsSelected:Number
},{timestamp:true,
})
const Ratings = mongoose.model("Ratings", ratingsSchema)
module.exports=Ratings
