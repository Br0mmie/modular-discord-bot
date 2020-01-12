const Discord = require('discord.js');

module.exports.help = function (message) {
    var embedhelpmember = new Discord.RichEmbed()
      .setTitle("**List of Commands**\n")
      .addField(" - help", "Displays this message (Correct usage: !help)")
      .addField(" - info", "Tells info about myself :grin:")
      .addField(" - ping", "Tests your ping (Correct usage: !ping)")
      .addField(" - cookie", "Sends a cookie to the desired player! :cookie: (Correct usage: !cookie @username)")
      .addField(" - 8ball", "Answers to all of your questions! (Correct usage: !8ball [question])")
      .addField(" - poke", "Poke someone to wake them up! (Correct usage: !poke @username)")
      .addField(" - time", "Get current time! (Correct usage: !time)")
      .addField(" - date", "Get current date! (Correct usage: !date)")
      .addField(" - timedate", "Get current date and time! (Correct usage: !timedate)")
      .addField(" - google", "Get a google search URL! (Correct usage: !google [search terms])")
      .addField(" - youtube", "Get a youtube search URL! (Correct usage: !youtube [search terms])")
      .setColor(0xFFA500)
      .setFooter("If you have questions feel free to contact and admin on the server! :grin: Made by Br0mZ!")
    message.channel.send(embedhelpmember);
};
