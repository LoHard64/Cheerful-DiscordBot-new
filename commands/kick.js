const Discord = require('discord.js');

module.exports = {
  name: "kick",
  description: "Menendang member yang ngeyel keluar dari server",

  async run(client, message, args) {

    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send('Kamu tidak bisa menggunakan command ini!')
    if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send('Role gw belum sampe kesitu buat kick member, coba naikin lagi rolenya')

    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

    if(!args[0]) return message.channel.send('Sebutkan User yang mau di kick');

    if(!member) return message.channel.send('Tidak bisa menemukan User ini');
    if(!member.kickable) return message.channel.send('User ini tidak dapat di kick, karena memiliki role tinggi daripada kamu');

    if(member.id === message.author.id) return message.channel.send('Leave kalau mau kick diri sendiri!');

    let reason = args.slice(1).join(" ");

    if(reason === undefined) reason = 'gak jelas';

    member.kick(reason)
    .catch(err => {
      if(err) return message.channel.send('Ada yang salah, coba lagi')
    })

    const kickembed = new Discord.MessageEmbed()
    .setTitle('Member sudah di tendang')
    .setThumbnail(member.user.displayAvatarURL())
    .addField('User Tertendang', member.user.username ? member.user.username : 'unknown')
    .addField('Ditendang sama', message.author.username ? message.author.username : 'cannot access username')
    .addField('Alasan', reason ? reason : 'No reason provided')
    .setFooter('Waktu ditendang', client.user.displayAvatarURL())
    .setTimestamp()

    message.channel.send(kickembed);


  }
}