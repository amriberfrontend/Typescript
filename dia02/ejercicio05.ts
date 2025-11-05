class Persona {
    nombre: string;
    altura: number;
    peso: number;
    /**
     * 
     * @param nombre nombre de la persona
     * @param altura altura en metros
     * @param peso peso en kilogramos
     */
    constructor(nombre: string, altura: number, peso: number) {
        this.nombre = nombre;
        this.altura = altura;
        this.peso = peso;
    }

    getBMI(): number {
        return this.peso / Math.pow(this.altura, 2);
    }
    getBMICategory(): string {
        const bmi: number = this.getBMI();

        if (bmi < 18.5) {
            return "Bajo peso";
        }

        if (bmi < 25) {
            return "Normal";
        }

        if (bmi < 30) {
            return "Sobre peso";
        }

        return "Obesx"

    }
}

const persona = new Persona("Angel", 1.64, 90);
console.log("AVISO: El IMC es un sistema muy desfasado que no diferencia entre grasa y densidad muscular. Tampoco tiene en cuenta nuestro entendimiento moderno de bien estar.");
console.log(`Sujeto: ${persona.nombre}`);
console.log(`Calificación: ${persona.getBMICategory()}`);
console.log(`Total IMC: ${persona.getBMI()}`);