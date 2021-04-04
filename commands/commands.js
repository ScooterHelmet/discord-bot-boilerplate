const Discord = require('discord.js');

const kick = "!kick @[username] – kicks the user from this server";

module.exports = (msg) => {
  // We can create embeds using the MessageEmbed constructor
  // Read more about all that you can do with the constructor
  // over at https://discord.js.org/#/docs/main/master/class/MessageEmbed
  const embed = new Discord.MessageEmbed()
    // Set the title of the field
    .setTitle('Hello there! Oh captain, my captain, where art thou love for thy council?')
    // Set the color of the embed
    .setColor(0x000000)
    // Set the main content of the embed
    .setDescription(kick + "\n");
  // Send the embed to the same channel as the message
  msg.channel.send(embed);
}