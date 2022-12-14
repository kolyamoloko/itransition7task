import Express from "express";
import http from "http";
import { startSocketServer } from "./socket.js";

const app = Express();
const server = http.createServer(app);
const port = process.env.PORT || 4000;

app.use("/", Express.static("client"));
app.get("/ping", (req, res) => {
	res.status(200).send({ ping: "Pong!" });
});

server.listen(port, () => console.log(`Listening on port ${port}`));

startSocketServer(server);
