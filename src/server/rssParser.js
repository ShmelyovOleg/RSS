const Parser = require("rss-parser");
const Post = require("./models/Post");

const parser = new Parser();
const RSS_FEED_URL = process.env.RSS_FEED_URL;

async function fetchRSSFeed() {
  try {
    const feed = await parser.parseURL(RSS_FEED_URL);

    for (let item of feed.items) {
      const existingPost = await Post.findOne({ link: item.link });

      if (!existingPost) {
        const newPost = new Post({
          title: item.title,
          link: item.link,
          contentSnippet: item.contentSnippet,
          pubDate: new Date(item.pubDate),
        });

        await newPost.save();
        console.log(`Saved new post: ${item.title}`);
      }
    }
  } catch (err) {
    console.error("Error fetching RSS feed:", err);
  }
}

module.exports = fetchRSSFeed;
