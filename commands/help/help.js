const ButtonPages = require('discord-button-pages');
const { MessageEmbed } = require('discord.js')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");

module.exports = {
  name: "help",
  description:
    "Get list of all command and even get to know every command detials",
  usage: "help <cmd>",
  category: "info",
  aliases: ["h", "help"],
  run: async (client, message, args) => {
    
   let helpEmbed = new MessageEmbed()
      .setAuthor(`${message.author.tag}`,message.author.displayAvatarURL({dynmaic : true}))
      .setDescription("**<a:dots_animated:1037382345390559313> My Prefix For This Server ``!`` \n<a:dots_animated:1037382345390559313> Total Commands: ``80`` \n<a:dots_animated:1037382345390559313> Usable By You: ``77``** \n  **[Invite Me](https://discord.com/api/oauth2/authorize?client_id=1022467942371311656&permissions=8&scope=bot)** **|** **[Support](https://discord.gg/rWUtdqqtET)** \n \n``Type fun-help To Get Started!`` \n \n**Commands Category**\n**<a:fun:1037664953781465118> ``:`` Fun** \n**<a:image:1037669639183929414> ``:`` Image** \n**<a:infosearch:1028640859169763338> ``:`` Information** \n**<a:moderation:1037702441329762305> ``:`` Moderation** \n**<a:ownerbadge:1037039780300599367> ``:`` Owner** \n**<a:suggestion:1037708380896231467> ``:`` Suggestion** \n**<a:Utility:1037711923573178418> ``:`` Utility**")

      .setThumbnail(client.user.displayAvatarURL())
          .setColor("AQUA")
      .setFooter(
      `Made By Vanika_xD </>#3031`,
      client.user.displayAvatarURL(),
    );

      message.channel.send(helpEmbed)

  },
};