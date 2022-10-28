import reiniciar from '../assets/sprites/boton-de-reiniciar.png'

class BotonReiniciar {
    constructor(escena){
        this.escenaRelacionada = escena;
    }

    preload(){
        this.escenaRelacionada.load.image('botonReiniciar', reiniciar);
    }

    create(){
        this.botonReiniciar = this.escenaRelacionada.add.image(350, 400, 'botonReiniciar').setInteractive();
        this.botonReiniciar.setScale(0.1);
        this.botonReiniciar.on('pointerdown', ()=>{
            this.escenaRelacionada.scene.start('nivel1');
        });
    }
}

export default BotonReiniciar;