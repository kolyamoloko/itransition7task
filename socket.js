import { Server } from "socket.io";
import {Game, Player} from "./game.js"
export default function startSocketServer(server){
    console.log("todo");
    const io = new Server(server);
    const activeGames = new Map();
    io.on("connection", (socket) => {
        console.log(socket.id);
        socket.on("joinGame", ( username, code, callback ) => {
            if(activeGames.has(code)){
                const thisGame = activeGames.get(code);
                if(!thisGame.player2){
                    callback(false);
                    return;
                }
            }
            const newGame = new Game(new Player(socket.id, username ));
            activeGames.set(code, newGame);
            socket.join(code);
            io.to(code).emit("updateGame", newGame.currentState);
        });
    });
}