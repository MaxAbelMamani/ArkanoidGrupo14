import bloque1 from '../assets/sprites/1.png'
import bloque2 from '../assets/sprites/2.png'
import bloque3 from '../assets/sprites/3.png'
import bloque4 from '../assets/sprites/4.png'

class Bloques {
    constructor(escena){
        this.escenaRelacionada = escena;
        this.conjuntoBloques;
    }

    preload(){
        this.escenaRelacionada.load.image('bloque1',bloque1);
        this.escenaRelacionada.load.image('bloque2',bloque2);
        this.escenaRelacionada.load.image('bloque3',bloque3);
        this.escenaRelacionada.load.image('bloque4',bloque4);
    }

    crearBloques(nivel){
        switch (nivel) {
            case 1:
                this.conjuntoBloques = this.escenaRelacionada.physics.add.staticGroup({
                    key: ['bloque1'],
                    frameQuantity: 1,
                    gridAlign: {
                        width: 10,
                        height: 4,
                        cellWidth: 67,
                        cellHeight: 44,
                        x: 112,
                        y: 100
                    }
                });
                break;
            case 2:
                this.conjuntoBloques = this.escenaRelacionada.physics.add.staticGroup({
                    key: ['bloque1', 'bloque2'],
                    frameQuantity: 10,
                    gridAlign: {
                        width: 10,
                        height: 4,
                        cellWidth: 67,
                        cellHeight: 44,
                        x: 112,
                        y: 100
                    }
                });
                break;
            case 3:
                this.conjuntoBloques = this.escenaRelacionada.physics.add.staticGroup({
                    key: ['bloque1', 'bloque2', 'bloque3', 'bloque4'],
                    frameQuantity: 10,
                    gridAlign: {
                        width: 10,
                        height: 4,
                        cellWidth: 67,
                        cellHeight: 44,
                        x: 112,
                        y: 100
                    }
                });
                break;
            default:
                break;
        }
    }
}

export default Bloques;