import React from 'react';
//Importando botones para volver y reiniciar
import BotonReiniciar from '../Components/BotonReiniciar.jsx';
import BotonVolver from '../Components/BotonVolver.jsx';

import backgrondWin from '../assets/sprites/background-win.png'
import victory from '../assets/sprites/victory.png'

class Congratulations extends (React.Component, Phaser.Scene) {
    constructor(){
        super({ key: 'congratulations'});
        this.botonReiniciar = new BotonReiniciar(this);
        this.botonVolver = new BotonVolver(this);
    }

    preload(){
        this.load.image('backgroundWin', backgrondWin);
        this.load.image('victory',victory);
        this.botonReiniciar.preload();
        this.botonVolver.preload();
    }

    create(){
        this.add.image(400,300,'backgroundWin');
        this.botonReiniciar.create();
        this.botonVolver.create(450, 400);
        this.victoryImage = this.add.image(400,160, 'victory');
    }
}

export default Congratulations;