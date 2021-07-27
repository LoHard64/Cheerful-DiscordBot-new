const db = require('quick.db');
const { description } = require('./warn');
const warnings = require('./warnings');

module.exports = {
  name: "deletewarns",
  description: "Menghapus peringatan pada member yang diberi peringatan",

  async run (client, message, args) {
    if(!message.member.hasPermission("MANAGE_SERVER")) return message.channel.send('Kamu tidak bisa menggunakan command ini.');

    const user = message.mentions.users.first() || message.guild.members.cache.get(args[0]);

    if(!user) return message.channel.send('Sebutkan User, via mention atau ID');

    if(user.bot) return message.channel.send('Kamu tidak bisa memberi peringatan kepada bot');

    if(user.id === message.author.id) return message.channel.send('Kamu tidak bisa menghapus peringatan kamu sendiri');

    if(warnings === null) return message.channel.send(`**${user.username} tidak memiliki peringatan**`);


    db.delete(`warnings_${message.guild.id}_${user.id}`);

    message.channel.send('Sukses!')
  }
}