const Discord = require("discord.js");

const client = new Discord.Client();

const config = require("./config.json");

client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on("guildCreate", guild => {
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on("guildDelete", guild => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}


client.on("message", async message => {
  
  if(message.author.bot) return;
  
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  
  if(command === "ping") {
    const m = await message.channel.send("ok boomer u want my ping");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }

if(command === "nukelala") {
const id = args.join(" ");
const nuke = new Discord.RichEmbed()
.setImage('https://cdn.discordapp.com/attachments/667557010669305876/725023215134572614/2Q.png%27')
.setTitle("U GOT NUKE HAHAHHAHA LOL");
client.users.get(id).send("LOL GET NUKED")
client.users.get(id).send("LOL GET NUKED")
client.users.get(id).send("LOL GET NUKED")
client.users.get(id).send("LOL GET NUKED")
client.users.get(id).send("LOL GET NUKED")
client.users.get(id).send("LOL GET NUKED")
client.users.get(id).send("LOL GET NUKED")
client.users.get(id).send("LOL GET NUKED")
client.users.get(id).send("LOL GET NUKED")
client.users.get(id).send("LOL GET NUKED")
client.users.get(id).send("LOL GET NUKED")
client.users.get(id).send("LOL GET NUKED")
client.users.get(id).send("LOL GET NUKED")
client.users.get(id).send("LOL GET NUKED")
client.users.get(id).send("LOL GET NUKED")
client.users.get(id).send("LOL GET NUKED")
client.users.get(id).send("LOL GET NUKED")
client.users.get(id).send("LOL GET NUKED")
client.users.get(id).send("LOL GET NUKED")
client.users.get(id).send(nuke);
}




  if(command === "assets") {
    if(!message.member.roles.some(r=>["Chairman"].includes(r.name)) )
    return message.reply("Sorry, you don't have permissions to use this!");
      const Att = new Discord.RichEmbed()
      .setImage("https://media.discordapp.net/attachments/718205026434154536/718858879647088660/dce9411b6324e5330adf151639efefad.png");
      const SCI = new Discord.RichEmbed()
      .setAuthor('Self Check-In', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
      .addField("_ _", "**Product:** Self Check-In")
      .addField("_ _", "**Price:** 130")
      .addField("_ _", "**Status:** Development - Pictures unavailable")
      .setImage("https://imgur.com/a/YJKJFm")
      .setTimestamp()
      .setFooter("Volt")
      .setAuthor("Self Check-In", "https://media.discordapp.net/attachments/718205026434154536/718604310434414632/image0.png");
      message.channel.send(Att)
      message.channel.send(SCI)
  }

  if(command === "eval") {
    const args = message.content.split(" ").slice(1);
    if(!message.member.roles.some(r=>["eval"].includes(r.name)) ) return;
    try {
      const code = args.join(" ");
      let evaled = eval(code);
 
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
 
      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }

  if(command === "8ball") {
    if(!args[2]) return message.reply ("Please ask a question!")
    let replies =  ["Yeah sure, that's great!", "No,that's bad", "Don't even think about it, just no nitwit.", "I don't know or I'm unsure retry", "Stop disturbing me ask again later", "Wait, I think that's true! Ur right noob! You're good atm!"]

    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(1).join(" ");

    let ballembed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor("#FF9900")
    .addField("Question", question)
    .addField("Answer", replies[result])

    message.channel.send(ballembed)
  }

  if(command === "botinfo") {
    let infoE = new Discord.RichEmbed()
    .setTitle("BotInfo")
    .setColor("#FF9900")
    .setAuthor(message.author.username)
    .setDescription("Info about your bot")
    .addField("Created by", "Volt, bot section")
    .addField("Created in", "March")
    .addField("Bot Name", "Volt");
    message.channel.send(infoE)
  }

  if(command === 'embed') {
    const sayMessage = args.join(" ");
        message.delete().catch(O_o=>{}); 
    let customE = new Discord.RichEmbed()
    .setDescription(sayMessage)
    .setColor("#0000")
    .setFooter(`VoltBots | Shouted by ${message.author.username}`)
    message.channel.send(customE)
    }

    if(command === 'roles') {
      if(!message.member.roles.some(r=>["Chairman"].includes(r.name)) )
    return message.reply("Sorry, you don't have permissions to use this!");
    message.guild.roles.array().forEach((r) => message.channel.send(r.name))
    }



  if(command === "airports") {
    if(!message.member.roles.some(r=>["Chairman"].includes(r.name)) )
    return message.reply("Sorry, you don't have permissions to use this!");
    const Att = new Discord.RichEmbed()
      .setImage("https://media.discordapp.net/attachments/718205026434154536/718870899952058449/d532ca864114a861e9afcd43a7efceae.png");
      const NGA = new Discord.RichEmbed()
      .setAuthor('Nagoya Airport', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
      .addField("_ _", "**Product:** Nagoya Airport")
      .addField("_ _", "**Price:** 250")
      .addField("_ _", "**Status:** On-Sale")
      .setImage("")
      .setTimestamp()
      .setFooter("Volt")
      .setAuthor("Nagoya Airport", "https://media.discordapp.net/attachments/718205026434154536/718604310434414632/image0.png");
      message.channel.send(Att)
      message.channel.send(NGA)
  }
  
  if(command === "say") { 
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{});
    message.channel.send(sayMessage);
  }
});

client.login(config.token);