const db = require('quick.db');

module.exports = {
  name: "setprefix",
  description: "Mengganti server prefix",

  async run (client, message, args) {
    if(!message.member.hasPermission("MANAGE_SERVER")) return message.channel.send('Kamu tidak bisa menggunakan command ini!')

    if(!args[0]) return message.channel.send('Sebutkan prefix baru');

    if(args[1]) return message.channel.send('Prefix tidak bisa memiliki 2 spasi');

    db.set(`prefix_${message.guild.id}`, args[0])

    message.channel.send(`Berhasil mengganti prefix ke **${args[0]}**`)

  }
}