require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cron = require("./cron");
const Post = require("./models/Post");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.get("/api/posts", async (req, res) => {
  const { page = 1, limit = 10 } = req.query;

  try {
    const posts = await Post.find()
      .sort({ pubDate: -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit));
    const totalPosts = await Post.countDocuments();
    res.json({ posts, totalPosts });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

cron.start();
