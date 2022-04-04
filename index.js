//@ts-nocheck

const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Dank Grinder Running !!");
});

app.listen(3000);

const schedule = require("node-schedule");
var colors = require("colors");
var convertTime = require("convert-time");
require("dotenv").config();
const Discord = require("discord.js-self");
const client = new Discord.Client();
var moment = require("moment-timezone");

client.on("ready", () => {
  console.log(`\nLogged in as ` + client.user.tag.underline.brightRed);
  client.user.setStatus("invisible");
});

var channelid = process.env.channelID;
var storageac = process.env.storageAccount;

var begin = moment.tz(process.env.startTime, "H", process.env.timezone);
var beginTime = begin.utc().format("H");

var end = moment.tz(process.env.endTime, "H", process.env.timezone);
var ceaseTime = end.utc().format("H");

if (parseInt(process.env.endTime) > 24) {
  console.log("You cannot put a value above 24 in endTime !".red);
  return;
}

if (parseInt(process.env.startTime) > 24) {
  console.log("You cannot put a value above 24 in startTime !".red);
  return;
}

if (parseInt(process.env.startTime) >= parseInt(process.env.endTime)) {
  console.log(
    `Invald Format !!!\nEnd Time should be greater than start time !!`.red
      .underline.bold
  );
  return;
}

console.log(
  "Start Time : ".red +
    convertTime(`${process.env.startTime}:00`, "hh:XX A".blue)
);
console.log(
  "End Time : ".red + convertTime(`${process.env.endTime}:00`, "hh:XX A".blue)
);
console.log(
  "Runtime : ".red,
  `${process.env.endTime - process.env.startTime} hrs`.blue
);

///////////////////
//// Auto Buy ////
/////////////////

if (process.env.autoBuy === "true") {
  console.log("\nAuto Buy Running !".magenta);
  client.on("message", (message) => {
    if (
      message.author.id !== "270904126974590976" &&
      message.channel.id !== channelid
    )
      return;

    if (message.content.indexOf("You don't have a shovel") > -1) {
      const dankChannel = client.channels.cache.get(channelid);
      dankChannel.startTyping();
      dankChannel.send("pls with 25000");
      setTimeout(function () {
        dankChannel.send("pls buy shovel");
      }, 3000);
      console.log(">".green + " bought" + " a shovel !".yellow);
      dankChannel.stopTyping();
    }

    if (message.content.indexOf("You don't have a hunting rifle") > -1) {
      const dankChannel = client.channels.cache.get(channelid);
      dankChannel.startTyping();
      dankChannel.send("pls with 25000");
      setTimeout(function () {
        dankChannel.send("pls buy rifle");
      }, 3000);
      console.log(">".green + " bought" + " a hunting rifle !".yellow);
      dankChannel.stopTyping();
    }

    if (message.content.indexOf("You don't have a fishing pole") > -1) {
      const dankChannel = client.channels.cache.get(channelid);
      dankChannel.startTyping();
      dankChannel.send("pls with 25000");
      setTimeout(function () {
        dankChannel.send("pls buy pole");
      }, 3000);
      console.log(">".green + " bought" + " a fishing rod !".yellow);
      dankChannel.stopTyping();
    }
  });
}

/////////////////////////
//// Grind Commands ////
///////////////////////

setInterval(() => {
  global.now;
  global.now = new Date().getUTCHours();
  global.datetime = moment(new Date());
}, 5000);

setTimeout(function () {
  /*
 Pls dep all
*/
  setInterval(() => {
    if (global.now >= beginTime && global.now <= ceaseTime) {
      const dankChannel = client.channels.cache.get(channelid);
      dankChannel.startTyping();
      dankChannel.send("pls dep all");
      dankChannel.stopTyping();
      console.log(">".green + " sent" + " pls dep all".red);
    } else {
      console.log(">".green + " Resting...".red);
      console.log(
        global.datetime.tz(process.env.timezone).format("DD/MM # hh:mm A").green
      );
    }
  }, 60000);
  /*
 Pls hunt
*/
  setInterval(() => {
    if (global.now >= beginTime && global.now <= ceaseTime) {
      const dankChannel = client.channels.cache.get(channelid);
      dankChannel.startTyping();
      dankChannel.send("pls hunt");
      console.log(">".green + " sent" + " pls hunt".red);
      dankChannel.stopTyping();
    } else {
      console.log(">".green + " Resting...".red);
      console.log(
        global.datetime.tz(process.env.timezone).format("DD/MM # hh:mm A").green
      );
    }
  }, 41000);
  /*
 Pls dig
*/
  setInterval(() => {
    if (global.now >= beginTime && global.now <= ceaseTime) {
      const dankChannel = client.channels.cache.get(channelid);
      dankChannel.startTyping();
      dankChannel.send("pls dig");
      console.log(">".green + " sent" + " pls dig".red);
      dankChannel.stopTyping();
    } else {
      console.log(">".green + " Resting...".red);
      console.log(
        global.datetime.tz(process.env.timezone).format("DD/MM # hh:mm A").green
      );
    }
  }, 42000);
  /*
 Pls fish
*/
  setInterval(() => {
    if (global.now >= beginTime && global.now <= ceaseTime) {
      const dankChannel = client.channels.cache.get(channelid);
      dankChannel.startTyping();
      dankChannel.send("pls fish");
      console.log(">".green + " sent" + " pls fish".red);
      dankChannel.stopTyping();
    } else {
      console.log(">".green + " Resting...".red);
      console.log(
        global.datetime.tz(process.env.timezone).format("DD/MM # hh:mm A").green
      );
    }
  }, 43000);
  /*
 Pls beg
*/
  setInterval(() => {
    if (global.now >= beginTime && global.now <= ceaseTime) {
      const dankChannel = client.channels.cache.get(channelid);
      dankChannel.startTyping();
      dankChannel.send("pls beg");
      console.log(">".green + " sent" + " pls beg".red);
      dankChannel.stopTyping();
    } else {
      console.log(">".green + " Resting...".red);
      console.log(
        global.datetime.tz(process.env.timezone).format("DD/MM # hh:mm A").green
      );
    }
  }, 46000);

  /////////////////////
  //// Auto Daily ////
  ///////////////////

  schedule.scheduleJob("5 0 * * *", () => {
    const dankChannel = client.channels.cache.get(channelid);
    dankChannel.startTyping();
    dankChannel.send("pls daily");
    console.log(">".green + " sent" + " pls daily".red);
    dankChannel.stopTyping();
  });

  /*setInterval(() => { 
   if (global.now >= beginTime && global.now <= ceaseTime) {
  const dankChannel = client.channels.cache.get(channelid)
     dankChannel.startTyping()
       dankChannel.send('pls with all')
       console.log(">".green + " sent"+" pls with all".red)
     setTimeout(function(){
       dankChannel.send("pls trade 99999 <@" +storageac+ ">")
       client.users.fetch(storageac).then((user) => {
       console.log(">".green + ` transferred` + ` 99,999 DC`.red + ` to ` + `${user.tag}`.underline.red)
       })
     }, 3000)
     dankChannel.stopTyping();
   }else{
     console.log('>'.green + " Resting...".red)
     console.log(global.datetime.tz(process.env.timezone).format('DD/MM # hh:mm A').green)
     }
  }, 200000);*/

  ////////////////////
  //// Auto Sell ////
  //////////////////

  if (process.env.autoSell === "true") {
    console.log("Auto Sell Running !".magenta);
    schedule.scheduleJob("0 */3 * * *", () => {
      if (global.now >= beginTime && global.now <= ceaseTime) {
        const dankChannel = client.channels.cache.get(channelid);
        const array = [
          "aplus",
          "ant",
          "bean",
          "cookie",
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
          "garbage",
          "bread",
          "worm",
          "ladybug",
          "stickbug",
          "spider",
          "banhammer",
          "note",
          "energydrink",
          "memepills",
          "lawdegree",
          "vaccine",
          "beaker",
          "ectoplasm",
          "fossil",
          "tree",
          "meteorite",
          "starfragment",
        ];
        let index = 0;

        function showNext() {
          dankChannel.send(`pls sell ${array[index++]} all`);
          if (index < array.length) {
            setTimeout(showNext, 6000);
          }
        }
        showNext();

        dankChannel.stopTyping();
        console.log("Sold all the Sellable items".red);
      } else {
        console.log(">".green + " Resting...".red);
        console.log(
          global.datetime.tz(process.env.timezone).format("DD/MM # hh:mm A")
            .green
        );
      }
    });
  }
}, 10000);

client.login(process.env.token);
