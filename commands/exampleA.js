const { default: axios } = require("axios");
const { MessageButton } = require("discord-buttons");
const { Client } = require("discord.js");
const client = new Client();
require("discord-buttons")(client);

const exampleButton = new MessageButton().setStyle("green").setID("1").setLabel("Example Button");

module.exports = async (message, args) => {
  const config = {
    method: 'get',
    url: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=1&convert=USD',
    headers: {
      'X-CMC_PRO_API_KEY': `${process.env.COINMARKETCAP_API_KEY}`
    }
  };

  let getData = async () => {
    let response = await axios(config);
    let tasks = JSON.stringify(response.data[0]);

    return tasks;
  }

  let data = await getData();

  message.author.send(data,
    {
      buttons: [exampleButton]
    }
  );
}
