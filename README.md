# WhereAmI
Location based Android app that allows you to share your location with others.

## Overview
What i basically did was first set up a website with a simple php script listening for http requests. Second, I created an Android app which will send out an http request to the php server which will then update to my current location so you will be able see my location on the website. 

## Usage
From the Android side, you can send out your location coordinates. After sending out your coordinates, you can see your current and past locations. As shown below
![ScreenShot](https://github.com/ShallyBanh/WhereAmI/blob/master/ServerSideStuff/DesktopExample.PNG)
The blue markers indicates that that is a past location and the red marker indicates the current location you are at/most recent location. 

## Inspiration
The inspiration for this app/project is my mom actually lol. Every time when i go out with my friends and i'm not home at a certain time she will always send me text messaages/call me to make sure i'm okay. So instead of her always calling me, i figured i could build an app which i can use to send out my current location to a server and that server will take my location and send it to a front end application (website). Thus, whenever i'm out she can just check the website to figure out where am i at. 

## To Do 
- SSH tunnel between client and server
- <s>Decent GUI for app (i know it's gonna be really simple but should still look decent)</s>
- Websocket Communication between client and server (Currently using http)
- <s>Keep existing data (i.e at least the last 5 locations i've been)</s>
- <s> Refactor android side </s>
- Front end using react
- Setup something better than php i.e node.js backend server to catch post requests instead

