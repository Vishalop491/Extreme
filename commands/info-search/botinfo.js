const db = require("quick.db");
const Discord = require ("discord.js")
const { version } = require('../../package.json');
const ms = require('pretty-ms');
const { version: discordjsVersion } = require('discord.js');
module.exports = {

  name: "botinfo",

  category: "info",
    aliases: ['uptime', 'botstats', 'stats'],
    description: 'Check\'s bot\'s status',
  run: async (client, message, args, del, member) => {
      message.channel.send(new Discord.MessageEmbed()
            .setColor('AQUA')
.setAuthor(`${message.author.tag}`,message.author.displayAvatarURL({dynmaic : true}))
            .setThumbnail(client.user.displayAvatarURL())
            .addField('**<a:Utility:1037711923573178418> Version**', `1.0.0`, true)
            .addField(`**<a:Utility:1037711923573178418> Users**`, `${client.users.cache.size} users`, true)
            .addField('**<a:Utility:1037711923573178418> Servers**', `${client.guilds.cache.size} guilds`, true)
            .addField('**<a:Utility:1037711923573178418> Discord.js**', `13.2.0`, true)
            .addField('**<a:Utility:1037711923573178418> Ping**', `${client.ws.ping}ms`, true)
            .addField('**<a:Utility:1037711923573178418> Commands**', `80 cmds`,true)

            .setTimestamp()
           .setFooter(
           `Extreme`,
            client.user.displayAvatarURL()  
      ))
         }
};
