class Punto{
    x: number;
    y: number;
    color: string;
    constructor(x: number, y: number, color: string) {
        this.x = x;
        this.y = y;
        this.color = color;
    }
    
}

const miPrimerPunto = new Punto(4, 5, "rojo");

miPrimerPunto.x = 50;
miPrimerPunto.y = 25;
miPrimerPunto.color = "verde"

console.log(`x=${miPrimerPunto.x}, y=${miPrimerPunto.y}, color=${miPrimerPunto.color}`);
