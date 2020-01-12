module.exports.say = function(message,args) {
  var sayMessage = message.content.substring(4)
  message.delete().catch(O_o=>{});
  message.channel.send(sayMessage);
}
