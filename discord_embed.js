console.log('JavaScript code is running!');

import Discord from 'discord.js';

const inviteEmbed = new Discord.MessageEmbed()
    .setTitle('Join Our Discord Server!')
    .setDescription('Click the link below to join our Discord community!')
    .setColor('#7289da')
    .addField('Invite Link', 'https://discord.gg/A8sFpeeZzu');

const embedContainer = document.getElementById('discord-embed');
embedContainer.appendChild(inviteEmbed);

console.log('JavaScript code has ran !');