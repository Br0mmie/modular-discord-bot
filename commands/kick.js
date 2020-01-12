module.exports.kick = function(message,args){
  if (!message.member.roles.some(r=>["bot-admin"].includes(r.name)) ) return message.reply("Sorry, you do not have the permission to do this!");
  var kickedmember = message.mentions.members.first();
  if (!kickedmember) return message.reply("Please mention a valid member of this server!")
  if (!kickedmember.kickable) return message.reply("I cannot kick this member!")
  var kickreasondelete = 10 + kickedmember.user.id.length
  var kickreason = message.content.substring(kickreasondelete).split(" ");
  var kickreason = kickreason.join(" ");
  if (!kickreason) return message.reply("Please indicate a reason for the kick!")
  kickedmember.kick(kickreason)
      .catch(error => message.reply(`Sorry @${message.author} I couldn't kick because of : ${error}`));
  message.reply(`${kickedmember.user.username} has been kicked by ${message.author.username} because: ${kickreason}`);
}
