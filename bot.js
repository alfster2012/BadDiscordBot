const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json')

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === `${settings.prefix}ping`) {
    message.reply('pong');
  }
  
  if (message.content.startsWith`${settings.prefix}eval`) && message.author.id === "135695463130071040") {
    message.reply(eval(message.content.split(" ").slice(1).join(" ")));
  }

  if (message.content === `${settings.prefix}avatar`) {
    message.reply(message.author.avatarURL);
  }
});


client.login(settings.token);
