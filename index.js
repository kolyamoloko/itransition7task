import Express from "express";
import http from "http";
import startSocketServer from "./socket.js";

const app = Express();
const server = http.createServer(app);
const port = 3000;


//http://localhost:3000/
app.use("/", Express.static("client"));

app.get("/ping",(req, res) => {
    req.statusCode(200).json({ping: "Pong!"});
} )

server.listen(port, () => {
    console.log("server running on port " + port)
});