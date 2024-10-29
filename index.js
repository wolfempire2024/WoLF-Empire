const Discord = require("discord.js")
const client = new Discord.Client(

const prefix = "+";
const token = "MTI1NTYwODE1MjU4MjI2Mjc4NA.GjYpvJ.iNSYfC5TGa7f2AwWIICan1Lo_Y_bnteFlILo5k";

client.on("ready",() => { 

console.log(`${client.user.username} is online . . .`)
})

client.on("message",async wolf => {

if(wolf.content.startsWith(prefix + "ping")){

wolf.channel.send("**pong 🏓!**")
}
})


client.login(token);
