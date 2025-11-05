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

const persona = new Persona("Angel", 1.64, 80);
console.log("AVISO: El IMC es un sistema muy desfasado, no coincide con observaciones modernas de la psycología y la nutrición.");
console.log("IMPORTANTE: El IMC no diferencia entre grasa y densidad muscular.")
console.log(`Sujeto: ${persona.nombre}`);
console.log(`Altura: ${persona.altura} m`);
console.log(`Peso: ${persona.peso} kg`);
console.log(`Calificación: ${persona.getBMICategory()}`);
console.log(`Total IMC: ${persona.getBMI()}`);