import React from 'react';

//Imoportando clase boton iniciar
import { BotonIniciar } from '../Clases/BotonIniciar.js';

//IMportando Imagenes
import background from '../assets/sprites/background.png'
import gameName from '../assets/sprites/gameName.png'

class GameStart extends (React.Component, Phaser.Scene){
    constructor(){
        super({ key: 'gameStart'});
        this.botonIniciar = new BotonIniciar(this);
    }

    preload(){
        this.load.image('background',background);
        this.botonIniciar.preload();
        this.load.image('gameName',gameName);
    }

    create(){
        this.add.image(400,240,'background');
        this.botonIniciar.create();
        this.add.image(400,160, 'gameName');
    }
}

export default GameStart;