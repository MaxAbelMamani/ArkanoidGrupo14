//IMportando imagen de boton play
import iniciar from '../assets/sprites/boton-de-play.png'

class BotonIniciar {
    constructor(escena){
        this.escenaRelacionada = escena;
    }

    preload(){
        this.escenaRelacionada.load.image('botonIniciar', iniciar);
    }

    create(nivel, posX, posY){
        this.botonIniciar = this.escenaRelacionada.add.image(posX, posY, 'botonIniciar').setInteractive();
        this.botonIniciar.setScale(0.1);
        this.botonIniciar.on('pointerdown', ()=>{
            this.escenaRelacionada.scene.start(nivel);
        });
        this.botonIniciar.setScale(0.7);
    }
}

export default BotonIniciar;