const Discord = require('discord.js')
const moment = require('moment')

module.exports = {
  name: 'infoserver',
  description: 'menampilkan info server',

  run: async (client, message, args) => {
    const guild = message.guild;
    const icon = guild.iconURL()
    const embed = new Discord.MessageEmbed()
      .setColor('#e6e600')
      .setTitle(message.guild.name)
      .setThumbnail(icon)
      .addField('Informasi Umum', [
        `ID: ${guild.id}`,
        `Name: ${guild.name}`,
        `Owner: ${guild.owner}`
      ])
      .addField('Total', [
        `Member: ${guild.memberCount}`,
        `Role: ${guild.roles.cache.size} roles`,
        `Channels: Total ${guild.channels.cache.size} Channel`,
        `Emoji: ${guild.emojis.cache.size} (Regular: ${guild.emojis.cache.filter((e) => !e.animated).size}, Animated: ${guild.emojis.cache.filter((e) => e.animated).size})`
      ])
      .addField('Informasi Tambahan', [
        `Lokasi Server: ${guild.region}`,
        `Dibuat tanggal: ${moment(guild.createdTimestamp).format('LL')} ${moment(guild.createdTimestamp).format('LT')}`
      ])
      message.channel.send(embed);
  },
};