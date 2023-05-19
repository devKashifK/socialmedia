const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

const login = require("./src/api/user/login")
const userData = require("./src/api/user/user")
const feeds = require("./src/api/feed/feed")
const post = require("./src/api/post/post")


const app = express();
app.use(cors());
app.use(bodyParser.json());



const uri =
  "mongodb+srv://ffrienddzoneee:Friend54321***@cluster0.ax7ca8d.mongodb.net/user";
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("Error connecting to MongoDB Atlas", err));

  app.use('/api', login); 
  app.use("/api" , userData)
  app.use("/api" , feeds)
  app.use("/api" , post)


// app.get("/data", async (req, res) => {
//   try {
//     const userData = await Model.find({});
//     res.json(userData);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });








const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`server running on ${port}`);
});

