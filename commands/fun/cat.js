const Discord = require("discord.js");
const superagent = require("superagent");

module.exports = {
    name: "cat",
    category: "fun",
    description: "Gives you a picture of a cat",
    run: async (client, message, args) => {


    let {body} = await superagent
    .get(`http://aws.random.cat//meow`);

    let dogEmbed = new Discord.RichEmbed()
    .setColor("#ff9900")
    .setTitle("Cat :cat:")
    .setImage(body.file);

message.channel.send(dogEmbed);

}

}