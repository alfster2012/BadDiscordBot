const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json')

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === settings.prefix + 'ping') {
    message.reply('pong');
  }
});

client.on('message', message => {
  if(message.author.id !== "135695463130071040") return;
  if (message.content.startsWith(settings.prefix + "eval")) {
    message.reply(eval(message.content.split(" ").slice(1).join(" ")));
};
});

client.on('message', message => {
  if (message.content === settings.prefix + 'avatar') {
    message.reply(message.author.avatarURL);
  }
});


client.login('settings.token');
