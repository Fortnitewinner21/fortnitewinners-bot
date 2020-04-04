module.exports = {
    name: "poll",
    category: "moderation",
    description: "Starts a poll",
    run: async (client, message, args) => {

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
}
}
