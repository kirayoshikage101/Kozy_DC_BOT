
require('dotenv').config();

const { REST, Routes, ApplicationCommandOptionType, user } = require('discord.js');

const commands = [ //No big letter
    {
        name: 'play',
        description: 'Plays a RickRoll Song.',
    },

    {
        name: 'ping',
        description: 'Reply with Pong!',
    },

    {
        name: 'user',
        description: 'Provides information about the user.',
    },

    {
        name: 'embed-message',
        description: 'reply with embed message',
    },
    /***{
        name: 'check-profile',
        description: 'Check your info including your avatar',
        options: [
            {
                name: 'user',
                description: 'mention',
                type: ApplicationCommandOptionType.User,
                required: true,
            },
        ]
    },***/

];


// Token for the SERVER_ID stored in the .env file
const rest = new REST({ version: '10'}).setToken(process.env.TOKEN);

(async() => {
    try {

        console.log('Regetering Commands...');

        await rest.put(
            Routes.applicationGuildCommands(
                process.env.BOT_ID,
                process.env.SERVER_ID
            ),
            { body: commands },
        );

        console.log('Command Registered Succesfully!');
        
    } catch (error) {
        console.log(`There is an ${error}`);
    }
})();