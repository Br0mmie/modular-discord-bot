// GLOBAL imports
const Discord = require("discord.js");

// command imports might move to utils/imports.js
const help = require('./commands/help.js');
const helpAdmin = require('./commands/helpAdmin.js');
const info = require('./commands/info.js');
const date = require('./commands/date.js');
const time = require('./commands/time.js');
const timedate = require('./commands/timedate.js');
const poke = require('./commands/poke.js');
const cookie = require('./commands/cookie.js');
const pingpong = require('./commands/pingpong.js');
const ball = require('./commands/ball.js');
const say = require('./commands/say.js');
const purge = require('./commands/purge.js');
const search = require('./commands/search.js');
const mutes = require('./commands/mutes.js');
const kick = require('./commands/kick.js');

// util import
const log = require('./utils/log.js');

const BOT_TOKEN = "NjY1NzM3MTM3NDMzNjA4MjIx.Xhq-DQ.mkhctA7gHiEh9E-S0ZKokOXPu9g"
const PREFIX = "!"

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setActivity("Use !info")
    console.log("Booted up!")
    log.write("Booted up!");
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");
    var command = args[0].toLowerCase();
    var mutedrole = message.guild.roles.find("name", "muted");

    if (command == "help"){
      help.help(message);
    }

    if (command == "helpadmin"){
      helpAdmin.helpAdmin(message);
    }

    if (command == "info") {
      info.info(message);
    }

    if (command == "ping") {
      pingpong.pong(message);
    }

    if (command == "date") {
    	date.date(message);
    }

    if (command == "time"){
    	time.time(message);
    }

    if (command == "timedate"){
      timedate.timedate(message);
    }

    if (command == "poke") {
    	poke.poke(message, args);
    }

    if (command == "cookie") {
      cookie.cookie(message,args);
    }

    if (command == "8ball") {
      ball.ball(message,args);
    }

    if (command == "say") {
      say.say(message,args);
    }

    if(command === "purge") {
      purge.purge(message,args,bot);
    }

    if (command == "google"){
      search.google(message,args);
    }

    if (command == "youtube"){
      search.youtube(message,args);
    }

    if (command == "mute") {
        mutes.mute(message,args);
    }

    if (command == "unmute") {
      mutes.unmute(message,args);
    }

    if (command == "kick") {
      kick.kick(message,args);
    }

});

bot.login(BOT_TOKEN);
