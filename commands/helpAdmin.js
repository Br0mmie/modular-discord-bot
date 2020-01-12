const Discord = require('discord.js');

module.exports.helpAdmin = function (message) {
  var embedhelpadmin = new Discord.RichEmbed()
    .setTitle("**List of Admin Commands**\n")
    .addField(" - say", "Makes the bot say whatever you want (Correct usage: !say [message])")
    .addField(" - mute", "Mutes a desired member with a reason (Coorect usage: !mute @username [reason])")
    .addField(" - unmute", "Unmutes a muted player (Correct usage: !unmute @username)")
    .addField(" - kick", "Kicks a desired member with a reason (Correct usage: !kick @username [reason])")
    .setColor(0xFF0000)
    .setFooter("Ooo, an admin! Made by Br0mZ!")
  message.channel.send(embedhelpadmin);
}
