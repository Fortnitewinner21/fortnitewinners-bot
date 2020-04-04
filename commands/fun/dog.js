const Discord = require("discord.js");
const superagent = require("superagent");

module.exports = {
    name: "dog",
    category: "fun",
    description: "Shows you a picture of a dog",
    run: async (client, message, args) => {

    let {body} = await superagent
    .get(`https://random.dog/woof.json`);
    
    let dogEmbed = new Discord.RichEmbed()
    .setColor("#ff9900")
    .setTitle("Dog :dog:")
    .setImage(body.url);
    
    message.channel.send(dogEmbed);

}

}