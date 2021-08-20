const exampleA = require('./commands/exampleA');
const exampleB = require('./commands/exampleB');

// jump table
const commands = { exampleA, exampleB };

module.exports = async msg => {
  if (msg.author.bot) return;
  if (!msg.guild || msg.author.bot) return;

  const args = msg.content.slice("$".length).trim().split(" ");
  const command = args.shift().toLowerCase();

  commands[command](msg, args);
}