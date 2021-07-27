const Discord = require("discord.js");

module.exports = {
  name: "feedback",
  description: "membuat saran",

  async run(client, message, args, cmd, discord) {
    const channel = message.guild.channels.cache.find(c => c.name === 'feedback');

    if(!channel) return message.channel.send('channel feedback tidak ada');

    let messageArgs = args.join(' ');

    if(!args[0]) return message.channel.send('Sebutkan saran yang ingin kamu kirim');

    const embed = new Discord.MessageEmbed()
    .setColor('#fadf2e')
    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
    .setDescription(messageArgs);

    channel.send(embed).then((msg) => {
      msg.react('👍');
      msg.react('👎');
      message.delete();
    }).catch((err) => {
      throw err;
    })
  }
}