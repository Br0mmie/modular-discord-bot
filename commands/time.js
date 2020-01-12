module.exports.time = function(message) {
  let date_ob = new Date();
  let hour = date_ob.getHours();
  let minute = date_ob.getMinutes();
  message.channel.send(hour + ":" + minute);
}
