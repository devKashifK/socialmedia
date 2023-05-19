const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  caption: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  profile: {
    type: String,
    required: true
  },
  user_id: {
    type: String,
    required: true
  },
  image: {
    type: String,
  },
  background: {
    type: String,
  },
  comment: {
    type: String,
  },
  feeling: {
    type : String,
  }
  });
  
  const feeds = mongoose.model("feeds" , userSchema, "feeds")
  

  module.exports = feeds
