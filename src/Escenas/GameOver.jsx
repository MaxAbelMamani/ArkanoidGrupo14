import React from 'react';
//Importando botones para volver y reiniciar
import BotonReiniciar from '../Components/BotonReiniciar.jsx';
import BotonVolver from '../Components/BotonVolver.jsx';

import gameOver from '../assets/sprites/gameOver.png'
import backgrondLost from '../assets/sprites/background-lost.jpg'

class GameOver extends (React.Component, Phaser.Scene) {
    constructor(){
        super({ key: 'gameOver'});
        this.botonReiniciar = new BotonReiniciar(this);
        this.botonVolver = new BotonVolver(this);
    }

    preload(){
        this.load.image('backgroundLost', backgrondLost);
        this.load.image('gameOver',gameOver);
        this.botonReiniciar.preload();
        this.botonVolver.preload();
    }

    create(){
        this.add.image(400,240,'backgroundLost');
        this.botonReiniciar.create();
        this.botonVolver.create(450, 400);
        this.gameOverImage = this.add.image(400,160, 'gameOver');
    }
}

export default GameOver;