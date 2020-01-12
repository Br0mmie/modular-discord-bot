module.exports.timedate = function(message) {
  let date_ob = new Date();
  let date = ("0" + date_ob.getDate()).slice(-2);
  let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
  let year = date_ob.getFullYear();
  let hour = date_ob.getHours();
  let minute = date_ob.getMinutes();
  message.channel.send(hour + ":" + minute + " " + date + "/" + month + "/" + year);
}
