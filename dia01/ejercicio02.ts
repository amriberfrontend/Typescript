class Boton {
    posicionX: number;
    posicionY: number;
    textoBoton: string;
    constructor(posicionX: number, posicionY: number, textoBoton: string) {
        this.posicionX = posicionX;
        this.posicionY = posicionY;
        this.textoBoton = textoBoton;
    }

}

const boton1 = new Boton(5, 5, "Botón 1");
const boton2 = new Boton(5, 9, "Botón 2");
const botonHola = new Boton(5, 13, "Hola");