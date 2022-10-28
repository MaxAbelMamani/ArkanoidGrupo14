import React from 'react';

//Imoportando clase boton iniciar
import BotonIniciar from '../Components/BotonIniciar.jsx';

//IMportando Imagenes
import background from '../assets/sprites/background.jpg'
import gameName from '../assets/sprites/gameName.png'
import gameLevel1 from '../assets/sprites/gameLevel1.png'
import gameLevel2 from '../assets/sprites/gameLevel2.png'
import gameLevel3 from '../assets/sprites/gameLevel3.png'

class GameStart extends (React.Component, Phaser.Scene){
    constructor(){
        super({ key: 'gameStart'});
        this.botonIniciar = new BotonIniciar(this);
    }

    preload(){
        this.load.image('background',background);
        this.botonIniciar.preload();
        this.load.image('gameName',gameName);
        this.load.image('gameLevel1',gameLevel1);
        this.load.image('gameLevel2',gameLevel2);
        this.load.image('gameLevel3',gameLevel3);
    }

    create(){
        
        this.add.image(400,240,'background');
        this.botonIniciar.create('nivel1', 200,300);
        this.botonIniciar.create('nivel2', 400,300);
        this.botonIniciar.create('nivel3', 600,300);
        this.add.image(400,160, 'gameName');
        this.puntajeTexto = this.add.text(160, 370, 'NIVEL 1', {
            fontSize: '20px',
            fill: '#FFF',
            fontFamily: 'verdana, ararial, sans-serif',
        });
        this.nombreNivel2 = this.add.text(360, 370, 'NIVEL 2', {
            fontSize: '20px',
            fill: '#FFF',
            fontFamily: 'verdana, ararial, sans-serif',
        });
        this.nombreNivel3 = this.add.text(560, 370, 'NIVEL 3', {
            fontSize: '20px',
            fill: '#FFF',
            fontFamily: 'verdana, ararial, sans-serif',
        });
    }
}

export default GameStart;