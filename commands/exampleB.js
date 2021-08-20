const { default: axios } = require('axios');
const { MessageButton } = require("discord-buttons");
const { MessageEmbed } = require("discord.js");

const messageEmbed = new MessageEmbed();
const loginButton = new MessageButton().setStyle("green").setID("2").setLabel("Example Button");

module.exports = async (message, args) => {

  messageEmbed.setTitle('How can I help?').setColor(0x000000).setDescription(
    `sup`
    + `this is`
    + `example b`
  );

  message.author.send(messageEmbed, { buttons: [loginButton] });
}