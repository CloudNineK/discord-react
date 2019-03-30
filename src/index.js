import fs from 'fs';
import React from 'react';
import ReactDOM from 'react-dom';
import Discord from 'discord.js';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


// Initialize discord bot
const client = new Discord.Client();
const token = fs.readFileSync('public/token.secret').toString().trim();

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)
});
client.login(token);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
