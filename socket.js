import { Server } from "socket.io";
import {Game, Player} from "./game.js"
export default function startSocketServer(server){
    console.log("todo");
    const io = new Server(server);
    const activeGames = new Map();
    io.on("connection", (socket) => {
        console.log(socket.id);
        socket.on("joinGame", ( username, code, callback ) => {
            let playerNum = -1;
            if(activeGames.has(code)){
                const thisGame = activeGames.get(code);
                if(!thisGame.player2){
                    callback(false);
                    return;
                }
                thisGame.player = new Player(socket.id, username, 2);
                playerNum = 2;
            } else {
                const newGame = new Game(new Player(socket.id, username ),
                null);
                activeGames.set(code, newGame);
                playerNum = 1;
            }
            socket.join(code);
            io.to(code).emit("updateGame", newGame.currentState);
            callback(true, playerNum);
        });
    });
}