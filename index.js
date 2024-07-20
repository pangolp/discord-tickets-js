require("dotenv").config();
const discord = require('discord.js')

const client = new discord.Client({
    intents: 3276799
});

client.on('messageCreate', async (message) => {

    if(message.author.bot) return;
    if(!message.content.startsWith('!')) return;

    try {
        const command = message.content.toLowerCase().slice(1).split(' ')[0];
        const executeCommand = require(`./commands/${command}.js`);
        executeCommand( message);
    } catch(error) {
        console.log(`${message.content} no es un comando valido.`);
    }
});

client.on("ready", () => {
    console.log(`${client.user.tag} esta listo.`);
});

client.on('interactionCreate', async (interaction) => {
    if (interaction.isChatInputCommand()) return;

    try {
        const execute = require(`./interactions/${interaction.customId}`);
        execute(interaction);
    } catch (error) {
        console.log('[ERR]: interacción fallida.')
    }
})

client.login(process.env.TOKEN);
