const express = require("express")
const router = express.Router();

const Model = require("../../model/Model")


router.post("/UserData" , async(req , res) => {
    const {email} = req.body
    try{
      
      const userData = await Model.findOne({email : email})
      if(userData){
      res.send(userData)
      }
      else{
        res.send("not found")
      }
  
    }catch(error){
       res.status(404).json({message : "Data Don't Exist"})
    }
  })


  module.exports = router;