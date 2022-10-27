import React from 'react'
import Phaser from 'phaser'
import { useState } from 'react'

//IMportando Imagenes
import background from '../assets/sprites/background.png'
import paleta from '../assets/sprites/paleta.png'
import pelota from '../assets/sprites/bola.png'
import bloque1 from '../assets/sprites/1.png'
import bloque2 from '../assets/sprites/2.png'
import bloque3 from '../assets/sprites/3.png'
import bloque4 from '../assets/sprites/4.png'

//IMportando Funciones
import marcadorGame from '../Components/marcadorGame.jsx'
import vidasGame from '../Components/vidasGame'

class Game extends (React.Component, Phaser.Scene) {
    constructor(){
        super({ key: 'game'});
    }

    init(){
        this.marcador = new marcadorGame(this);
        this.vida = new vidasGame(this);
    }

    preload(){
        this.load.image('background',background);
        this.load.image('paleta',paleta);
        this.load.image('bola',pelota);
        this.load.image('bloque1',bloque1);
        this.load.image('bloque2',bloque2);
        this.load.image('bloque3',bloque3);
        this.load.image('bloque4',bloque4);

    }

    create(){
        //Gestiona las las coliciones de las paredes del mundo
        //El valor false representa a la pared inferior la cual esta no tendra colision con el onbjeto bola
        this.physics.world.setBoundsCollision(true, true, true, false);

        this.add.image(400,240,'background');

        this.marcador.create();
        this.vida.create();

        this.bloques = this.physics.add.staticGroup({
            key: ['bloque1', 'bloque2', 'bloque3', 'bloque4'],
            frameQuantity: 10,
            gridAlign: {
                width: 10,
                height: 4,
                cellWidth: 67,
                cellHeight: 34,
                x: 112,
                y: 100
            }
        });

        //PALETA
        this.paleta = this.physics.add.image(400,450, 'paleta').setImmovable();
        this.paleta.body.allowGravity = false;
        this.paleta.setCollideWorldBounds(true);

        //PELOTA
        this.bola = this.physics.add.image(400, 420, 'bola');
        this.bola.setCollideWorldBounds(true);
        this.bola.setData('bolaPegada', true);

        this.physics.add.collider(this.bola, this.paleta, this.colisionBolaPaleta, null, this);
        this.physics.add.collider(this.bola, this.bloques, this.colisionBolaBloque, null, this);


        this.bola.setBounce(1);

        this.cursors = this.input.keyboard.createCursorKeys();
        this.precionarTeclaEspacio = true; 
    }

    colisionBolaBloque(bola, bloque){
        bloque.disableBody(true, true);
        this.marcador.incremenarPuntaje(10);
        if (this.bloques.countActive() == 0) {
            this.mostrarCongratulations();
        }
    }

    colisionBolaPaleta(bola, paleta){
        this.marcador.incremenarPuntaje(1);
        let impactoRelativo = bola.x - paleta.x;
        console.log(impactoRelativo);
        if (impactoRelativo < 0.1 && impactoRelativo > -0.1) {
            bola.setVelocityX(Phaser.Math.Between(-10,10));
        }else{
            bola.setVelocityX(10 * impactoRelativo);
        }
    }

    update(){
        if (this.cursors.left.isDown) {
            this.paleta.setVelocityX(-500);
            if (this.bola.getData('bolaPegada')) {
                this.bola.setVelocityX(-500);
            }
        }else if (this.cursors.right.isDown) {
            this.paleta.setVelocityX(500);
            if (this.bola.getData('bolaPegada')) {
                this.bola.setVelocityX(500);
            }
        }else{
            this.paleta.setVelocity(0);
            if (this.bola.getData('bolaPegada')) {
                this.bola.setVelocityX(0);
            }
        }

        if (this.bola.y > 480) {
            console.log('fin');
            this.vida.decrementarVida(1);
            this.bola.x = this.paleta.x;
            this.bola.y = this.paleta.y - 40;
            this.bola.setVelocity(0);
            this.bola.setData('bolaPegada', true);
            this.precionarTeclaEspacio = true;
        }

        if (this.vida.vidas == 0) {
            this.mostrarGameOver();
        }

        if (this.cursors.space.isDown && this.precionarTeclaEspacio) {
            this.precionarTeclaEspacio = false;
            this.bola.setVelocity(-75,-300);
            this.bola.setData('bolaPegada', false);
        }
    }

    mostrarGameOver(){
        this.scene.start('gameOver');
    }

    mostrarCongratulations(){
        this.scene.start('congratulations');
    }
}

export default Game;