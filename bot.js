const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();

let token = fs.readFileSync('public/token.secret').toString().trim();

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)
});

client.login(token);