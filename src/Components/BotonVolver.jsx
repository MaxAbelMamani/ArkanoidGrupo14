import volver from '../assets/sprites/boton-de-volver.png'

class BotonVolver {
    constructor(escena){
        this.escenaRelacionada = escena;
    }

    preload(){
        this.escenaRelacionada.load.image('botonVolver', volver);
    }

    create(posX, posY){
        this.botonVolver = this.escenaRelacionada.add.image(posX, posY, 'botonVolver').setInteractive();
        this.botonVolver.setScale(0.1);
        this.botonVolver.on('pointerdown', ()=>{
            this.escenaRelacionada.scene.start('gameStart');
        });
    }
}

export default BotonVolver;