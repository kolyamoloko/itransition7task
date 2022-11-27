import Express from "express";
import http from "http";
import { startSocketServer } from "./socket.js";

const app = Express();
const server = http.createServer(app);
const port = 4000;

app.use("/", Express.static("client"));
app.get("/ping", (req, res) => {
	res.status(200).send({ ping: "Pong!" });
});

server.listen(process.env.PORT || 4000);

startSocketServer(server);
