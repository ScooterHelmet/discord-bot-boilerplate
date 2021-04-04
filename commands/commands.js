module.exports = (msg) => {
  console.log(`Received: ${msg}`);

  const kick = "!kick @[username] – kicks the user from this server";

  return msg.reply(
  "\n" +
  kick + "\n"
  )
}