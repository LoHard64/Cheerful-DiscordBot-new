const pagination = require('discord.js-pagination');
const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const help = require('./help');

module.exports = {
  name: "kimia",
  description: "Membahas materi materi Kimia",

  async run (client, message, args) {
    const noArgs = new Discord.MessageEmbed()
    .setTitle('Sebutkan materi yang ingin kamu pelajari. Kamu bisa gunakan `+kimia help` untuk melihat daftar materi yang ada')

    if(!args[0]) return message.channel.send(noArgs);

    if(args[0] == "help") {
      const kimiahelp = new MessageEmbed()
      .setTitle('Kimia')
      .setDescription('Jangan lupa tambahkan command `+kimia`')
      .addFields(
        {
          name: 'Materi Pembelajaran',
          value: '`pembuatan_larutan`'
        },
        {
          name: 'Fitur',
          value: '`pt`'
        }
      )
      .setFooter('Materi Pembelajaran dan Fitur dapat berubah sewaktu-waktu')
      message.channel.send(kimiahelp);
    }

    if(args[0] == "pt") {
      const kimiapt = new MessageEmbed()
      .setTitle('Tabel Periodik')
      .setImage('https://i.imgur.com/VJdlZ1M.jpg')
      .setTimestamp()
      message.channel.send(kimiapt);
    }

  }
}