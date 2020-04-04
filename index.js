const { Client, Collection } = require("discord.js");
const { config } = require("dotenv");
const fs = require("fs");
const { RichEmbed } = require("discord.js");

const client = new Client({
    disableEveryone: true
});

const prefix = ".";

client.commands = new Collection();
client.aliases = new Collection();

client.categories = fs.readdirSync("./commands/");

config({
    path: __dirname + "/.env"
});

["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.on("ready", () => {
    console.log(`Hi, ${client.user.username} is now online!`);

    client.user.setPresence({
        status: "online",
        game: {
            name: "over everyone || .help",
            type: "WATCHING"
        }
    }); 
});

client.on ("message", (message) => {

    msg = message.content.toLocaleLowerCase();

    if (message.author.bot) return;

    mention = message.mentions.users.first();

    if (msg.startsWith (prefix + "send")) {
        if (mention == null) { return; }
        message.delete();
        mentionMessage = message.content.slice (8);
        mention.sendMessage (mentionMessage);
        message.channel.send ("Done!");

    
    }
})

client.on('guildMemberAdd', member =>{

    const channel = member.guild.channels.find(channel => channel.name === "new-users");
    if(!channel) return;

    channel.send(`Welcome to server, ${member}, Please read the rules!:tada:`)

});

client.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");

    switch(args[0]){

        case "poll":
            const Embed = new RichEmbed()
            .setColor(0xFFC300)
            .setTitle("Initiate Poll")
            .setDescription(".poll to initiate a simple yes or no poll");

            if(!args[1]){
                message.channel.send(Embed);
                break;
            }

            let msgArgs = args.slice(1).join(" ");

            message.channel.send("📋" + "**" + msgArgs + "**").then(messageReaction => {
                messageReaction.react("👍");
                messageReaction.react("👎");
                message.delete(5000).catch(console.error);
            });
        break;
    }
})

client.on("message", async message => {
  

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    if (command) 
        command.run(client, message, args);
});

client.login(process.env.TOKEN);