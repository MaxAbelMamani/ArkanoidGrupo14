import reiniciar from '../assets/sprites/boton-de-reiniciar.png'

export class BotonReiniciar {
    constructor(escena){
        this.escenaRelacionada = escena;
    }

    preload(){
        this.escenaRelacionada.load.image('botonReiniciar', reiniciar);
    }

    create(){
        this.botonReiniciar = this.escenaRelacionada.add.image(400, 350, 'botonReiniciar').setInteractive();
        this.botonReiniciar.on('pointerdown', ()=>{
            this.escenaRelacionada.scene.start('nivel1');
        });
    }
}