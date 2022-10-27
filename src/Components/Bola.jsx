import pelota from '../assets/sprites/bola.png'

class Bola {
    constructor(escena){
        this.escenaRelacionada = escena;
        this.pelotaGame;
    }

    preload(){
        this.escenaRelacionada.load.image('bola',pelota);
    }

    crearBola(){
        this.pelotaGame = this.escenaRelacionada.physics.add.image(400, 420, 'bola');
        this.pelotaGame.setCollideWorldBounds(true);
        this.pelotaGame.setData('bolaPegada', true);
        this.pelotaGame.setBounce(1);
    }
}

export default Bola;