const discord = require("discord.js");
const { Random } = require("something-random-on-discord");
const random = new Random();

module.exports = {
  name: "cry",
  category: "fun",
  description: "Cry with gif",
  run: async (client, message, args) => {
    
    let data = await random.getAnimeImgURL("cry");
    
    let embed = new discord.MessageEmbed()
    .setImage(data)
    .setColor("AQUA")
    .setFooter(`Please talk with ${message.author.username} he/she is crying`)
    .setTimestamp()
    
    message.channel.send(embed);
  }
};