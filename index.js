const Discord = require("discord.js")
const client = new Discord.Client(

const prefix = "+";
const token = "token";

client.on("ready",() => { 

console.log(`${client.user.username} is online . . .`)
})

client.on("message",async wolf => {

if(wolf.content.startsWith(prefix + "ping")){

wolf.channel.send("**pong 🏓!**")
}
})


client.login(token);