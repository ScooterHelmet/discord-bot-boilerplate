const kick = require("../commands/kick")
const commands = require("../commands/commands")

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
