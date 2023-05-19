const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    user_id: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    location: { type: String },
    profile_photo: { type: String },
    birthday: { type: Date },
  });
  
  const Model = mongoose.model("Model", userSchema, "data");
  

  module.exports = Model