import React from 'react';
//Importando botones para volver y reiniciar
import BotonReiniciar from '../Components/BotonReiniciar.jsx';
import BotonVolver from '../Components/BotonVolver.jsx';

import gameOver from '../assets/sprites/gameOver.png'
import backgrondLost from '../assets/sprites/background-lost.jpg'
import gameOverSound from '../assets/sounds/gameOver.mp3'

class GameOver extends (React.Component, Phaser.Scene) {
    constructor(){
        super({ key: 'gameOver'});
        this.botonReiniciar = new BotonReiniciar(this);
        this.botonVolver = new BotonVolver(this);
    }

    preload(){
        this.load.image('backgroundLost', backgrondLost);
        this.load.image('gameOver',gameOver);
        this.load.audio('gameOverSound', gameOverSound);
        this.botonReiniciar.preload();
        this.botonVolver.preload();
    }

    create(){
        this.add.image(400,300,'backgroundLost');
        this.botonReiniciar.create();
        this.botonVolver.create(450, 400);
        this.gameOverImage = this.add.image(400,160, 'gameOver');
        this.gameOverSound = this.sound.add('gameOverSound');
        this.gameOverSound.play();
    }
}

export default GameOver;