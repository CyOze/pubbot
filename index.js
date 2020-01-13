//ATTENTION : Après chaque changement de ligne de code, n'oubliez pas d'enregistrer ce fichier et de retaper dans le terminal : node index.js
//Bot made by R4V3N.exe
const Discord = require('discord.js');

const client = new Discord.Client();

//Connection
client.on("ready", () => {
  console.log("Prêt à vous servir !");
});

//TIPS : Si "Prêt à vous servir s'affiche dans la console, votre bot est en ligne.
// Message MP
client.on('guildMemberAdd', member => {
  member.createDM().then(channel => {
    console.log("Pub sended");
    const exampleEmbed = new Discord.RichEmbed()
	.setColor('#33bdcc')
	.setTitle('Fortnite Skin Service')
	.setURL('https://shoppy.gg/@Cy0ze')
	.setDescription("Une envie d'acheter des skins Fortnite pas cher ou encore Sauver Le Monde (STW) à pris réduit !?")
	.addField('Rejoins moi sur Shoppy !', 'Rend toi sur https://shoppy.gg/@Cy0ze pour acheter des skins et autre par cher !')
	.setTimestamp()
	.setFooter('Fortnite Skin Service', 'https://image.fnbr.co/outfit/5dd52b4a3f9cec37c4d1376e/featured.png');
    return channel.send(exampleEmbed);
    
  }).catch(console.error);
})


//ATTENTION : Evitez de mettre le token de votre compte personnel, il sera ban rapidement.
//CONSEIL : Vous pouvez envoyer + de pub en MP si c'est le token de votre compte, car il enverra votre pub aux nouveaux arrivants de
//TOUS LES SERVEURS DANS LESQUELS VOUS VOUS TROUVEZ !

//TOKEN
client.login("NjY2MzA0NjUxMTE2ODA2MTQ1.XhyPZg.EQqEjob9aZR2bJDetZsGPrEPtV4");
