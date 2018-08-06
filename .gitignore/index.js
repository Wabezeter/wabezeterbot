const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("Ready !", function() {
    bot.user.setGame("TutoBot, w!help");
    console.log("Bot Ready !");
});

bot.login("NDc1NjkyOTYxMjcxOTA2Mzc2.DkmFsw.bi1YQWIvcbftkkJQ7Ckfq8wfnEw");
