module.exports.ball = function(message,args) {
  var eightball = [
      "yes!",
      "no...",
      "maybe?",
      "probably",
      "I don't think so.",
      "never!",
      "you can try...",
      "up to you!",
  ]

  if (args[1] != null) message.reply(eightball[Math.floor(Math.random() * eightball.length).toString(16)]);
  else message.channel.send("Ummmm, what is your question? :rolling_eyes: (Correct usage: *8ball [question])");
}
