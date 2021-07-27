const Discord = require('discord.js');
const translate = require('@iamtraction/google-translate');

module.exports = {
  name: "translateid",
  aliases: ["trid"],
  description: "google translate",

  run: async (client, message, args) => {
    const query = args.join(" ");
    if(!query) return message.channel.send("Sebutkan text yang mau di translate!")

    const translated = await translate(query, {to: 'id'});
    message.channel.send(translated.text);
  }
}