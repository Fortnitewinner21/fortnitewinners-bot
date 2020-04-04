const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  const reason = args.splice(1, args.length).join(' ') || `None specified.`;
  if (!rMember) return message.reply("Please mention a valid user of this server");

    let jailed_role = message.guild.roles.find(role => role.name === 'Jailed');

    if (rMember.roles.has(jailed_role.id)) return message.reply(`<@${rMember.id}> is already jailed.`);
    await (rMember.removeRoles(rMember.roles).then(console.log).catch(console.error)); 
    await (rMember.addRole(jailed_role.id));
    try {
    const embed = new Discord.RichEmbed()
  .setColor(0x00AE86)
  .setTimestamp()
  .setDescription(`**Action:** Jail\n**Target:** ${rMember.username}#${rMember.discriminator}\n**Staff Member:** ${message.author.username}#${message.author.discriminator}\n**Reason:** ${reason}`)
  await  message.channel.send(embed);
} catch(e) { 
      message.channel.send(e);
    }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 6,
};

exports.help = {
    name: 'jail',
    description: 'Jails the specified user!',
    usage: 'jail [user] [reason]'
};
