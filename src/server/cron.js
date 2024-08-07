const cron = require("node-cron");
const fetchRSSFeed = require("./rssParser");

function start() {
  cron.schedule(process.env.CRON_SCHEDULE, async () => {
    console.log("Running RSS feed parser");
    await fetchRSSFeed();
  });
}

module.exports = { start };
