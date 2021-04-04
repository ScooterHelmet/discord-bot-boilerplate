const { apiEndpoint, clientID, clientSecret, test, token, port } = require(`./config`);
const crypto = require('crypto')

const Discord = require("discord.js")
const client = new Discord.Client()

const fs = require("fs");
fs.readdir("./events/", (err, files) => {
  files.forEach((file) => {

    const eventHandler = require(`./events/${file}`);
    const eventName = file.split(".")[0];

    console.log(`Importing: "${eventName}" handler`);
    /* Note: Allows us to represent an indefinite number of arguments as an array.
     * The spread operator passes all these arguments to the event handler. */
    client.on(eventName, (...args) => eventHandler(client, ...args));
  });
});

/*// OAUTH2 FOR CORS 
const DiscordOauth2 = require("discord-oauth2");
const oauth = new DiscordOauth2({
  clientId: clientID,
  clientSecret: clientSecret,
  redirectUri: `http://localhost:${port}/callback`
});

const url = oauth.generateAuthUrl({
  scope: ["identify", "email",
    "connections", "guilds",
    "guilds.join", "gdm.join",
    "rpc", "rpc.notifications.read",
    "rpc.voice.read", "rpc.voice.write",
    "bot", "webhook.incoming", "messages.read",
    "applications.builds.upload", "applications.builds.read",
    "applications.commands", "applications.store.update",
    "applications.entitlements", "activities.read",
    "activities.write", "relationships.read"],
  state: crypto.randomBytes(16).toString("hex"), // Be aware that randomBytes is sync if no callback is provided
});

console.log("\n" + url + "\n"); */


console.log("Application running on port: " + port);

client.login(test);
