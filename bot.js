const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("656494031232040970")
setInterval(function() {
channel.send(`amine amine amine `);
}, 30)
})

client.login(process.env.BOT_TOKEN);