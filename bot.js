const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("500407415628628028")
setInterval(function() {
channel.send(`hhhhhhhhhhhhhhhhhhhhhhhhhhhhhh`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
