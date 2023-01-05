const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    // user,DOB,mothername,IP,fullname,hobbies,product,state,city,postalcode
    user: {
        type: String,
        required: true,
    },
    DOB:{
        type: String,
        required: true
        },
    mothername: {
        type: String,
        required: true,
     
    },
   IP: {
        type: String,
        required: true,
      
    },
    fullname:{
type:String,
required:true,
    },
    hobbies: {
        type: String,
        required: true,
    },
    product: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    postalcode:{
        type:Number,
        required:true,
    }


})


const users= new mongoose.model("cloud",userSchema);

module.exports=users