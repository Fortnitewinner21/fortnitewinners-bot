const Discord = require("discord.js")

module.exports = {
    name: "8ball",
    category: "fun",
    description: "Acts like a 8ball",
    run: async (client, message, args) => {

if(!args[2]) return message.reply("Please ask a Full question!"); 
let replies = ["Yes.", "No.", "Mabye.", "Most likely.", "Ask again Later.", "Don't count on it.", "Yes - Definitely", "Cannot predict now", "Without a doubt", "Outlook not so good,", "As i see it, yes.", "You may rely on it", "Concentrate and ask again", "Reply hazy, try again!"];

let result = Math.floor((Math.random() * replies.length));
let question = args.slice(1).join(" ");

let ballembed = new Discord.RichEmbed()
.setAuthor(message.author.tag)
.setColor("#ff9900")
.addField("Question", question)
.addField("Answer", replies[result]);

message.channel.send(ballembed);

}

}