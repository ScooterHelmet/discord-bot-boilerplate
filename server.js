const { token, port } = require(`./config`);

const Discord = require("discord.js")
const client = new Discord.Client()

console.log(`Application running on port: ${port}`);

const fs = require("fs");
fs.readdir("./events/", (err, files) => {
  files.forEach((file) => {

    const eventHandler = require(`./events/${file}`);
    const eventName = file.split(".")[0];

    console.log(`Importing: "${eventName}" handler`);
    /* Note: Allows us to represent an indefinite number of arguments as an array
    * Then we’ll use the spread operator to pass all these arguments to the event handler.
    */
    client.on(eventName, (...args) => eventHandler(client, ...args));
  });
});

client.login(token);
