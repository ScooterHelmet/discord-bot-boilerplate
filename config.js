// .env exporter
const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  token: process.env.DISCORD_BUILD_A_BOT_TOKEN,
  port: process.env.PORT ? '' : 8000
};
