# WhereAmI
A Location based application that allows you to share your location with others.

## Overview
Basically, by using an android app, you can send out your current location. And when you open a corresponding web app you can see the location that you sent out via the android app.

From the Android side, you can send out your location coordinates. And after sending it'll notify you with a popup:
![ScreenShot](https://github.com/ShallyBanh/WhereAmI/blob/master/ScreenShots/AndroidSide.png)
![ScreenShot](https://github.com/ShallyBanh/WhereAmI/blob/master/ScreenShots/AndroidSideSend.png)

After sending out your coordinates, you can see your current and past locations on the client side/web app. The blue markers on the map represent old locations you've been to and the red marker represents your most recent/current location.
![ScreenShot](https://github.com/ShallyBanh/WhereAmI/blob/master/ScreenShots/DesktopExample.png)

## Inspiration
The inspiration for this app/project is my mom actually lol. Every time when i go out with my friends and i'm not home at a certain time she will always send me text messages/call me to make sure i'm okay. So instead of her always calling me, i figured she could just stalk me by going on a web app.

## Usage

For the backend, just run the code in the "Backend" folder to get the android app installed and started.

For the frontend, you can just run code in the "Frontend" folder using
> npm start

or

> yarn start

Or you can see on https://shallywhereami.000webhostapp.com/ (Note: currently haven't pushed my code on here yet i only have the database setup/hosted soooooo maybe check if it's up first and then if it's not just run it locally (both ways produce the same result )).


## To Do
- SSH tunnel between client and server
- <s>Decent GUI for app (i know it's gonna be really simple but should still look decent)</s>
- Websocket Communication between client and server (Currently using http)
- <s>Keep existing data (i.e at least the last 5 locations i've been)</s>
- <s> Refactor android side </s>
- <s> Front end using react </s>
- <s> Setup a proper database for storage </s>
- Setup something better than php i.e node.js backend server to catch post requests instead
