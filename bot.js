const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("514560157024256041")
setInterval(function() {
channel.send(`hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
