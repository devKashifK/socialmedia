const express = require("express");
const router = express.Router();
const multer = require("multer");



const feeds = require("../../model/Feed");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      return cb(null, `${Date.now()}-${file.originalname}`)
    }
  })
  

  
  const upload = multer({ storage: storage });

router.post("/post", upload.single("image"), async (req, res) => {
  try {
    const { caption, name, email, profile, user_id, background, feeling } = req.body;
    const image = req.file ? req.file.path : null;

    const Post = new feeds({ caption, image, name, email, profile, user_id, background, feeling });
    await Post.save();
    res.status(201).json({ message: "User details saved successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error saving user details." });
  }
console.log(req.body)
console.log(req.file)
});

module.exports = router;
