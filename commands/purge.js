const log = require('./../utils/log.js');

module.exports.purge = function(message,args,bot) {

  let messagecount = parseInt(args[1]) || 1;
  message.channel.fetchMessages({ limit: messagecount })
  .then(messages => message.channel.bulkDelete(messages));
  log.write("Purge used!");
}
