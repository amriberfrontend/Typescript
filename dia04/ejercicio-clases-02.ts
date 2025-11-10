class Envio {
    identificador: string;
    numero: bigint;
    precio: number;
    recibido: boolean;

    constructor(identificador: string, numero: bigint, precio: number, recibido: boolean) {
        if (!validarIdentificador(identificador)) {
            throw new Error("Identificador no válido");
        }
        this.identificador = identificador;
        this.numero = numero;
        this.precio = precio;
        this.recibido = recibido;
    }

    calcularIva(): number {
        return this.precio * 0.21;
    }

}

function validarIdentificador(identificador: string): boolean {
    return /[A-H]{2}[0-9]{2}[I-Z]{2}/.test(identificador);
}

const envio1 = new Envio("AB12IJ", 123n, 29.99, false);
const envio2 = new Envio("CD34KL", 456n, 49.5, true);
const envio3 = new Envio("GH56MN", 789n, 15.0, false);

const envios: Envio[] = [envio1, envio2, envio3];

for (const envio of envios) {
    console.log(`IVA del envío ${envio.identificador}: ${envio.calcularIva()}`);
}