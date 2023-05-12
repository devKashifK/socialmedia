const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());


const uri =
  "mongodb+srv://ffrienddzoneee:Friend54321***@cluster0.ax7ca8d.mongodb.net/user";
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("Error connecting to MongoDB Atlas", err));


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

app.get("/data", async (req, res) => {
  try {
    const userData = await Model.find({});
    res.json(userData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


app.post("/login" , async(req, res) => {
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


const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`server running on ${port}`);
});