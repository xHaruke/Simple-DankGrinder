# Simple DankGrinder
It is a simple Dank Memer Grinder bot which can **bypass Account Bans** but self bots are against discord's ToS. So, Use it at your own risk.

# Setup 

## Heroku ##

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/Haruke-Sensei/Simple-DankGrinder)

How to deploy?

 - Click the Deploy to Heroku button above to setup and put in the
   required fields.
   ![.env](https://i.imgur.com/btunBUk.png)
   - To get channel id : https://youtu.be/NLWtSHWKbAI
   
   - **In the endTime** field put end time when the bot will stop running. Use 24hr format and put the hour part only e.g. 19 ( recommended time between start and end time is 12hrs. If you put more than that the bot might get banned ! )

   - **In the startTime** field put start time when the bot will start running. Use 24hr format and put the hour part only e.g. 7 ( recommended time between start and end time is 12hrs. If you put more than that the bot might get banned ! )
   
   - To get Token : https://youtu.be/YEgFvgg7ZPI

   - In the timzone field put your timezone ! To get timezone : https://webbrowsertools.com/timezone ; e.g. Asia/Calcutta

   - **In the storageAccount** field put the userid of the account on which you want to transfer your dank coins ! Put selfbot's id if you dont want to transfer !


 - Go to Resources tab
 ![Resources](https://i.imgur.com/ts5IDy1.png)

- Turn off web ( npm start ) and turn one worker ( node index.js )
![Web dyno](https://i.imgur.com/PQSuy44.png)

- Now go to more > view logs to check if it is working fine                                         
![logs](https://i.imgur.com/ycbUPsJ.png)

- It should look something like this                                                                     
![done](https://i.imgur.com/sGVK6nZ.png)

## Setup on Repl.it ##

[![Run on Repl.it](https://repl.it/badge/github/SudhanPlayz/Discord-MusicBot)](https://repl.it/github/Haruke-Sensei/Simple-DankGrinder)

How to set on repl?

- Click the run on repl.it button above

- Go to the Secrets menu 

![secrets](https://i.imgur.com/ObcCfIp.png)

- Enter the follow values :
  - token
  - timezone
  - channelID
  - storageAccount
  - startTime
  - endTime

- How to get all these values?
  - token : https://youtu.be/YEgFvgg7ZPI ; e.g. 
  - timezone : https://webbrowsertools.com/timezone ; e.g. Asia/Calcutta
  - channelID : https://youtu.be/NLWtSHWKbAI ; e.g. 942352837587922947 ; This is the channel in which bot will send messages !
  - storageAccount : ID of account to which you want to send your dank coins ; Put selfbot's id if you dont want to transfer !
  - startTime : Time when the bot will start running ; Use 24 hr format and put only the hour value ; e.g. 7 ; Keep the difference between startTime and endTime to 12 hrs or the bot may get banned !!
  - endTime : Time when the bot will stop running ; Use 24 hr format and put only the hour value ; e.g. 19 ; Keep the difference between startTime and endTime to 12 hrs or the bot may get banned !!

- In the end it should look something like this :                                   
![env](https://i.imgur.com/BnhQ03d.png)

- Click run and copy this url          
![express](https://i.imgur.com/AoI9Pca.png)

- Now go to https://uptimerobot.com/dashboard and click add a new monitor   
![monitor](https://i.imgur.com/KPXu2GJ.png)

- Select the monitor type to HTTP(s) > Type a name for your bot > put the copied url in there > create monitor
![uptime](https://i.imgur.com/JdUghEu.png)

### You are now done !! ###

# Don't forget to ⭐ if you liked it !
