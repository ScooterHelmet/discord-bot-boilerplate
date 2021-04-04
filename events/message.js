const commands = require("../commands/commands")
const kick = require("../commands/kick")

module.exports = (client, msg) => {

  switch (msg.content) {
    case "ping":
      msg.reply("Pong!");
      break;
    case "!kick":
      kick(msg);
      break;
    case "!commands":
      commands(msg);
      break;
    default:
      return;
  }
}
