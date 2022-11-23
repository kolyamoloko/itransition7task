import { Server } from "socket.io";

export default function startSocketServer(){
    console.log("todo");
    const io = new Socket();
    io.on("connection", (socket) => {
        console.log(socket.id);
    });
}