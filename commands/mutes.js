module.exports.mute = function(message,args) {
  if (!message.member.roles.some(r=>["bot-admin"].includes(r.name)) ) return message.reply("Sorry, you do not have the permission to do this!");
  var mutedmember = message.mentions.members.first();
  if (!mutedmember) return message.reply("Please mention a valid member of this server!")
  if (mutedmember.hasPermission("ADMINISTRATOR")) return message.reply("I cannot mute this member!")
  var mutereasondelete = 10 + mutedmember.user.id.length
  var mutereason = message.content.substring(mutereasondelete).split(" ");
  var mutereason = mutereason.join(" ");
  if (!mutereason) return message.reply("Please indicate a reason for the mute!")
  mutedmember.addRole(mutedrole)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't mute because of : ${error}`));
  message.reply(`${mutedmember.user} has been muted by ${message.author} because: ${mutereason}`);
}

module.exports.unmute= function(message,args) {
  if (!message.member.roles.some(r=>["bot-admin"].includes(r.name)) ) return message.reply("Sorry, you do not have the permission to do this!");
  var unmutedmember = message.mentions.members.first();
  if (!unmutedmember) return message.reply("Please mention a valid member of this server!")
  unmutedmember.removeRole(mutedrole)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't mute because of : ${error}`));
  message.reply(`${unmutedmember.user} has been unmuted by ${message.author}!`);
}
