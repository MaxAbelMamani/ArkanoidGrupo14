import paleta from '../assets/sprites/paleta.png'

class Paleta {
    constructor(escena){
        this.escenaRelacionada = escena;
        this.paletaPlayer;
    }

    preload(){
        this.escenaRelacionada.load.image('paleta',paleta);
    }

    crearPaleta(){
        this.paletaPlayer = this.escenaRelacionada.physics.add.image(400,450, 'paleta').setImmovable();
        this.paletaPlayer.body.allowGravity = false;
        this.paletaPlayer.setCollideWorldBounds(true);
    }
}

export default Paleta;