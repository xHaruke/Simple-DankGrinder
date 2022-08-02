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
const { Client } = require("discord.js-selfbot-v13");
const client = new Client();
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

var begin_m = moment.tz("00", "mm", process.env.timezone);
var beginTime_m = begin_m.utc().format("mm");

var end_m = moment.tz("00", "mm", process.env.timezone);
var endTime_m = end_m.utc().format("mm");

console.log(
  "Start Time : ".red +
    convertTime(`${process.env.startTime}:${beginTime_m}`, "hh:mm A".blue)
);
console.log(
  "End Time : ".red +
    convertTime(`${process.env.endTime}:${endTime_m}`, "hh:mm A".blue)
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
  client.on("messageCreate", (message) => {
    if (
      message.author.id !== "270904126974590976" &&
      message.channel.id !== channelid
    )
      return;

    if (!message.mentions.has(client.user.id)) return;

    if (message.content.indexOf("You don't have a shovel") > -1) {
      const dankChannel = client.channels.cache.get(channelid);
      dankChannel.sendTyping();
      dankChannel.send("pls with 25000");
      setTimeout(function () {
        dankChannel.send("pls buy shovel");
      }, 3000);
      console.log(">".green + " bought" + " a shovel !".yellow);
    }

    if (message.content.indexOf("You don't have a hunting rifle") > -1) {
      const dankChannel = client.channels.cache.get(channelid);
      dankChannel.sendTyping();
      dankChannel.send("pls with 25000");
      setTimeout(function () {
        dankChannel.send("pls buy rifle");
      }, 3000);
      console.log(">".green + " bought" + " a hunting rifle !".yellow);
    }

    if (message.content.indexOf("You don't have a fishing pole") > -1) {
      const dankChannel = client.channels.cache.get(channelid);
      dankChannel.sendTyping();
      dankChannel.send("pls with 25000");
      setTimeout(function () {
        dankChannel.send("pls buy pole");
      }, 3000);
      console.log(">".green + " bought" + " a fishing rod !".yellow);
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

client.on("ready", () => {
  setTimeout(function () {
    /*
 Pls dep all
*/
    setInterval(() => {
      if (global.now >= beginTime && global.now <= ceaseTime) {
        const dankChannel = client.channels.cache.get(channelid);
        dankChannel.sendTyping();
        dankChannel.send("pls dep all");

        console.log(">".green + " sent" + " pls dep all".red);
      } else {
        console.log(">".green + " Resting...".red);
        console.log(
          global.datetime.tz(process.env.timezone).format("DD/MM # hh:mm A")
            .green
        );
      }
    }, 60000);
    /*
 Pls hunt
*/
    setInterval(() => {
      if (global.now >= beginTime && global.now <= ceaseTime) {
        const dankChannel = client.channels.cache.get(channelid);
        dankChannel.sendTyping();
        dankChannel.send("pls hunt");
        console.log(">".green + " sent" + " pls hunt".red);
      } else {
        console.log(">".green + " Resting...".red);
        console.log(
          global.datetime.tz(process.env.timezone).format("DD/MM # hh:mm A")
            .green
        );
      }
    }, 41000);
    /*
 Pls dig
*/
    setInterval(() => {
      if (global.now >= beginTime && global.now <= ceaseTime) {
        const dankChannel = client.channels.cache.get(channelid);
        dankChannel.sendTyping();
        dankChannel.send("pls dig");
        console.log(">".green + " sent" + " pls dig".red);
      } else {
        console.log(">".green + " Resting...".red);
        console.log(
          global.datetime.tz(process.env.timezone).format("DD/MM # hh:mm A")
            .green
        );
      }
    }, 42000);
    /*
 Pls fish
*/
    setInterval(() => {
      if (global.now >= beginTime && global.now <= ceaseTime) {
        const dankChannel = client.channels.cache.get(channelid);
        dankChannel.sendTyping();
        dankChannel.send("pls fish");
        console.log(">".green + " sent" + " pls fish".red);
      } else {
        console.log(">".green + " Resting...".red);
        console.log(
          global.datetime.tz(process.env.timezone).format("DD/MM # hh:mm A")
            .green
        );
      }
    }, 43000);
    /*
 Pls beg
*/
    setInterval(() => {
      if (global.now >= beginTime && global.now <= ceaseTime) {
        const dankChannel = client.channels.cache.get(channelid);
        dankChannel.sendTyping();
        dankChannel.send("pls beg");
        console.log(">".green + " sent" + " pls beg".red);
      } else {
        console.log(">".green + " Resting...".red);
        console.log(
          global.datetime.tz(process.env.timezone).format("DD/MM # hh:mm A")
            .green
        );
      }
    }, 46000);

    //////////////////////
    /// Auto Transfer ///
    ////////////////////

    client.on("messageCreate", async (message) => {
      if (message.author.id != storageac) return;

      if (message.content.toLowerCase().startsWith("-trade")) {
        message.channel.sendTyping();
        message.channel.send("pls with all");
        setTimeout(function () {
          message.channel.sendTyping();
          message.channel.send("pls taxcalc all");
        }, 1000);

        setTimeout(function () {
          message.channel.messages.fetch({ limit: 1 }).then((messages) => {
            let lastMessage = messages.first();

            if (lastMessage.author.id != "270904126974590976") return;
            if (!lastMessage.embeds[0]) return;

            let lastMsgContent = lastMessage.embeds[0].description;

            let balance = lastMsgContent.match(
              /(?<= send \*\*`⏣ )(.*)(?=`\*\*\*)/gm
            );

            let balanceStr = balance.toString();

            message.channel.send(
              "pls trade " + balanceStr + ` <@${storageac}>`
            );
          });

          setTimeout(function () {
            message.channel.messages.fetch({ limit: 1 }).then((messages) => {
              let lastMessage = messages.first();

              if (lastMessage.author.id != "270904126974590976") return;
              if (!lastMessage.embeds[0]) return;

              if (!lastMessage.embeds[0].title) return;

              if (!lastMessage.mentions.has(client.user.id)) return;

              if (
                lastMessage.embeds[0].title.startsWith("Pending Confirmation")
              ) {
                let custom_id =
                  lastMessage.components[0].components[1].customId;

                lastMessage.clickButton(custom_id);
              }
            }, 1000);
          }, 2000);
        }, 2000);
      }
    });

    /////////////////////
    //// Auto Daily ////
    ///////////////////

    schedule.scheduleJob("5 0 * * *", () => {
      const dankChannel = client.channels.cache.get(channelid);
      dankChannel.sendTyping();
      dankChannel.send("pls daily");
      console.log(">".green + " sent" + " pls daily".red);
    });

    ////////////////////
    //// Auto Sell ////
    //////////////////

    if (process.env.autoSell === "true") {
      console.log("\nAuto Sell Running !".magenta);
      client.on("messageCreate", async (message) => {
        if (
          message.author.id !== "270904126974590976" &&
          message.channel.id !== channelid
        )
          return;

        if (!message.embeds[0]) return;

        if (!message.embeds[0].title) return;

        if (!message.mentions.has(client.user.id)) return;

        if (
          message.embeds[0].title.startsWith("Pending Confirmation") &&
          message.embeds[0].description.startsWith(
            "Would you like to sell all your"
          )
        ) {
          let custom_id = message.components[0].components[1].customId;

          await message.clickButton(custom_id);
          console.log("Sold all the Sellable items".red);
        }
      });
      schedule.scheduleJob("0 */3 * * *", () => {
        if (global.now >= beginTime && global.now <= ceaseTime) {
          const dankChannel = client.channels.cache.get(channelid);

          dankChannel.sendTyping();
          dankChannel.send("pls sell");
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
});

client.login(process.env.token);
