const { Canvas } = require('canvacord');
const canva = require('canvacord');
const Discord = require('discord.js');

module.exports = {
  name: "color",
  description: "Trigger diri sendiri",

  async run (client, message, args) {

    let colorOfChoice = args.join(" ");

    if(!args[0]) return message.channel.send('Sebutkan HEX Code yang valid (contoh: #FF0000)');

    let image = await Canvas.color(colorOfChoice);

    let colour = new Discord.MessageAttachment(image, "color.png")

    message.channel.send(colour);
  }
}