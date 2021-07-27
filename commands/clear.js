module.exports = {
  name: "clear",
  description: "Bersihkan Pesan-Pesan Lama",

  async run (client, message, args) {

    console.log('\x1b[33m', "Clearing Server's Chat...");
    
    const amount = args.join();

    if(!amount) return message.reply('Sebutkan banyaknya chat untuk di hapus')
    message.channel.send('Note: Menghapus chat hanya untuk chat yang belum berumur 14 hari');

    if(amount > 100) return message.reply(`kamu tidak bisa menghapus lebih dari 100 chat sekaligus`)

    if(amount < 1) return message.reply(`kamu harus memasukkan nilai paling sekikit 1 chat`)

    await message.channel.messages.fetch({limit: amount}).then(messages => {
      message.channel.bulkDelete(messages
   )});


  message.channel.send(' ✓ Berhasil menghapus pesan!');
    
  }
}