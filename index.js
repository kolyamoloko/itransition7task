import Express from "express";
import http from "http";
import { startSocketServer } from "./socket.js";

const app = Express();
const server = http.createServer(app);
const port = process.env.PORT || 3000;

// Serves frontend html at base route http://localhost:3000
app.use("/", Express.static("client"));
app.get("/ping", (req, res) => {
	res.status(200).send({ ping: "Pong!" });
});

server.listen(port, () => console.log(`Listening on port ${port}`));

startSocketServer(server);


/* 
const PORT = process.env.PORT || 5000;
const express = require('express');

const app = express();

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile('publick/index.html');
})
const server = app.listen(process.env.PORT || 5000)

const io = require('socket.io')(server);

io.on('connection', function(socket){
    console.log('Client connected')
    socket.on('send_message', function(name,value){
        io.emit('send_all_message', name, value);
    })
}); */