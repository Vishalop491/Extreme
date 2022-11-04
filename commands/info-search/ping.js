const discord = require("discord.js");

module.exports = {
  name: "ping",
  category: "info",
  description: "Returns latency and API ping",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setDescription(`Ping - ${client.ws.ping}ms`)
    .setColor("AQUA")
    .setFooter(`Requested by ${message.author.username}`)
    
    message.channel.send(embed)
  }
}