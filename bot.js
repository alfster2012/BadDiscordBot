const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json')

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === `${settings.prefix}ping`) {
    message.reply('pong');
  } else

  if (message.content.startsWith(`${settings.prefix}eval` && message.author.id === `${settings.botOwnerID}`)) {
    message.reply(eval(message.content.split(" ").slice(1).join(" ")));
  } else

  if (message.content === `${settings.prefix}avatar`) {
    message.reply(message.author.avatarURL);
  } else
   
  if (message.content.startsWith(`${settings.prefix}setgame`)) {
    client.user.setGame(message.content.split(" ").slice(1).join(" "));
  } else
    
  if (message.content === `${settings.prefix}help`) {
    message.channel.sendMessage("", {
      embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: 'Help',
        url: 'https://github.com/alfster2012/BadDiscordBot',
        description: 'This is the help dialouge',
        fields: [{
          name: '[Prefix]avatar',
          value: 'Displays a user\'s avatar'
        }, {
          name: '[Prefix]ping',
          value: 'Pong'
        }, {
          name: '[Prefix]help',
          value: 'You\'re looking at it right now.'
        }],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: '© alfster2012',
          url: 'https://alfster2012.questionable.photography/'
        }
      }
    })
  };
});


client.login(settings.token);