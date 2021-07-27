const Discord = require('discord.js');

module.exports = {
  name: "ban",
  description: "Ban member yang bandel keluar dari server",

  async run(client, message, args) {
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('Kamu tidak bisa menggunakan command ini!')
    if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('Role gw belum sampe kesitu buat ban member, coba naikin lagi rolenya')

    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

    if(!args[0]) return message.channel.send('Sebutkan User yang mau di ban');

    if(!member) return message.channel.send('Tidak bisa menemukan User ini');
    if(!member.banable) return message.channel.send('User ini tidak dapat di ban, karena memiliki role tinggi daripada kamu');

    if(member.id === message.author.id) return message.channel.send('Leave kalau mau ban diri sendiri!');

    let reason = args.slice(1).join("");

    if(reason === undefined) reason = 'gak jelas';

    member.ban(reason)
    .catch(err => {
      if(err) return message.channel.send('Ada yang salah, coba lagi')
    })

    const banembed = new Discord.MessageEmbed()
    .setTitle('Member sudah di ban')
    .setThumbnail(member.user.displayAvatarURL())
    .addField('User yang di ban', member.user.username ? member.user.username : 'unknown')
    .addField('Di Ban sama', message.author.username ? message.author.username : 'cannot access username')
    .addField('Alasan', reason ? reason : 'No reason provided')
    .setFooter('Waktu di Ban', client.user.displayAvatarURL())
    .setTimestamp()

    message.channel.send(banembed);

  }
}