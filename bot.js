const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("452948379123712011")
setInterval(function() {
channel.send(`HI HI `);
}, 30)
})

client.login(process.env.BOT_TOKEN);
