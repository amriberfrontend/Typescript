//* Sé que es un poco tonto hacer herencia para esto, pero me apetecía probar.
class Shape {
    positionX: number;
    positionY: number;
    constructor(positionX: number, positionY: number) {
        this.positionX = positionX;
        this.positionY = positionY;
    }
}

class Rectangle extends Shape {
    lengthX: number;
    lengthY: number;
    constructor(positionX: number, positionY: number, lengthX: number, lengthY: number) {
        super(positionX, positionY);
        this.lengthX = lengthX;
        this.lengthY = lengthY;
    }
    getArea(): number {
        return this.lengthX * this.lengthY;
    }

    getPerimeter(): number {
        return (this.lengthX * 2) + (this.lengthY * 2);
    }
}

// Todos los cuadrados son rectángulos
class Square extends Rectangle {
    constructor(positionX: number, positionY: number, sideLength: number) {
        super(positionX, positionY, sideLength, sideLength);
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

    getCircumference(): number {
        return 2 * Math.PI * this.radius;
    }
}

class NotATriangleError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "NotATriangleError";
        Object.setPrototypeOf(this, NotATriangleError.prototype);
    }
}

class Triangle extends Shape {
    lengthA: number;
    lengthB: number;
    lengthC: number;
    constructor(positionX: number, positionY: number, lengthA: number, lengthB: number, lengthC: number) {
        if (lengthA + lengthB <= lengthC || lengthB + lengthC <= lengthA || lengthC + lengthA <= lengthB) {
            throw new NotATriangleError("No existe triángulo con esas dimensiones");
        }
        super(positionX, positionY);
        this.lengthA = lengthA;
        this.lengthB = lengthB;
        this.lengthC = lengthC;
    }

    getPerimeter(): number {
        return this.lengthA + this.lengthB + this.lengthC;
    }

    /**
     * Calcula el área del triángulo usando la fórmula de Herón
     * @returns el área del triángulo
     */
    getArea(): number {
        const s: number = (this.lengthA + this.lengthB + this.lengthC) / 2;
        const x = Math.abs(s * (s - this.lengthA) * (s - this.lengthB) * (s - this.lengthC));
        const t = Math.sqrt(x);
        return t;
    }
}


const cuadrado1 = new Square(0, 0, 17);
console.log(`Cuadrado 1: Área de superficie = ${cuadrado1.getArea()}, Perímetro = ${cuadrado1.getPerimeter()}`);

const cuadrado2 = new Square(0, 18, 6);
console.log(`Cuadrado 2: Área de superficie =  ${cuadrado2.getArea()}, Perímetro = ${cuadrado2.getPerimeter()}`);

const rectangulo = new Rectangle(15, 24, 5, 7);
console.log(`Rectangulo: Área de superficie =  ${rectangulo.getArea()}, Perímetro = ${rectangulo.getPerimeter()}`);



const circulo1 = new Circle(18, 0, 5);
console.log(`Círculo 1: Área = ${circulo1.getArea()}, Circumferencia = ${circulo1.getCircumference()}`)

const circulo2 = new Circle(18, 10, 11);
console.log(`Círculo 2: Área = ${circulo2.getArea()}, Circumferencia = ${circulo2.getCircumference()}`)

try {
    const triangulo = new Triangle(50, 50, 7, 5, 11);
    console.log(`Triángulo: Área = ${triangulo.getArea()}, Perímetro = ${triangulo.getPerimeter()}`);
    
} catch (NotATriangleError) {
    console.log("No se puede crear un triángulo con esas dimensiones.\nLa suma de la longitud de dos de los lados debe ser mayor que la del último.");
}
