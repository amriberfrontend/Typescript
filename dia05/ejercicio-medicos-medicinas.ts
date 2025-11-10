class Paciente {
    nombre: string;
    edad: number;
    dni: string;

    constructor(nombre: string, edad: number, dni: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
    }
    
    mostrarInfo(): string {
        return `Nombre: ${this.nombre}, Edad: ${this.edad}, DNI: ${this.dni}`;
    }
}

class PacienteConsulta extends Paciente {
    especialidad: string;

    constructor(nombre: string, edad: number, dni: string, especialidad: string) {
        super(nombre, edad, dni);
        this.especialidad = especialidad;
    }

    mostrarInfo(): string {
        return super.mostrarInfo() + `, Especialidad: ${this.especialidad}`;
    }
}

class PacienteHospitalizado extends Paciente {
    diasHospitalizado: number;
    diagnostico: string;

    constructor(nombre: string, edad: number, dni: string, diasHospitalizado: number, diagnostico: string) {
        super(nombre, edad, dni);
        this.diasHospitalizado = diasHospitalizado;
        this.diagnostico = diagnostico;
    }

    mostrarInfo(): string {
        return super.mostrarInfo() + `, Dias Hospitalizado: `
    }
}