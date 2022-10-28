class marcadorGame{
    constructor(escena){
        this.escenaRelacionada = escena;
        this.puntaje = 0;
    }

    create(){
        this.puntajeTexto = this.escenaRelacionada.add.text(16, 16, 'PUNTOS: 0', {
            fontSize: '20px',
            fill: '#ffff',
            fontFamily: 'Impact, fantasy'
        });
    }

    incremenarPuntaje(puntos){
        this.puntaje += puntos;
        this.puntajeTexto.setText('PUNTOS: ' + this.puntaje);
    }
}

export default marcadorGame;