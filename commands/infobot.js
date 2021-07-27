const Discord = require("discord.js");

module.exports = {
  name: "infobot",
  description: "bot introduction test",

  async run (client, message, args) {
    const id = '773502813493133332';
    const embed = new Discord.MessageEmbed()
    .setTitle('Cheerful Bot')
    .setDescription('Cheerful Bot adalah bot serba guna yang menggunakan javascript dan npm')
    .setColor('#008000')
    .addField('Status:', 'Aktif, Dalam Pengembangan')
    .addField('Versi:', '1.0.0')
    .addField('Lisensi:', 'ISC')
    .addField('Pembuat:', `<@${id}>`)
    .addField('Jumlah Command:', '24')

    message.channel.send(embed);
  }

}