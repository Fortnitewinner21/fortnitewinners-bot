module.exports = {
    name: "invite",
    aliases: ["i"],
    category: "info",
    description: "Give you a bot invite",
    run: async (client, message, args) => {
        const msg = await message.channel.send(`Loading Invite`);

        msg.edit(`Here!
        Bot invite = https://discordapp.com/api/oauth2/authorize?client_id=657490129749016588&permissions=8&scope=bot`);
    }
}