# Simple DankGrinder
It is a simple Dank Memer Grinder bot which can **bypass Account Bans** but self bots are against discord's ToS. So, Use it at your own risk.

# Setup

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
   - a
   - **In the storageAccount** field put the userid of the account on which you want to transfer your dank coins ! Put selfbot's id if you dont want to transfer !


 - Go to Resources tab
 ![Resources](https://i.imgur.com/ts5IDy1.png)

- Turn off web ( npm start ) and turn one worker ( node index.js )
![Web dyno](https://i.imgur.com/PQSuy44.png)

- Now go to more > view logs to check if it is working fine
![logs](https://i.imgur.com/ycbUPsJ.png)

- It should look something like this
![done](https://i.imgur.com/sGVK6nZ.png)
