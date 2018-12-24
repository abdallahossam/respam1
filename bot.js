const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("526557096531984404")
setInterval(function() {
channel.send(`sub to my channel 7ix_`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
