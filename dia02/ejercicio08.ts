abstract class Persona {
    nombre: string;
    edad: number;
    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }
    abstract dameSueldo(): number;
}

class Ejecutivo extends Persona {
    constructor(nombre: string, edad: number) {
        super(nombre, edad);
    }

    dameSueldo(): number {
        return 100 * this.edad;
    }
}

class Secretario extends Persona {
    constructor(nombre: string, edad: number) {
        super(nombre, edad);
    }

    dameSueldo(): number {
        return 50 * this.edad;
    }
}

class Aprendiz extends Persona {
    constructor(nombre: string, edad: number) {
        super(nombre, edad);
    }

    dameSueldo(): number {
        return 10 * this.edad;
    }
}


const christopher = new Ejecutivo("Christopher Pike", 30);
const marie = new Ejecutivo("Marie Batel", 20);

const pelia = new Secretario("Pelia", 20);
const joseph = new Secretario("Joseph M'benga", 22);

const montgomery = new Aprendiz("Montgomery Scot", 22);
const christine = new Aprendiz("Christine Chapel", 24);

const plantilla: Persona[] = [christopher, marie, pelia, joseph, montgomery, christine];

let sueldoTotal = 0;
plantilla.forEach(persona => {
    sueldoTotal += persona.dameSueldo();
})

console.log(`Sueldo total: ${sueldoTotal} €`);