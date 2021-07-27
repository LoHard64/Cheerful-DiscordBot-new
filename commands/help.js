const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
  name: "help",
  description: "untuk menolong user yang belum faham",

  async run (client, message, args) {
    console.info('Running Help');
    const info = new Discord.MessageEmbed()
    .setTitle('Informasi')
    .addField('`+halo`', 'Memberi sapa kepada bot')
    .addField('`+infobot`', `Memberi informasi mengenai @${client.user.tag}`)
    .addField('`+infoserver`', `Memberi informasi mengenai server ${message.guild.name}`)
    .addField('`+help`', 'Memberi informasi mengenai command-command yang tersedia dan fungsinya')
    .addField('`+ping`', 'Melihat berapa ping API bot')
    .addField('`+setprefix`', 'Mengganti prefix pada command bot(hanya yang punya premission "MANAGE_SERVER")')
    .setTimestamp()

    const moderation = new Discord.MessageEmbed()
    .setTitle('Moderasi')
    .addField('`+kick`', 'Kick member yang meresahkan keluar dari server via mention atau ID')
    .addField('`+ban`', 'Ban member yang bandel keluar dari server via mention atau ID')
    .addField('`+warn`', 'Memberi Peringatan pada member')
    .addField('`+warnings`', 'Menampilkan User yang menerima peringatan')
    .addField('`+mute`', 'Mute member yang sering SPAM dan berkata kasar(setelah peringatan 3 kali)')
    .addField('`+unmute`', 'Menghentikan mute member (kurun waktu 1 minggu)')
    .addField('`+deletewarns`', 'Menghapus peringatan pada member yang diberi peringatan')
    .addField('`+clear`', 'Menghapus pesan (Note: Tidak bisa meghapus pesan lebih dari 14 Hari)')
    .setTimestamp()

    const fun = new Discord.MessageEmbed()
    .setTitle('Bersenang-senang')
    .setDescription('Bantu Developer untuk memperbanyak ini 🙏')
    .addField('`+ascii`', 'Konversi teks ke ascii')
    .addField('`+say`', 'Mengatakan command')
    .addField('`+youtube`', 'Mencari video dari Youtube')
    .setTimestamp()

    const utility = new Discord.MessageEmbed()
    .setTitle('Utilitas')
    .addField('`+avatar`', 'Menampilkan User Avatar')
    .addField('`+weather`', 'Melihat ramalan cuaca untuk lokasi yang di pilih')
    .addField('`+calculate`', 'Menghitung soal matematika')
    .addField('`+covid`', 'Melihat kasus Covid-19 di berbagai negara')
    .addField('`+color`', 'Menampilkan warna menggunakan kode HEX (contoh: #FF0000)')
    .addField('`+google`', 'Searching apapun dari Google')
    .addField('`+translate`', 'Menerjemahkan chat ke bahasa inggris')
    .setTimestamp()

    const learn = new Discord.MessageEmbed()
    .setTitle('Pembelajaran')
    .setDescription('Bantu Developer untuk menyempurnakan ini 🙏')
    .addFields(
      {
        name: '`+kimia`',
        value: 'Menampilkan fitur tentang pembelajaran kimia'
      }
    )
    .setTimestamp()

    const pages = [
        info,
        moderation,
        fun,
        utility,
        learn
    ]

    const emojilist = ["◀️", "▶️"];

    const timeout = false

    pagination(message, pages, emojilist, timeout)
    
  }
}