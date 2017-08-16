# WhereAmI
Location based Andriod app that allows you to share your location with others.

## Overview
What i basically did was first set up a website with a simple php script listening for http requests. Second, I created an Andriod app whcih will send out an http request to the php server which will then update to my current location so you will be able see my location on the website. 

## Inspiration
The inspiration for this app/project is my mom actually lol. Every time when i go out with my friends and i'm not home at a certain time she will always send me text messaages/call me to make sure i'm okay. So instead of her always calling me, i figured i could build an app which i can use to send out my current location to a server and that server will take my location and send it to a front end application (website). Thus, whenever i'm out she can just check the website to figure out where am i at. 

## To Do 
- SSH tunnel between client and server
<s>- Decent GUI for app (i know it's gonna be really simple but should still look decent)</s>
- Websocket Communication between client and server (Currently using http)
- Keep existing data (i.e at least the last 5 locations i've been)

