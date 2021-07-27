module.exports = {
  name: "unmute",
  description: "Unmute member",

  async run (client, message, args) {
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("Kamu tidak memiliki izin untuk menjalankan command ini");

    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

    let role = message.guild.roles.cache.find(x => x.name === "Muted");

    if(user.roles.cache.has(role)) return message.channel.send("Member ini tidak di mute");

    user.roles.remove(role);

    message.channel.send(`${user} telah di unmute`);

  }
}