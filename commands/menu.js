const discord = require('discord.js')

module.exports = async (message) => {

    const embed = {
        title: 'Panel de soporte',
        description: 'Abre un ticket de soporte haciendo click en una opción del menu de aqui abajo! 🎉',
        color: 0x5865F2,
        image: {
            url: 'https://tecnosoluciones.com/wp-content/uploads/2023/02/soporte-remoto.png'
        }
    };

    const menu = new discord.ActionRowBuilder().addComponents(
        new discord.StringSelectMenuBuilder()
        .setPlaceholder('Abre un ticket de soporte.')
        .setMaxValues(1)
        .setMinValues(1)
        .setCustomId('ticket-create')
        .setOptions(
            [
                {
                    label: 'Soporte',
                    emoji: '💡',
                    description: 'Abrir un ticket de soporte',
                    value: 'soporte'
                },
                {
                    label: 'Reportes',
                    emoji: '📢',
                    description: 'Reportar algo.',
                    value: 'reporte'
                },
                {
                    label: 'Donaciones',
                    emoji: '⭐',
                    description: 'Apoyar a la comunidad',
                    value: 'donacion'
                }
            ]
        )
    )

    const ticketPanelChannelId = process.env.CHANNEL_ID;
    await message.delete();
    message.client.channels.fetch(ticketPanelChannelId)
    .then(channel => channel.send({
        embeds: [embed],
        components: [menu]
    }))

};
