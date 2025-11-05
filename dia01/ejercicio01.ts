class Alumno {
    nombre: string;
    edad: number;
    solterx: boolean;
    constructor(nombre: string, edad: number, solterx: boolean) {
        this.nombre = nombre;
        this.edad = edad;
        this.solterx = solterx;
    }
}

const manolo = new Alumno("Manolo", 67, true);
const ana = new Alumno("Ana", 43, false);