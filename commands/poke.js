module.exports.poke = function(message, args) {
  if (args[1]) message.channel.send("Hey wake up! " + args[1].toString());
  else message.channel.send("Who do you wanna poke? (Correct usage: *poke @username)");
}
