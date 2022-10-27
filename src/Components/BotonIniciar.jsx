//IMportando imagen de boton play
import iniciar from '../assets/sprites/play.png'

export class BotonIniciar {
    constructor(escena){
        this.escenaRelacionada = escena;
    }

    preload(){
        this.escenaRelacionada.load.image('botonIniciar', iniciar);
    }

    create(nivel, posX, posY){
        this.botonIniciar = this.escenaRelacionada.add.image(posX, posY, 'botonIniciar').setInteractive();
        this.botonIniciar.on('pointerdown', ()=>{
            this.escenaRelacionada.scene.start(nivel);
        });
    }
}