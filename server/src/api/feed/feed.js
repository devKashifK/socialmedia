const express = require("express")
const router = express.Router();
const feeds = require("../../model/Feed")




router.get("/feeds" , async(req , res) => {
   
  
    try{
        const feedData = await feeds.find({})
        res.json(feedData)
    }catch(error){
      res.status(500).json({message : error.message})
    }
  })





module.exports = router;