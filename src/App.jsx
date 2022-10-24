import Phaser from "phaser";
import { useEffect, useState } from "react";
//Importando escenas
import Game from "../Escenas/Game.jsx";
import GameOver from "../Escenas/GameOver.jsx";
import Congratulations from "../Escenas/Congratulations";
import GameStart from "../Escenas/GameStart.jsx";


function App() {
  const [listo, setListo] = useState(false);
    useEffect(()=>{
        //ancho del juego
        const width = 800;
        //alto del juego
        const height = 480;

        const config = {
            type: Phaser.AUTO,
            width: width,
            height: height,
            physics: {
                default: "arcade",
                arcade: {
                    debug:false
                },
            },
            scene: [GameStart ,Game, GameOver, Congratulations],
        };
        const game = new Phaser.Game(config);
        game.events.on("LISTO", setListo);
        return() => {
            setListo(false);
            game.destroy(true);
        }

    },[listo]);
}

export default App
