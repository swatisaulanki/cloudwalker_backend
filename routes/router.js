const express =require("express");

const router= express.Router();

const users=require("../models/userSchema")

router.get("/", (req,res)=>{
res.send("Home P")
})
// resister  user

router.post("/register",async(req,res)=>{
 
    const {user,DOB,mothername,IP,fullname,hobbies,product,state,city,postalcode}=req.body;

    console.log(req.body)

  
    if(!user || !DOB || !mothername || !IP ||!fullname ||!hobbies || !product || !state || !city || !postalcode ){
res.status(404).send({
    success:false,
    message:"plz fill the data"
});

    }
    try{

const preuser=await users.findOne({DOB:DOB})
console.log(preuser)

if(preuser){
    // res.status(404).json("this user is already present")
    res.status(404).send({
        success:false,
        message:"this user is already presen"
    });
}
else{
const adduser=new users({
    user,DOB,mothername,IP,fullname,hobbies,product,state,city,postalcode
})

await adduser.save();
// res.status(200).json(adduser);
res.status(200).send({
    success:true,
    message:"Data added succesfully"
});
console.log(adduser)
}

    }

catch(err){
    res.status(404).json(err)
}
})


// get usr data


router.get ("/getdata",async(req,res)=>{
    try{
const userdata= await users.find();
// res.status(201).json(userdata);
res.status(200).send({
    success:true,
    message:"Data got  succesfully",
userdata
});
// console.log(userdata)
    }
    catch(error){
        res.status(404).json(error)
    }
})

// get individual data

router.get("/getuser/:id",async(req,res)=>{
    try{
// console.log(req.params);
const {id}= req.params

const individualdata= await users.findById({_id:id});
console.log(individualdata);
res.status(201).json(individualdata);

    }
    catch(error){
        res.status(404).json(error)
    }
})

// update user data


router.put("/updateuser/:id",async(req,res)=>{

    try{
        const {id}=req.params;
const updateuser=await users.findByIdAndUpdate(id,req.body,{
    new:true
})
// console.log(updateuser);
res.status(200).send({
    success:true,
    message:"Data Successfully Updated"
})
    }
    catch(error){
        res.status(404).send({
            success:false,
            message:"Something error Occured"
        })
    }
})


// delete user 

router.delete("/deleteuser/:id",async(req,res)=>{

    try{
        const {id}=req.params;
const deleteuser=await users.findByIdAndDelete({_id:id})
console.log(deleteuser);
// res.status(201).json(deleteuser)
res.status(200).send({
    success:true,
    message:"Data Deleted Succefully"
})
    }
    catch(error){
        res.status(404).json(error)
    }
})

module.exports=router