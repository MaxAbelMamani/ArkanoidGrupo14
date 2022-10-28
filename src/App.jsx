import Phaser from "phaser";
import { useEffect, useState } from "react";
//Importando escenas
import Nivel1 from "./Escenas/Nivel1.jsx";
import Nivel2 from "./Escenas/Nivel2.jsx";
import Nivel3 from "./Escenas/Nivel3.jsx";
import GameOver from "./Escenas/GameOver.jsx";
import Congratulations from "./Escenas/Congratulations.jsx";
import GameStart from "./Escenas/GameStart.jsx";


function App() {
    const [listo, setListo] = useState(false);
    useEffect(()=>{

        const configuracion = {
            scale:{
                autoCenter: Phaser.Scale.CENTER_BOTH,
                width: 800,
                height:600
            }
        }

        const escenas = [GameStart ,Nivel1, Nivel2, Nivel3, GameOver, Congratulations];
        const crearEscena = Scene => new Scene(configuracion);
        const iniciarEscena = () => escenas.map(crearEscena);

        const config = {
            type: Phaser.AUTO,
            ...configuracion,
            physics: {
                default: "arcade",
                arcade: {
                    gravity: {y: 0},
                    debug:false
                },
            },
            scene: iniciarEscena(),
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
