import React from 'react';
import { BotonReiniciar } from '../Components/BotonReiniciar.jsx';
import gameOver from '../assets/sprites/gameOver.png'
import backgrondLost from '../assets/sprites/background-lost.jpg'

class GameOver extends (React.Component, Phaser.Scene) {
    constructor(){
        super({ key: 'gameOver'});
        this.botonReiniciar = new BotonReiniciar(this);
    }

    preload(){
        this.load.image('backgroundLost', backgrondLost);
        this.load.image('gameOver',gameOver);
        this.botonReiniciar.preload();
    }

    create(){
        this.add.image(400,240,'backgroundLost');
        this.botonReiniciar.create();
        this.gameOverImage = this.add.image(400,160, 'gameOver');
    }
}

export default GameOver;