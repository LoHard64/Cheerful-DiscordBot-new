const weather = require('weather-js');

const Discord = require('discord.js');

module.exports = {
  name: "weather",
  description: "melihat cucaca sekarang",

  async run (client, message, args){
  
  weather.find({search: args.join(" "), degreeType: 'C'}, function (error, result){
    if(error) return message.channel.send(error);
    if(!args[0]) return message.channel.send('Sebutkan Lokasinya')

    if(result === undefined || result.length === 0) return message.channel.send('Lokasi **Tidak Valid**');

    var current = result[0].current;
    var location = result[0].location;

    const weatherinfo = new Discord.MessageEmbed()
    .setDescription(`**${current.skytext}**`)
    .setAuthor(`Weather forecast for ${current.observationpoint}`)
    .setThumbnail(current.image)
    .setColor('#87CEEB')
    .addField('Zona Waktu', `UTC +${location.timezone}`, true)
    .addField('Satuan Suhu', 'Celsius', true)
    .addField('Temperatur', `${current.temperature}°C`)
    .addField('Angin', current.winddisplay, true)
    .addField('Terasa Seperti', `${current.feelslike}°C`, true)
    .addField('Kelembaban', `${current.humidity}%`, true)

    message.channel.send(weatherinfo);
  })
  }
}