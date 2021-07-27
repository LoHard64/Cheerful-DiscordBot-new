const Discord = require("discord.js")

module.exports = {
  name: "ping",
  description: "test command ping",

  async run (client, message, args) {
    console.log('\x1b[32m', ' ✓ Test 2 Passed')
    
    const ping = new Discord.MessageEmbed()
    .setDescription(`🏓 Pong!! \`${Date.now() - message.createdTimestamp}\` ms`);


    message.channel.send(ping);
  }
}