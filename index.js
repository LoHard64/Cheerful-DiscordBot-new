const Discord = require('discord.js');

const client = new Discord.Client();

const { token, default_prefix } = require('./config.json');

const { readdirSync } = require('fs');

const { join } = require('path');
const { checkServerIdentity } = require('tls');

const config = require('./config.json')
client.config = config;

const db = require('quick.db');

client.commands= new Discord.Collection();

const commandFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(join(__dirname, "commands", `${file}`));
    client.commands.set(command.name, command);
}


client.on("error", console.error);

client.on('ready', () => {
  console.log('Saya Online');
  console.log('\x1b[32m', ' ✓ Bot Online Successfully');

  const arrayOfStatus = [
    `Prefix '+'`,
    `Kesultanan Server`,
    `member activities`
  ];

  let index = 0;
  setInterval(() => {
    if(index === arrayOfStatus.length) index = 0;
    const status = arrayOfStatus[index];
    client.user.setActivity(status, { type: "WATCHING" }).catch(console.error)
    index++;
  }, 5000)
});

client.on("message", async message => {

  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;

  let prefix = await db.get(`prefix_${message.guild.id}`)
  if(prefix === null) prefix = default_prefix;

  if(message.content.startsWith(prefix)) {
    const args = message.content.slice(prefix.length).trim().split(/ +/);

    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if(!command) return;

    if (command) {
      command.run(client, message, args);
    }
  }
})

client.login(token);