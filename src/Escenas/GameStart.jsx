import React from 'react';
import { BotonIniciar } from '../Funciones/BotonIniciar';

//IMportando Imagenes
import background from '../assets/sprites/background.png'

class GameStart extends (React.Component, Phaser.Scene){
    constructor(){
        super({ key: 'gameStart'});
        this.botonIniciar = new BotonIniciar(this);
    }

    preload(){
        this.load.image('background',background);
        this.botonIniciar.preload();
    }

    create(){
        this.add.image(400,240,'background');
        this.botonIniciar.create();
    }
}

export default GameStart;