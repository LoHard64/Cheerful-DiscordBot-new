const fetch = require('node-fetch');

const Discord = require('discord.js');

module.exports = {
  name: "covid",
  description: "melihat kasus Covid-19 di berbagai negara",

  async run (client, message, args) {

    let countries = args.join(" ");

    const noArgs = new Discord.MessageEmbed()
    .setTitle('Tidak ada Argumen')
    .setColor('#72147e')
    .setDescription('Kamu tidak memiliki argumen (contoh: +covid all || +covid Indonesia)')
    .setTimestamp()

    if(!args[0]) return message.channel.send(noArgs);

    if(args[0] === "all") {
      fetch(`https://covid19.mathdro.id/api`)
      .then(response => response.json())
      .then(data => {
        let confirmed = data.confirmed.value.toLocaleString()
        let recovered = data.recovered.value.toLocaleString()
        let deaths = data.deaths.value.toLocaleString()

        const embed = new Discord.MessageEmbed()
        .setTitle(`Statistik COVID-19 di seluruh dunia 🌎`)
        .setColor('#72147e')
        .addField('Kasus Terkonfirmasi', confirmed)
        .addField('Sembuh', recovered)
        .addField('Meninggal', deaths)
        .setTimestamp()

        message.channel.send(embed)
      })
    } else {
        fetch(`https://covid19.mathdro.id/api/countries/${countries}`)
        .then(response => response.json())
        .then(data => {
          let confirmed = data.confirmed.value.toLocaleString()
          let recovered = data.recovered.value.toLocaleString()
          let deaths = data.deaths.value.toLocaleString()

          const embed = new Discord.MessageEmbed()
          .setTitle(`Statistik COVID-19 di **${countries}**`)
          .setColor('#72147e')
          .addField('Kasus Terkonfirmasi', confirmed)
          .addField('Sembuh', recovered)
          .addField('Meninggal', deaths)
          .setTimestamp()

          message.channel.send(embed)
        }).catch(e => {
          return message.channel.send('Negara Tidak Valid')
        })
    }
  }
}