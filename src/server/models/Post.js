const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: String,
  link: String,
  contentSnippet: String,
  pubDate: Date,
});

module.exports = mongoose.model("Post", postSchema);
