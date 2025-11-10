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
        return super.mostrarInfo() + `, Dias Hospitalizado: ${this.diasHospitalizado}, Diagnóstico: ${this.diagnostico}`;
    }
}

const paciente1 = new Paciente("Ana Gómez", 29, "12345678A");
const paciente2 = new PacienteConsulta("Luis Pérez", 45, "87654321B", "Cardiología");
const paciente3 = new PacienteConsulta("María López", 32, "11223344C", "Dermatología");
const paciente4 = new PacienteHospitalizado("Carlos Ruiz", 60, "44332211D", 7, "Neumonía");

const pacientes: Paciente[] = [paciente1, paciente2, paciente3, paciente4];

pacientes.forEach(paciente => {
    console.log(paciente.mostrarInfo());
});
