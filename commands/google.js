const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = { 
  name: 'google',
  aliases: ['search', 'g'],
  description: 'Mencari berbagai artikel, sumber, gambar dari google',

  run: async (client, message, args) => {
    let query = args.join(" ");
    if(!query) return message.channel.send("Tidak ada penelusuran")

    let result = await superagent.get("https://customsearch.googleapis.com/customsearch/v1")
    .query({q: query, cx: "f006d584076965673", key: "AIzaSyBRbzxTztlDLVuLnRqMIzGwX4Ia7oOt4p0"});

    if (!result.body.items) return message.channel.send("Tidak ditemukan")
    if (result.status >= 400) return message.channel.send("Error:").then(console.log(result.message))

    let res = result.body.items[0];
    const embed = new Discord.MessageEmbed()
    .setColor('#7289DA')
    .setTitle(res.title)
    .setDescription(res.snippet)
    .setURL(res.link)
    .setImage(res.pagemap.cse_image[0].src || res.pagemap.cse_thumbnail[0].src)
    return message.channel.send(embed)
  }
}