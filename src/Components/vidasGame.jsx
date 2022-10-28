class vidasGame{
    constructor(escena){
        this.escenaRelacionada = escena;
        this.vidas = 3;
    }

    create(){
        this.vidaTexto = this.escenaRelacionada.add.text(650, 16, 'VIDAS: 3', {
            fontSize: '20px',
            fill: '#FFF',
            fontFamily: 'verdana, ararial, sans-serif'
        });
    }

    decrementarVida(vidas){
        this.vidas -= vidas;
        this.vidaTexto.setText('VIDAS: ' + this.vidas);
    }
}

export default vidasGame;