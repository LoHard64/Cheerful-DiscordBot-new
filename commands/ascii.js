const figlet = require('figlet');

module.exports = {
  name: "ascii",
  description: "Konversi tulisan ke bahasa komputer(ascii)",

  async run (client, message, args) {
    if(!args[0]) return message.channel.send('Sebutkan Teks yang mau diubah');

    msg = args.join(" ");

    figlet.text(msg, function (err, data){
      if(err){
        console.log('Ada yang salah');
        console.dir(err);
      }
      if(data.length > 2000) return message.channel.send('Sebutkan teks yang lebih rendah dari 2000 karakter')

      message.channel.send('```' + data + '```')
    })
    console.log('\x1b[32m', ' ✓ Test 7 Passed');
  }
}