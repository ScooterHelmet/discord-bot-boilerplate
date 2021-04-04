module.exports = (client, member) => {
  console.log(`${member}`);
  // Send the message to a designated channel on a server:
  console.log(`${member.guild.channels.cache.find(ch => ch.name === 'welcome')}`);
  const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome');

  console.log(`${channel}`);

  // Do nothing if the channel wasn't found on this server
  if (!channel) {
    console.log(`channel does not exists`);
    return;
  }

  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}!`);
}