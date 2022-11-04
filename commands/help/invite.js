const discord = require("discord.js");

module.exports = {
  name: "invite",
  category: "info",
  aliases: ["inv", "invite", "i"],  
  description: "INVITE Extreme BOT",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setTitle(`Invite Me`)
    .setDescription(`• [Invite Me](https://discord.com/oauth2/authorize?client_id=906899294815145995&permissions=8&scope=bot%20applications.commands)`)
    .setColor("AQUA")
      .setThumbnail(client.user.displayAvatarURL())
      .setFooter(
      `Extreme`,
      client.user.displayAvatarURL(),
    );
    
    message.channel .send(embed)
    
  
  }
}