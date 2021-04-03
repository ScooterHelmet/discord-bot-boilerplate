const { token, port } = require(`./config`);
const Discord = require("discord.js")
const client = new Discord.Client()

console.log(`Your port is ${port}`);
console.log(`Your token is ${token}`);

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
});

client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("Pong!")
  }
});

client.login(token);
