const express = require("express");
const router = express.Router();

const Model = require("../../model/Model")


router.post("/signup", async(req, res) => {
    const {email, password, username, location} =req.body
    try{
      const user = await Model.findOne({email})
      if(!user){
        const newUser = new Model({username, email, password, location})
        await newUser.save()
        return res.status(201).json({ message: 'User created successfully' });
      }  
      else{
        return res.status(409).json({message : "Email Already Exist"})
      }
    }
  
    catch(error){
      res.status(500).json({message : error.message})
    }
  })