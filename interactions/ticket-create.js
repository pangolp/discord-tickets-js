require("dotenv").config();
const discord = require('discord.js');

const guildTicketCategoryId = process.env.TICKET_CATEGORY_ID;
const moderationRole = process.env.MODERATION_ROLE;

const ticketCloseButton = new discord.ActionRowBuilder().addComponents(
    new discord.ButtonBuilder()
    .setCustomId('ticket-close')
    .setLabel('Cerrar ticket')
    .setStyle(2)
    .setEmoji('🔐')
)

async function main(interaction) {
    const {user, guild} = interaction;
    const ticketType = interaction.values[0];

    const tickets = guild.channels.cache.filter(channel => channel.parentId == guildTicketCategoryId);

    if (tickets.some(ticket => ticket.topic === user.id)) return interaction.reply({ content: '¡Ya tienes un ticket abierto!', ephemeral: true })

    interaction.reply({ content: '- Tu ticket está siendo creado...', ephemeral: true })
    .then(() => {
        guild.channels.create({
            name: ticketType+'-'+user.username.slice(0, 25-ticketType.length),
            topic: user.id,
            type: discord.ChannelType.GuildText,
            parent: guildTicketCategoryId,
            permissionOverwrites: [
                { id: interaction.guild.roles.everyone, deny: [discord.PermissionsBitField.Flags.ViewChannel]},
                { id: moderationRole, allow: [discord.PermissionsBitField.Flags.ViewChannel]},
                { id: interaction.user.id, allow: [discord.PermissionsBitField.Flags.ViewChannel]}
            ]
        })
        .then (channel => {
            interaction.editReply({ content: `- Tu ticket ha sido creado: ${channel}`});
            channel.send(
                {
                    content: `Bienvenido ${user},\n\nEl staff estará contigo en unos instantes.`,
                    components: [ticketCloseButton]
                }
            )
        })
    })
}

module.exports = main;
