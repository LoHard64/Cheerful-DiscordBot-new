const Discord = require('discord.js');

const db = require('quick.db');

module.exports = {
  name: "warn",
  description: "memberi peringatan kepada member",

  async run (client, message, args) {
    if(!message.member.hasPermission("MANAGE_SERVER")) return message.channel.send('Kamu tidak bisa menggunakan command ini.');

    const user = message.mentions.users.first() || message.guild.members.cache.get(args[0]);

    if(!user) return message.channel.send('Sebutkan User, via mention atau ID');

    if(user.bot) return message.channel.send ('Kamu tidak bisa memberi peringatan kepada bot');

    if(message.author.id === user.id) return message.channel.send('Kamu tidak bisa memberi peringatan kepada diri kamu sendiri');

    if(message.guild.owner.id === user.id) return message.channel.send('Kamu tidak bisa memberi peringatan kepada pemilik server');

    let reason = args.slice(1).join(" ");

    if(!reason) reason = 'gak jelas';

    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);

    if(warnings === 3) return message.channel.send(`${user} telah mencapai tiga kali peringatan`);

    if(warnings === null) {
      db.set(`warnings_${message.guild.id}_${user.id}`, 1);
      user.send(`Kamu menerima peringatan di ${message.guild.name} karena alasan: \`${reason}\``)
      await message.channel.send(`**${user.username}** telah menerima peringatan`)
    }

    if(warnings !== null){
      db.add(`warnings_${message.guild.id}_${user.id}`, 1)
      user.send(`Kamu menerima peringatan di ${message.guild.name} karena alasan: \`${reason}\``)
      await message.channel.send(`**${user.username}** telah menerima peringtan`)
    }
  }
}