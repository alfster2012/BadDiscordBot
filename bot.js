const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "=="

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === prefix + 'ping') {
    message.reply('pong');
  }
});

client.on('message', message => {
  if(message.author.id !== "135695463130071040") return;
  if (message.content.startsWith(prefix + "eval")) {
    message.reply(eval(message.content.split(" ").slice(1).join(" ")));
};
});

client.on('message', message => {
  if (message.content === prefix + 'avatar') {
    message.reply(message.author.avatarURL);
  }
});


client.login('Mjc4OTI3OTg0Mzc3ODU2MDAw.C3zbcA.DGbyBYKCOhPTl7rkEHFgtqRUz_8');
