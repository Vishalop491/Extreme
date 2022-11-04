const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const client = new Discord.Client()
module.exports = {
    name: 'eval',
    category: 'owner',
    run: async (client, message, args) => {
        if (message.author.id !== '984491912943792269') return message.channel.send("You do not have permission to use this command!");
        const embed = new MessageEmbed()
            .setTitle('Evaluating...')
        const msg = await message.channel.send(embed);
        try {
            const data = eval(args.join(' ').replace(/```/g, ''));
            const embed = new MessageEmbed()
                .setTitle('output:')
                .setDescription(await data)
            .setColor('AQUA')
            await msg.edit(embed)
            await msg.react('âœ…')
            await msg.react('âŒ')
            const filter = (reaction, user) => (reaction.emoji.name === 'âŒ' || reaction.emoji.name === 'âœ…') && (user.id === message.author.id);
            msg.awaitReactions(filter, { max: 1 })
                .then((collected) => {
                    collected.map((emoji) => {
                        switch (emoji._emoji.name) {
                            case 'âœ…':
                                msg.reactions.removeAll();
                                break;
                            case 'âŒ':
                                msg.delete()
                                break;
                        }
                    })
                })
        } catch (e) {
            const embed = new MessageEmbed()
                .setTitle('error')
                .setDescription(e)
                .setColor("AQUA")
            return await msg.edit(embed);
        }
    }
}
