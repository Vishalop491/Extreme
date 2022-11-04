const db = require("quick.db");
const Discord = require ("discord.js")
const { version } = require('../../package.json');
const ms = require('pretty-ms');
const { version: discordjsVersion } = require('discord.js');
module.exports = {

  name: "developer",

  category: "info",
    aliases: ['dev', 'developer'],
    description: 'Check\'s bot\'s status',
  run: async (client, message, args, del, member) => {
      message.channel.send(new Discord.MessageEmbed()
            .setColor('AQUA')           .setAuthor(`${message.author.tag}`,message.author.displayAvatarURL({dynmaic : true}))
            .setThumbnail(client.user.displayAvatarURL())
            .addField(
              "**<a:Developer:1037752243748868116> Developers Of Extreme! <a:Developer:1037752243748868116>**",
              "<a:dotss:1037752832289427556> Vanika_xD </>#3031 \n <a:dotss:1037752832289427556> Punit Kumar 👑✨#5834"
            )

            .setTimestamp()
           .setFooter(
           `Extreme`,
            client.user.displayAvatarURL()  
      ))
         }
};
