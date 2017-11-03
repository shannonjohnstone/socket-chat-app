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

## Setup

*Note: I am using yarn in the instructions steps below, some people might have issue install socket.io using yarn. If this is the case please use npm instead for all steps below*

- clone repository to computer
- run `yarn install`
- `yarn start`

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
