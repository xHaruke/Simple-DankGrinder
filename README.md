# Simple DankGrinder
It is a simple Dank Memer Grinder bot which can **bypass Account Bans** but self bots are against discord's ToS. So, Use it at your own risk.

## Features

- Customizable Runtime
- Bypass Banning
- Easy Setup
- ~~Auto-Transfer Dank Coins~~
- Auto Daily
- 24/7
- Auto Sell
- Auto Deposit Money
- Auto Buy Tools

### Supported Grind Command :
- Pls dig
- Pls hunt
- Pls beg
- Pls fish

# Setup 

## Heroku ##

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/Haruke-Sensei/Simple-DankGrinder)

How to deploy?

 - Click the Deploy to Heroku button above to setup and put in the
   required fields.
   ![.env](https://i.imgur.com/bQ60foF.png)
   - To get channel id : https://youtu.be/NLWtSHWKbAI
   
   - **In the `endTime`** field put end time when the bot will stop running. Use 24hr format and put the hour part only e.g. 19 ( recommended time between start and end time is 12hrs. If you put more than that the bot might get banned ! )

   - **In the `startTime`** field put start time when the bot will start running. Use 24hr format and put the hour part only e.g. 7 ( recommended time between start and end time is 12hrs. If you put more than that the bot might get banned ! )
   
   - To get `Token` : https://youtu.be/YEgFvgg7ZPI

   - In the `timezone` field put your timezone ! To get timezone : https://webbrowsertools.com/timezone ; e.g. Asia/Calcutta

   - **In the `storageAccount`** field put the userid of the account on which you want to transfer your dank coins ! Put selfbot's id if you dont want to transfer !

   - **In the `autoSell`** field put whether you want to auto sell your items or not ! You can only put 'true' or 'false'; e.g. true

   - **In the `autoBuy`** field put whether you want to auto buy tools or not ! You can put put 'true' or 'false'; e.g. true


 - Go to Resources tab
 ![Resources](https://i.imgur.com/ts5IDy1.png)

- Turn off web ( npm start ) and turn one worker ( node index.js )
![Web dyno](https://i.imgur.com/PQSuy44.png)

- Now go to more > view logs to check if it is working fine                                         
![logs](https://i.imgur.com/ycbUPsJ.png)

- It should look something like this                                                                     
![done](https://i.imgur.com/sGVK6nZ.png)

## Repl.it

[![Run on Repl.it](https://repl.it/badge/github/SudhanPlayz/Discord-MusicBot)](https://repl.it/github/Haruke-Sensei/Simple-DankGrinder)

How to set on repl?

- Click the run on repl.it button above

- Go to the Secrets menu 

![secrets](https://i.imgur.com/ObcCfIp.png)

- Enter the follow values :
  - `token`
  - `timezone`
  - `channelID`
  - `storageAccount`
  - `startTime`
  - `endTime`
  - `autoSell`
  - `autoBuy`

- How to get all these values?
  - `token` : https://youtu.be/YEgFvgg7ZPI ; e.g. OTQ1OTI5MjExNDIyNjAxMjE2.YhXTcQ.f8W2BsaUHjksadhyuWfq-O9BH022PhWQ
  
  - `timezone` : https://webbrowsertools.com/timezone ; e.g. Asia/Calcutta
  
  - `channelID` : https://youtu.be/NLWtSHWKbAI ; e.g. 942352837587922947 ; This is the channel in which bot will send messages !

  - `storageAccount` : ID of account to which you want to send your dank coins ; Put selfbot's id if you dont want to transfer !
  
  - `startTime` : Time when the bot will start running ; Use 24 hr format and put only the hour value ; e.g. 7 ; Keep the difference between startTime and endTime to 12 hrs or the bot may get banned !!
  
  - `endTime` : Time when the bot will stop running ; Use 24 hr format and put only the hour value ; e.g. 19 ; Keep the difference between startTime and endTime to 12 hrs or the bot may get banned !!
  
  - `autoSell` : Whether you want to auto sell your items or not ! You can only put 'true' or 'false'; e.g. true

  - `autoBuy` : Whether you want to auto buy tools or not ! You can put put 'true' or 'false'; e.g. true

- In the end it should look something like this :                                   
![env](https://i.imgur.com/iHe0EXC.png) 

- Click run and copy this url          
![express](https://i.imgur.com/AoI9Pca.png)

- Now go to https://uptimerobot.com/dashboard and click on add a new monitor   
![monitor](https://i.imgur.com/KPXu2GJ.png)

- Select the monitor type to HTTP(s) > Type a name for your bot > put the copied url in there > create monitor
![uptime](https://i.imgur.com/1cYXNjR.png)

### You are now done !! 

# Don't forget to ⭐ if you liked it !
