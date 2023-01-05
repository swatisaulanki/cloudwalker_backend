const mongoose=require("mongoose")

const DB="mongodb+srv://cloudwalker:cloudwalker@cluster0.fi4oft7.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(DB,{
   
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    try{
        console.log("connection start");
    }
    catch(e){
        console.log("error:",e)
    }
})