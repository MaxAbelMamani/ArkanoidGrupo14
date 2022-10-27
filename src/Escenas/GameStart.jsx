import React from 'react';

//Imoportando clase boton iniciar
import { BotonIniciar } from '../Components/BotonIniciar.jsx';

//IMportando Imagenes
import background from '../assets/sprites/background.jpg'
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
        this.botonIniciar.create('nivel1', 200,300);
        this.botonIniciar.create('nivel2', 400,300);
        this.botonIniciar.create('nivel3', 600,300);
        this.add.image(400,160, 'gameName');
    }
}

export default GameStart;