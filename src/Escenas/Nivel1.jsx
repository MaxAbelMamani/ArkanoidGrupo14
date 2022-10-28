import React from 'react'
import Phaser from 'phaser'

//Importando Imagenes
import background from '../assets/sprites/background.jpg'

//Importando componentes
import marcadorGame from '../Components/marcadorGame.jsx'
import vidasGame from '../Components/vidasGame.jsx'
import Bloques from '../Components/Bloques.jsx'
import Paleta from '../Components/Paleta.jsx'
import Bola from '../Components/Bola.jsx'
import BotonVolver from '../Components/BotonVolver.jsx';

class Nivel1 extends (React.Component, Phaser.Scene) {
    constructor(){
        super({ key: 'nivel1'});
        this.nivel = 1;
    }

    init(){
        this.marcador = new marcadorGame(this);
        this.vida = new vidasGame(this);
        this.bloques = new Bloques(this);
        this.paleta = new Paleta(this);
        this.bola = new Bola(this);
        this.botonVolver = new BotonVolver(this);
    }

    preload(){
        this.load.image('background',background);
        this.paleta.preload();
        this.bola.preload();
        this.bloques.preload();
        this.botonVolver.preload();
    }

    create(){
        //Gestiona las las coliciones de las paredes del mundo
        //El valor false representa a la pared inferior la cual esta no tendra colision con el onbjeto bola
        this.physics.world.setBoundsCollision(true, true, true, false);
        this.crearFondo();
        this.marcador.create();
        this.vida.create();
        this.bloques.crearBloques(this.nivel);
        this.paleta.crearPaleta();
        this.bola.crearBola();
        this.botonVolver.create(750, 550);
        //Gestiona las las coliciones entre la bola y la paleta
        this.physics.add.collider(this.bola.pelotaGame, this.paleta.paletaPlayer, this.colisionBolaPaleta, null, this);
        //Gestiona las las coliciones entre la bola y los bloques
        this.physics.add.collider(this.bola.pelotaGame, this.bloques.conjuntoBloques, this.colisionBolaBloque, null, this);

        this.cursors = this.input.keyboard.createCursorKeys();
        this.precionarTeclaEspacio = true; 
    }

    crearFondo(){
        this.add.image(400,300,'background');
    }

    colisionBolaBloque(bola, bloque){
        bloque.disableBody(true, true);
        this.marcador.incremenarPuntaje(10);
        if (this.bloques.conjuntoBloques.countActive() == 0) {
            this.scene.start('nivel2');
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
            this.paleta.paletaPlayer.setVelocityX(-500);
            if (this.bola.pelotaGame.getData('bolaPegada')) {
                this.bola.pelotaGame.setVelocityX(-500);
            }
        }else if (this.cursors.right.isDown) {
            this.paleta.paletaPlayer.setVelocityX(500);
            if (this.bola.pelotaGame.getData('bolaPegada')) {
                this.bola.pelotaGame.setVelocityX(500);
            }
        }else{
            this.paleta.paletaPlayer.setVelocity(0);
            if (this.bola.pelotaGame.getData('bolaPegada')) {
                this.bola.pelotaGame.setVelocityX(0);
            }
        }

        if (this.bola.pelotaGame.y > 600) {
            this.vida.decrementarVida(1);
            this.bola.pelotaGame.x = this.paleta.paletaPlayer.x;
            this.bola.pelotaGame.y = this.paleta.paletaPlayer.y - 40;
            this.bola.pelotaGame.setVelocity(0);
            this.bola.pelotaGame.setData('bolaPegada', true);
            this.precionarTeclaEspacio = true;
        }

        if (this.vida.vidas == 0) {
            this.mostrarGameOver();
        }

        if (this.cursors.space.isDown && this.precionarTeclaEspacio) {
            this.precionarTeclaEspacio = false;
            this.bola.pelotaGame.setVelocity(-75,-300);
            this.bola.pelotaGame.setData('bolaPegada', false);
        }
    }

    mostrarGameOver(){
        this.scene.start('gameOver');
    }

    mostrarCongratulations(){
        this.scene.start('congratulations');
    }
}

export default Nivel1;