const fs = require('fs');

module.exports.write = function(message) {
  let date_ob = new Date();
  let date = ("0" + date_ob.getDate()).slice(-2);
  let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
  let year = date_ob.getFullYear();
  let hour = date_ob.getHours();
  let minute = date_ob.getMinutes();
  fs.writeFile("./log/test.log", "[" + hour + ":" + minute + " " + date + "/" + month + "/" + year + "]" + message + " ", function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
  });

}
