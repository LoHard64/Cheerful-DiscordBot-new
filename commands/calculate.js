const math = require('mathjs');

const Discord = require('discord.js');

module.exports = {
  name: "calculate",
  aliases: ["calc"],
  description: "menghitung soal matematika",

  async run (client, message, args) {
    if(!args[0]) return message.channel.send('Sebutkan pertanyaan nya');

    let resp;

    try {
      resp = math.evaluate(args.join(" "))
    } catch (e) {
        return message.channel.send('Sebutkan pertanyaan yang **valid**')
    }

    const embed = new Discord.MessageEmbed()
    .setColor('#800000')
    .setTitle('Kalkulator')
    .addField('Pertanyaan', `\`\`\`css\n${args.join(' ')}\`\`\``)
    .addField('Jawaban', `\`\`\`css\n${resp}\`\`\``)

    message.channel.send(embed);

    console.log('\x1b[32m', ' ✓ Test 9 Passed');
  }

}