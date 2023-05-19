const express = require("express")
const router = express.Router();
// const Model = require("../../../src/model/Model")
const Model = require("../../model/Model")


router.post("/login" , async(req, res) => {
    const {email , password} = req.body
    try {
        const user = await Model.findOne({email})
        if(!user){
            res.status(404).json({message : "Email Doesn't Exist"})
        }
        if(user.password !== password){
            res.status(404).json({message : "Wrong Password"})
        }
        
        res.json({message : "Login Successful"})
         
    } catch (error) {
        res.status(500).json({message : error.message})
    }
})

 module.exports = router;