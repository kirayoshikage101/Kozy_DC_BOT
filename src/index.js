
require('dotenv').config();

const { Client, IntentsBitField, EmbedBuilder } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
        IntentsBitField.Flags.GuildMembers,
    ],
});


client.on('ready', (c) => {
    console.log(`${c.user.tag} is Online! :)`);

    c.user.setStatus('online');

    let guild = c.guilds.cache.get(process.env.SERVER_ID);

    c.channels.cache.get('1215800790862659697').setName(`👥 Server - ${guild.memberCount}`);
    c.channels.cache.get('1215801126889328691').setName(`👤 Member - ${guild.members.cache.filter(member => !member.user.bot).size}`);
    c.channels.cache.get('1215801150763171960').setName(`🤖 Bot - ${guild.members.cache.filter(member => member.user.bot).size}`);
});

//Reply to the user
client.on('messageCreate', (msg) => {
    
    if(msg.author.bot){
        return;
    }

    if(msg.content === 'hello'){
        msg.reply('hello');
    }

    if(msg.content === 'pogi ba si karsten?'){
        msg.reply('Pogi! :>');
    }

    if(msg.content === 'zel'){
        msg.reply('Pretty as Always! :>');
    }

    if(msg.content === 'pogi ba si male?'){
        msg.reply('sobra pogi!');
    }

    if(msg.content === 'Pogi ba si Inygo?' || msg.content === 'pogi ba si inygo?') {
        msg.reply('OA sa group. :<');
    }

    if(msg.content === 'Maayong gabii mga rill...' || msg.content === 'maayong gabii mga rill...' || msg.content === 'maayong gabii mga rill'){
        msg.reply('NIGGAS!');
    }

});

// Bot /slash commands from command-register.js
client.on('interactionCreate', (interaction) => {
    if(!interaction.isChatInputCommand()) {
        return;
    }

    if(interaction.commandName === 'help'){
        const helpMsg = new EmbedBuilder()
        .setAuthor()
    }

    if(interaction.commandName === 'ping'){
        interaction.reply('Pong!');
    }

    if(interaction.commandName === 'play'){
        interaction.reply('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    }

    if(interaction.commandName === 'user'){
        interaction.reply(`This command Was run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}.`)
    }

    if(interaction.commandName === 'embed-message'){
        
        const embedMsg = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle('Some title')
        .setURL('https://discord.js.org/')
        .setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
        .setDescription('Some description here')
        .setThumbnail('https://i.imgur.com/AfFp7pu.png')
        .addFields(
            { name: 'Regular field title', value: 'Some value here' },
            { name: '\u200B', value: '\u200B' },
            { name: 'Inline field title', value: 'Some value here', inline: true },
            { name: 'Inline field title', value: 'Some value here', inline: true },
        )
        .addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
        .setImage('https://i.imgur.com/AfFp7pu.png')
        .setTimestamp()
        .setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

        interaction.reply({ embeds: [embedMsg] });
    }
});

client.on('guildMemberAdd', (member) => {
    client.channels.cache.get('1215800790862659697').setName(`👥 Server - ${member.guild.memberCount}`);
    client.channels.cache.get('1215801126889328691').setName(`👤 Member - ${member.guild.members.cache.filter(member => !member.user.bot).size}`);
    client.channels.cache.get('1215801150763171960').setName(`🤖 Bot - ${member.guild.members.cache.filter(member => member.user.bot).size}`);
});

client.on('guildMemberRemove', (member) => {
    client.channels.cache.get('1215800790862659697').setName(`👥 Server - ${member.guild.memberCount}`);
    client.channels.cache.get('1215801126889328691').setName(`👤 Member - ${member.guild.members.cache.filter(member => !member.user.bot).size}`);
    client.channels.cache.get('1215801150763171960').setName(`🤖 Bot - ${member.guild.members.cache.filter(member => member.user.bot).size}`);
});

client.login(process.env.TOKEN);

