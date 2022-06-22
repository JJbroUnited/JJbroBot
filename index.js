const Discord = require("discord.js")
require("dotenv").config()



const client = new Discord.Client({
    allowedMentions: {
        Parse: ['user', 'roles'],
        repiledUser: true,
    },
    intents: [
        'DIRECT_MESSAGES',
        'GUILDS',
        'GUILD_BANS',
        'GUILD_MESSAGE_REACTIONS',
        'GUILD_EMOJIS_AND_STICKERS',
        'GUILD_MEMBERS',
        'GUILD_MESSAGES',
        'GUILD_WEBHOOKS',
        'GUILD_MEMBERS',
        "GUILD_PRESENCES",], partials: ['CHANNEL', 'MESSAGE'
        ],
});

client.on("ready", () => {
    console.log('Test Manager is Online')


    client.user.setActivity(`Myself Think Bozo`, { type: "WATCHING" })
});

client.on("messageCreate", (message) => {
    if (message.content == "System"){
        message.reply(`Running Fine Sir! Latency is ${Date.now() - message.createdTimestamp}ms Made by United Development`)
    }
})

client.login(process.env.TOKEN)