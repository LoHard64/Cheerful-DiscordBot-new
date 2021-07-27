const Discord = require('discord.js')

module.exports = {
  name: "avatar",
  description: "Menampilkan avatar member",

  async run (client, message, args) {

    let member = message.mentions.users.first() || message.author

    let avatar = member.displayAvatarURL({size: 1024})

    const embed = new Discord.MessageEmbed()
    .setTitle(`${member.username} avatar`)
    .setImage(avatar)
    .setColor("RANDOM")

    message.channel.send(embed);
    console.log('\x1b[32m', ' ✓ Test 15 Passed');
  }
}