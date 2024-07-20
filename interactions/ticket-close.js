async function main (interaction) {
    const {channel, guild} = interaction;

    const ticketOwner = await guild.members.fetch(channel.topic)
    .catch(err => console.log(err));

    interaction.reply('- Cerrando ticket...')
    .then(() => {
        channel.delete();
        if (ticketOwner) ticketOwner.send('Le avisamos de que su ticket de soporte ha sido cerrado.')
    })
}

module.exports = main;
