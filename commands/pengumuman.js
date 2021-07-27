const Discord = require('discord.js');
const { set } = require('quick.db');

module.exports = {
  name: "prelaunch",
  description: "prelaunching Cheerful bot",

  async run (client, message, args) {
    const id = '856183301860360212';
    const embed = new Discord.MessageEmbed()
    .setTitle('***PRE-LAUNCH CHEERFUL BOT!!! 🎉🥳🎉***')
    .setDescription(`@everyone Akhirnya setelah 1 minggu saya bisa launching juga:D`)
    .setThumbnail("https://i.imgur.com/3wc7q24.png")
    .setColor("#ffa500")
    .addField('Tanggal Peluncuran:', 'Senin, 21 Juni 2021')
    .addField('Waktu Peluncuran:', '08:00 WIB (UTC +7)')
    .addField('Catatan:', 'Tanggal dan Waktu yang tertera di atas adalah waktu dimana Bot ini bisa di akses')
    .addField('Kalian bisa mengirim saran dan masukan melalui `+feedback`', `di <#${id}>`)
    .addField('Sekian & Terimakasih 🙏', 'Selamat Malam')
    .setTimestamp()
    message.channel.send(embed);
  }
}