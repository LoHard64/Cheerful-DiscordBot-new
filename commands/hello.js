module.exports = {
  name: "halo",
  description: "sapa doang emg g boleh yhahah",

  async run (client, message, args) {
    console.log('ada yang nyapa gais, saut balik lah masa enggak');
    message.channel.send('hai');
    
  }
}