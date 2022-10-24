import React from 'react';
import { BotonReiniciar } from '../Funciones/BotonReiniciar';
import gameOver from '../assets/sprites/gameOver.png'

class GameOver extends (React.Component, Phaser.Scene) {
    constructor(){
        super({ key: 'gameOver'});
        this.botonReiniciar = new BotonReiniciar(this);
    }

    preload(){
        this.load.image('gameOver',gameOver);
        this.botonReiniciar.preload();
    }

    create(){
        this.add.image(400,240,'background');
        this.botonReiniciar.create();
        this.gameOverImage = this.add.image(400,90, 'gameOver');
    }
}

export default GameOver;