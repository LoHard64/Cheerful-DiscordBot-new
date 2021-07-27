const Discord = require('discord.js');

module.exports = {
  name: "removerole",
  description: "menghapus role member",

  async run (client, message, args) {
    if(message.member.roles.cache.find(r => r.name === 'King')) {
      const user = message.mentions.users.first();

      if(user) {
        const userSet = message.guild.member(user);
        if(userSet) {
          var role = message.guild.roles.cache.find(r => r.name === 'pembantu');
          var member = message.guild.members.cache.find(member => member.id === userSet.id);

          member.roles.remove(role.id);
          message.channel.send(`Berhasil menghapus ${role} dari ${member}`);
        } else {
          message.channel.send('User yang kamu mention tidak ada di server ini')
        }
      } else {
        message.channel.send('Sebutkan user yang ingin diberikan role via mention atau ID');
      }
    } else {
      return message.channel.send('Kamu tidak bisa menggunakan command ini!');
    }
  }
}