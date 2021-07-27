const search = require("youtube-search");
const Discord = require("discord.js");
const config = require('./../config.json')
const opts = {
  maxResults: 25,
  key: config.YOUTUBE_API,
  type: 'video'
};

module.exports = {
  name: "youtube",
  aliases: ["yt", "ytsr", "ytsearch"],
  description: 'mencari video youtube',

  run: async (client, message, args) => {
    let embed = new Discord.MessageEmbed()
    .setColor("#e62117")
    .setDescription("Silahkan masukkan pencarian, Jangan lupa untuk mempersingkat pencarian anda")
    .setTitle("YouTube Search API");
    message.channel.send(embed);

    let filter = m => m.author.id === message.author.id;
    let query = await message.channel.awaitMessages(filter, { max: 1 });
    let results = await search(query.first().content, opts).catch(err => console.log(err));
    if(results) {
      let youtubeResults = results.results;
      let i  = 0;
      let titles = youtubeResults.map(result => {
        i++;
        return i + ") " + result.title;
      });
      console.log('Youtube API now currently searching');
      message.channel.send({
        embed: {
          title: 'Pilih lagu yang kamu mau dengan mengetikkan nomor di bawah ini:',
          description: titles.join("\n"),
          color: '#e62117'
        }
      }).catch(err => console.log(err));
    
      filter = m => (m.author.id === message.author.id) && m.content >= 1 && m.content <= youtubeResults.length;
      let collected = await message.channel.awaitMessages(filter, { max: 1 });
      let selected = youtubeResults[collected.first().content - 1];

      embed = new Discord.MessageEmbed()
        .setTitle(`${selected.title}`)
        .setURL(`${selected.link}`)
        .setDescription(`${selected.description}`)
        .setThumbnail(`${selected.thumbnails.default.url}`)
        .setColor('#e62117')
        .setTimestamp()

      message.channel.send(embed);
    }  
  }
}

