class Animal {
    mesNacimiento: number;
    diaNacimiento: number;
    anyoNacimiento: number;
    nombre: string[];

    constructor(mesNacimiento: number, diaNacimiento: number, anyoNacimiento: number, nombre: string[]) {
        if (mesNacimiento < 1 || mesNacimiento > 12) {
            throw new Error("Mes no válido");
        }
        if (diaNacimiento < 1 || diaNacimiento > 31) {
            throw new Error("Dia no válido");

        }
        if (anyoNacimiento < 2000 || anyoNacimiento > 2024) {
            throw new Error("Año no válido");
        }
        if (nombre.length < 2) {
            throw new Error("No tiene bastantes nombres");
        }
        this.mesNacimiento = mesNacimiento;
        this.diaNacimiento = diaNacimiento;
        this.anyoNacimiento = anyoNacimiento;
        this.nombre = nombre;
    }

    dameEdad(): number {
        const fechaNacimiento = new Date().getFullYear();
        const edad = Date.now() - fechaNacimiento;
        return edad;
    }

    dameDatos(): string {
        return `\nNombre: ${this.nombre}\nFecha de nacimiento (DD/MM/YYYY): ${this.diaNacimiento}/${this.mesNacimiento}/${this.anyoNacimiento}`;
    }
}

class Mamifero extends Animal {
    mesesGestacion: number;
    constructor(mesNacimiento: number, diaNacimiento: number, anyoNacimiento: number, nombre: string[], mesesGestacion: number) {
        super(mesNacimiento, diaNacimiento, anyoNacimiento, nombre);
        if (mesesGestacion < 1 || mesesGestacion > 18) {
            throw new Error("Meses de gestación no válidos");
        }

        this.mesesGestacion = mesesGestacion;
    }

    dameDatos(): string {
        return super.dameDatos() + ` (${this.mesesGestacion})`; 
    }
}


class Primate extends Mamifero {
    masaCerebral: number;
    proporcionMasaCerebral: number;
    constructor(mesNacimiento: number, diaNacimiento: number, anyoNacimiento: number, nombre: string[], mesesGestacion: number, masaCerebral: number) {
        super(mesNacimiento, diaNacimiento, anyoNacimiento, nombre, mesesGestacion);
        if (masaCerebral < 100) {
            throw new Error("Masa cerebral demasiado baja");
        } else if (masaCerebral > 2000) {
            throw new Error("Masa cerebral demasiado alta");
        }

        this.masaCerebral = masaCerebral;
        this.proporcionMasaCerebral = this.masaCerebral / this.mesesGestacion;

    }

    dameDatos(): string {
        return super.dameDatos() + `\nProporción de masa cerebral: ${this.proporcionMasaCerebral}`;
    }
    
}

class Humano extends Primate {
    apellidos: string;
    constructor(mesNacimiento: number, diaNacimiento: number, anyoNacimiento: number, nombre: string[], mesesGestacion: number, masaCerebral: number, apellidos: string) {
        super(mesNacimiento, diaNacimiento, anyoNacimiento, nombre, mesesGestacion, masaCerebral);
        
        this.apellidos = apellidos;

    }

    dameDatos(): string {
        return super.dameDatos() + `\nApellidos: ${this.apellidos}`;
    }
}