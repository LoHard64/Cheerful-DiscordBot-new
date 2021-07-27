module.exports = {
  name: "mute",
  description: "Mute a member from your server",

  async run (client, message, args) {
      if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("Kamu tidak memiliki izin untuk menggunakan command ini");

      let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

      if(!user) message.channel.send("User ini tidak dapat ditemukan di server ini");

      if(user.id === message.author.id) return message.channel.send("Kamu tidak dapat mute diri sendiri");

      let role = message.guild.roles.cache.find(x => x.name === "Muted");

      if(!role) return message.channel.send("Tidak dapat menemukan role yang di mute");

      let reason = args.slice(1).join(" ");
      if(reason === null) reason = "Alasan tidak jelas"

      user.roles.add(role);

      await message.channel.send(`${user} telah di mute karena alasan berikut: ${reason}`)

      user.send(`Hello ${user}. Kamu telah di mute sama: ${message.guild.name} karena alasan berikut: ${reason}`);
  }
}