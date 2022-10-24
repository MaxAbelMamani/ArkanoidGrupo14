import iniciar from '../assets/sprites/play.png'

export class BotonIniciar {
    constructor(escena){
        this.escenaRelacionada = escena;
    }

    preload(){
        this.escenaRelacionada.load.image('boton', iniciar);
    }

    create(){
        this.botonIniciar = this.escenaRelacionada.add.image(400, 230, 'boton').setInteractive();
        this.botonIniciar.on('pointerdown', ()=>{
            this.escenaRelacionada.scene.start('game');
        });
    }
}