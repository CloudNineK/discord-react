const express = require('express');
const bodyParser = require('body-parser');
const Discord = require('discord.js');
const fs = require('fs')

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));


// bot login
const client = new Discord.Client();
let token = fs.readFileSync('public/token.secret').toString().trim();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login(token);


app.get('/api/user/banner', (req, res) => {
  // TODO:
  //  Separate into online and offline via filter
  let guild = client.guilds.get('238901203281510400');
  let banners = []

  // Looking for a cleaner way to do this with ES6 syntax
  const createBanner = mem => {

    const serverName = mem =>
      (mem.nickname == null) ? mem.user.username : mem.nickname;

    return(
      {
        name: serverName(mem),
        avatar: mem.user.avatarURL
      });
  }

  guild.members.forEach(mem => banners.push(createBanner(mem)));
  res.send(banners);
});

app.post('/api/', (req, res) => {
});

app.listen(port, () => console.log(`Listening on port ${port}`));