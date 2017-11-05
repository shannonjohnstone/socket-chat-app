# socket-chat-app

### Socket IO chat application (server and UI)

This is a self learning exercise project for learning Socket.io and improving node skills.

Future plan is to get this project into a position that it could be used as a base for similar Socket projects in the future

This document will be update as the project progresses.


## Current state of project
The current state of this project is initial setup of base folder structure *very* basic express server.

Current contains a public folder for the UI and a server folder for the server and API.

**Current UI** is a basic index.html file just for rendering purposes

**Current server** is a basic express server the serves a index.html page from the public folder

**Current Socket.io** basic communication between frontend clients using the same URL, tested by firing `socket.emit` events from within the browser console

## Setup

*Note: I am using npm for installation of package as there seems to be an issue installing socket.io with yarn*

- clone repository to computer
- run `npm install`
- `npm start`

Doing the above setup will get the project on your computer and running locally at the location of

`http://localhost:3000`

#### nodemon
This project is using nodemon so when you run the project the server will automatically take on the changes and restart.

## Socket.io setup

#### Server
We require the socket.io package in our server/index.js file and initialise with the following

```js
const socketIO = require('socket.io')
const server = http.createServer(app)
const io = socketIO(server)
```
Now doing the above in our server we can go to http://localhost:3000/socket.io/socket.io.js and now the home of the socket.io script in our app

#### Frontend UI
Now in the UI, in our case at the moment that being public/index.html we will add socket.io

```html
<script src="/socket.io/socket.io.js"></script>
```

The location being used in this script is relative to our server

## Deployment (Heroku)

Current this application is deployed to Heroku. The location of this deployment is as follows

**Deployed**

https://rocky-bastion-89122.herokuapp.com/

#### Managing releases
General process of this project at the moment going from development to production is as follows;

- makes changes locally
- push changes to master
- create release and deploy to Heroku

In the near future there will be a pipeline setup for this project that will be as follows;

- makes changes locally from own branch
- push changes into development branch
- push development branch to development environment
- create release and push to production

Some commands that may help with this process;

```sh
git ci -am 'New build'
git tag -a v0.4-beta -m 'Release, minor text change, update slugignore'
git push --tags && git push
```

```sh
git ci -am 'New build' && git tag -a v0.4-beta -m 'Release, minor text change, update slugignore' && git push --tags && git push
```
