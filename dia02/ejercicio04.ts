//* Sé que es un poco tonto hacer herencia para esto, pero me apetecía probar.
class Shape {
    positionX: number;
    positionY: number;
    constructor(positionX: number, positionY: number) {
        this.positionX = positionX;
        this.positionY = positionY;
    }
}

class Square extends Shape {
    sideLenght: number;
    constructor(positionX: number, positionY: number, sideLength: number) {
        super(positionX, positionY);
        this.sideLenght = sideLength;
    }

    getArea(): number {
        return Math.pow(this.sideLenght, 2);
    }

    getPerimeter(): number {
        return this.sideLenght * 4;
    }
}


class Circle extends Shape {
    radius: number;
    constructor(positionX: number, positionY: number, radius: number) {
        super(positionX, positionY);
        this.radius = radius;
    }

    getArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }

    getPerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}


const cuadrado1 = new Square(0, 0, 17);
console.log(`Cuadrado 1: Área de superficie = ${cuadrado1.getArea()}, Perímetro = ${cuadrado1.getPerimeter()}`);

const cuadrado2 = new Square(0, 18, 6);
console.log(`Cuadrado 2: Área de superficie =  ${cuadrado2.getArea()}, Perímetro = ${cuadrado2.getPerimeter()}`);


const circulo1 = new Circle(18, 0, 5);
console.log(`Círculo 1: Área = ${circulo1.getArea()}, Circumferencia = ${circulo1.getPerimeter()}`)

const circulo2 = new Circle(18, 10, 11);
console.log(`Círculo 2: Área = ${circulo2.getArea()}, Circumferencia = ${circulo2.getPerimeter()}`)
