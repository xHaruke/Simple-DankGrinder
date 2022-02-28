const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Dank Grinder Running !!')
})

app.listen(3000)

const schedule = require('node-schedule')
var colors = require('colors');
var convertTime = require('convert-time');
const Discord = require("discord.js-self");
const client = new Discord.Client();
var moment = require('moment-timezone');
client.on("ready", () => {
  console.log(`Logged in as `+client.user.tag.underline.brightRed);
  client.user.setStatus('invisible')
});
var channelid = process.env.channelID
var storageac = process.env.storageAccount

var begin = moment.tz(process.env.startTime, "H", process.env.timezone);
var beginTime = begin.tz('Europe/London').format('H');

var end = moment.tz(process.env.endTime, "H", process.env.timezone);
var ceaseTime = end.tz('Europe/London').format('H');

if (parseInt(process.env.endTime) > 24){
  console.log('You cannot put a value above 24 in endTime !'.red)
  return;
}

if (parseInt(process.env.startTime) > 24){
  console.log('You cannot put a value above 24 in startTime !'.red)
  return;
}

if (parseInt(process.env.startTime) >= parseInt(process.env.endTime)) {
  console.log (`Invald Format !!!\nEnd Time should be greater than start time !!`.red.underline.bold)
  return;
}

console.log('Start Time : '.red+ convertTime(`${process.env.startTime}:00`, 'hh:XX A'.blue))
console.log('End Time : '.red+ convertTime(`${process.env.endTime}:00`, 'hh:XX A'.blue))
console.log('Runtime : '.red,`${process.env.endTime - process.env.startTime} hrs`.blue)

client.on("message", (message) => {
  if(message.author.id === client.user.id) return;
  
// I Tried
  
/*  if(message.author.id === '270904126974590976' && message.type == "REPLY" && message.mentions.has(client.user.id) && message.content.toLowerCase() === "you don't have a fishing pole, you need to go buy one. you're not good enough to catch them with your hands."){
    message.channel.startTyping()
    message.channel.send("pls with 25000")
    console.log(">".green + " withdrew"+" 25000".red)
        setTimeout(function(){
      message.channel.send("pls buy pole")
      console.log(">".green + " bought"+"fishing pole".blue)
      }, 3000)
    message.channel.stopTyping()
  }

    if(message.author.id === '270904126974590976' && message.type == "REPLY" && message.mentions.has(client.user.id) && message.content.toLowerCase() === "you don't have a shovel, you need to go buy one. i'd hate to let you dig with your bare hands."){
    message.channel.startTyping()
    message.channel.send("pls with 25000")
    console.log(">".green + " withdrew"+" 25000".red)
        setTimeout(function(){
      message.channel.send("pls buy shovel")
      console.log(">".green + " bought"+"shovel".blue)
      }, 3000)
    message.channel.stopTyping()
  }

    if(message.author.id === '270904126974590976' && message.type == "REPLY" && message.mentions.has(client.user.id) && message.content.toLowerCase() === "you don't have a hunting rifle, you need to go buy one. you're not good enough to shoot animals with your bare hands... i hope."){
    message.channel.startTyping()
    message.channel.send("pls with 25000")
    console.log(">".green + " withdrew"+" 25000".red)
        setTimeout(function(){
      message.channel.send("pls buy rifle")
      console.log(">".green + " bought"+"rifle".blue)
      }, 3000)
    message.channel.stopTyping()
  }
*/

  /*if (message.content.toLowerCase().includes("dig")) {
    message.channel.startTyping()
    message.channel.send("pls dig");
    console.log(">".green + " sent"+" pls dig".red)
    message.channel.stopTyping();
  }
  if (message.content.toLowerCase().includes("fish")){
    message.channel.startTyping()
    message.channel.send("pls fish")
        console.log(">".green + " sent"+" pls fish".red)
        message.channel.stopTyping();
  }
    if (message.content.toLowerCase().includes("hunt")){
      message.channel.startTyping()
      message.channel.send("pls hunt")
        console.log(">".green + " sent"+" pls hunt".red)
        message.channel.stopTyping();
    }
    if (message.content.toLowerCase().includes("daily")){
      message.channel.startTyping()
      message.channel.send("pls daily")
      console.log(">".green + " sent"+" pls daily".red)
      message.channel.stopTyping();
  }
     if (message.content.toLowerCase().includes("beg")){
      message.channel.startTyping()
      message.channel.send("pls beg")
        console.log(">".green + " sent"+" pls beg".red)
        message.channel.stopTyping();
    } */
  
});
 

setInterval(()=>{
  global.now;
  global.now = new Date().getHours();
  global.datetime = moment(new Date());
}, 5000)

setTimeout(function(){

 setInterval(() => { 
  if (global.now >= beginTime && global.now <= ceaseTime) {
 const channelss = client.channels.cache.get(channelid)
    channelss.startTyping()
    channelss.send('pls dep all')
    channelss.stopTyping();
    console.log(">".green + " sent"+" pls dep all".red)
  }else{
    console.log('>'.green + " Resting...".red)
  console.log(global.datetime.tz(process.env.timezone).format('DD/MM # hh:mm A').green)
    }
 }, 60000);

 setInterval(() => { 
  if (global.now >= beginTime && global.now <= ceaseTime) {
 const channelss = client.channels.cache.get(channelid)
    channelss.startTyping()
    channelss.send("pls hunt")
    console.log(">".green + " sent"+" pls hunt".red)
    channelss.stopTyping();
  }else{
    console.log('>'.green + " Resting...".red)
  console.log(global.datetime.tz(process.env.timezone).format('DD/MM # hh:mm A').green)
    }
 }, 41000);

 setInterval(() => { 
  if (global.now >= beginTime && global.now <= ceaseTime) {
 const channelss = client.channels.cache.get(channelid)
    channelss.startTyping()
    channelss.send("pls dig");
    console.log(">".green + " sent"+" pls dig".red)
    channelss.stopTyping();
  }else{
    console.log('>'.green + " Resting...".red)
  console.log(global.datetime.tz(process.env.timezone).format('DD/MM # hh:mm A').green)
    }
 }, 42000);

 setInterval(() => { 
  if (global.now >= beginTime && global.now <= ceaseTime) {
 const channelss = client.channels.cache.get(channelid)
    channelss.startTyping()
    channelss.send("pls fish")
    console.log(">".green + " sent"+" pls fish".red)
    channelss.stopTyping();
  }else{
    console.log('>'.green + " Resting...".red)
  console.log(global.datetime.tz(process.env.timezone).format('DD/MM # hh:mm A').green)
    }
 }, 43000);

 setInterval(() => { 
  if (global.now >= beginTime && global.now <= ceaseTime) {
 const channelss = client.channels.cache.get(channelid)
    channelss.startTyping()
    channelss.send("pls beg")
    console.log(">".green + " sent"+" pls beg".red)
    channelss.stopTyping();
  }else{
    console.log('>'.green + " Resting...".red)
  console.log(global.datetime.tz(process.env.timezone).format('DD/MM # hh:mm A').green)
    }
 }, 46000);

 schedule.scheduleJob('5 0 * * *', () => { 
  const channelss = client.channels.cache.get(channelid)
     channelss.startTyping()
     channelss.send("pls daily")
     console.log(">".green + " sent"+" pls daily".red)
     channelss.stopTyping();
  });

 /*setInterval(() => { 
  if (global.now >= beginTime && global.now <= ceaseTime) {
 const channelss = client.channels.cache.get(channelid)
    channelss.startTyping()
      channelss.send('pls with all')
      console.log(">".green + " sent"+" pls with all".red)
    setTimeout(function(){
      channelss.send("pls trade 99999 <@" +storageac+ ">")
      client.users.fetch(storageac).then((user) => {
      console.log(">".green + ` transferred` + ` 99,999 DC`.red + ` to ` + `${user.tag}`.underline.red)
      })
    }, 3000)
    channelss.stopTyping();
  }else{
    console.log('>'.green + " Resting...".red)
    console.log(global.datetime.tz(process.env.timezone).format('DD/MM # hh:mm A').green)
    }
 }, 200000);*/
if (process.env.autoSell === 'true'){
console.log('AutoSell Running !'.magenta)
 schedule.scheduleJob('0 */3 * * *', () => { 
    if (global.now >= beginTime && global.now <= ceaseTime) {
 const channelss = client.channels.cache.get(channelid)
      const array = [
        "aplus",
        "ant",
        "bean",
        "cookie",
        "corncob",
        "corndog",
        "potato",
        "skunk",
        "rabbit",
        "duck",
        "deer",
        "boar",
        "dragon",
        "seaweed",
        "fish",
        "rarefish",
        "exoticfish",
        "jellyfish",
        "legendaryfish",
        "kraken",
        "junk",
        "garbage",
        "trash",
        "bread",
        "worm",
        "ladybug",
        "stickbug",
        "spider",
        "banhammer",
        "musicalnote",
        "energydrink",
        "memepills",
        "lawdegree",
        "vaccine",
        "beakerofsusfluid",
        "ectoplasm"
      ];
let index = 0; 

function showNext() {
    channelss.send(`pls sell ${array[index++]} all`);
    if (index < array.length) {
        setTimeout(showNext, 6000);
    }
}
showNext();
      
    channelss.stopTyping();
      console.log('Sold all the Sellable items'.red)
  }else{
    console.log('>'.green + " Resting...".red)
    console.log(global.datetime.tz(process.env.timezone).format('DD/MM # hh:mm A').green)
    }
 })
}

}, 10000)


client.login(process.env.token);
