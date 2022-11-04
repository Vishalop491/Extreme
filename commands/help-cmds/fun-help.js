const ButtonPages = require('discord-button-pages');
const { MessageEmbed } = require('discord.js')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");

module.exports = {
  name: "fun",
  description:
    "Get list of all command and even get to know every command detials",
  usage: "fun-help",
  category: "info",
  aliases: ["fun-h", "fun-help", "f-h"],
  run: async (client, message, args) => {
    
   let helpEmbed = new MessageEmbed()
      .setAuthor(`${message.author.tag}`,message.author.displayAvatarURL({dynmaic : true}))
      .setTitle("**<a:fun:1037664953781465118> ``:`` Fun Commands:- **")
      .setDescription("**<a:dotss:1037752832289427556> ``:`` Cry \n<a:dotss:1037752832289427556> ``:`` Hug \n <a:dotss:1037752832289427556> ``:`` Kiss \n <a:dotss:1037752832289427556> ``:`` Math \n <a:dotss:1037752832289427556> ``:`` Pat \n <a:dotss:1037752832289427556> ``:`` Punch**")

      .setThumbnail(client.user.displayAvatarURL())
      .setFooter(
      `Made By Vanika_xD </>#3031`,
      client.user.displayAvatarURL(),
    );

      message.channel.send(helpEmbed)

  },
};