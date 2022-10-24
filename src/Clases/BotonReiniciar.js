import reiniciar from '../assets/sprites/restart.png'

export class BotonReiniciar {
    constructor(escena){
        this.escenaRelacionada = escena;
    }

    preload(){
        this.escenaRelacionada.load.image('boton', reiniciar);
    }

    create(){
        this.botonReiniciar = this.escenaRelacionada.add.image(400, 230, 'boton').setInteractive();
        this.botonReiniciar.on('pointerdown', ()=>{
            this.escenaRelacionada.scene.start('game');
        });
    }
}