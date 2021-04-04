const kick = require("../commands/kick")

module.exports = (client, msg) => {

  if (msg.content === "ping") {
    msg.reply("Pong!")
  }

  if (msg.content.startsWith("!kick")) {
    return kick(msg)
  }

  if (msg.content.startsWith("!")) {
    return msg.react('🤔')
    .then(console.log)
    .catch(console.error);
  }

  // React to a message with a unicode emoji

  
}