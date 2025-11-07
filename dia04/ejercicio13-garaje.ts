class Coche {
    matricula: string;
    potencia: number;
    velocidad: number;
    modelo: string;

    constructor(matricula: string, potencia: number, velocidad: number, modelo: string) {
        this.matricula = matricula;
        this.potencia = potencia;
        this.velocidad = velocidad;
        this.modelo = modelo;
    }

    imprime(): string {
        return `El coche con matrícula ${this.matricula} de modelo ${this.modelo}, tiene una velocidad de ${this.velocidad} para una potencia de ${this.potencia}`;
    }

    velocidadCrucero(): number {
        return this.velocidad / this.potencia
    }
}


const seat = new Coche("zaader", 120.5, 110, "Seat 600");
const volvo = new Coche("ZZ-2443", 130.3, 125, "Volvo 678");
const mercedes = new Coche("iuhsuahs", 150.8, 135.6, "Mercedes 500");

const coches: Coche[] = [seat, volvo, mercedes];

let velocidadTotal: number = 0;
let potenciaTotal: number = 0;

for (const coche of coches) {
    console.log(coche.imprime());
    velocidadTotal += coche.velocidad;
    potenciaTotal += coche.potencia;
}

console.log("\nVelocidad de curcero de cada coche:");
for (const coche of coches) {
    console.log(coche.matricula + " : " + coche.velocidadCrucero());
}

console.log("");

console.log(`Velociad media: ${velocidadTotal / coches.length}`);
console.log(`Potencia media: ${potenciaTotal / coches.length}`);


