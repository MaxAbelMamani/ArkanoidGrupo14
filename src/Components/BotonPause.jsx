import pause from '../assets/sprites/boton-de-pausa.png'

class BotonPause {
    constructor(escena){
        this.escenaRelacionada = escena;
    }

    preload(){
        this.escenaRelacionada.load.image('botonPausa', pause);
    }

    create(){
        this.botonReiniciar = this.escenaRelacionada.add.image(750, 450, 'botonPausa').setInteractive();
        this.botonReiniciar.setScale(0.1);
        this.botonReiniciar.on('pointerdown', ()=>{
            this.escenaRelacionada.scene.pause();
        });
    }
}

export default BotonPause;