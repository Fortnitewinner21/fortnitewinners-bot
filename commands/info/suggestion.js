const Discord = require("discord.js")
const { RichEmbed } = require("discord.js");

module.exports = {
    name: "suggestion",
    category: "info",
    description: "Lets you make a suggestion",
    must: "#suggestions",
    usage: "<command | suggestion >",
    run: async (client, message, args) => {


    let reason = args.join(" ");

    let suggestionEmbed = new Discord.RichEmbed()
    .setDescription("Suggestion")
    .setColor("#6beb34")
    .addField("Suggested By", `${message.author}`)
    .addField("Time", message.createdAt)
    .addField("Suggestion", reason);

    let suggestionchannel = message.guild.channels.find(`name`, "suggestions");
    if(!suggestionchannel) return message.channel.send("Couldn't find suggestion channel.");

    message.delete().catch(O_o=>{});
    suggestionchannel.send(suggestionEmbed);


}

}