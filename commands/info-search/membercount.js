const db = require("quick.db");
const Discord = require ("discord.js")
const { version } = require('../../package.json');
const ms = require('pretty-ms');
const { version: discordjsVersion } = require('discord.js');
module.exports = {

  name: "membercount",

  category: "info",
    aliases: ['membercount', 'membercounts', 'mc'],
    description: 'Check\'s bot\'s status',
  run: async (client, message, args, del, member) => {
  
  const members = message.guild.members.cache;
  
      message.channel.send(new Discord.MessageEmbed()
            .setColor('AQUA')
.setAuthor(`${message.author.tag}`,message.author.displayAvatarURL({dynmaic : true}))
            .setThumbnail(client.user.displayAvatarURL())
            .addField('**<:general:1036978108596756550> Membercount**', `${message.guild.memberCount}`, true)
            .addField(`**<:moderation:1036980294714142781> Humans**`, `${members.filter(member => !member.user.bot).size} users`, true)
            .addField('**<:bots:1032326461455085618> Bots**', `${members.filter(member => member.user.bot).size} bots`, true)

            .setTimestamp()
           .setFooter(
           `Extreme`,
            client.user.displayAvatarURL()  
      ))
         }
};
