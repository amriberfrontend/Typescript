abstract class Regalo {
    identificador: string;
    precioCompra: number;
    precioVenta: number;

    constructor(identificador: string, precioCompra: number, precioVenta: number) {
        if(!validarIdentificador(identificador)) {
            throw new Error("Identificador no válido");
        }

        this.identificador = identificador;
        this.precioCompra = precioCompra;
        this.precioVenta = precioVenta;
    }

    beneficio(): number {
        return this.precioVenta - this.precioCompra;
    }

}


class JarronMing extends Regalo {
    constructor(identificador: string) {
        super(identificador, 100, 200);
    }
}

class TazaMong extends Regalo {
    constructor(identificador: string) {
        super(identificador, 10, 22);
    }

}

class ColganteChulin extends Regalo {
    constructor(identificador: string) {
        super(identificador, 120, 140);
    }
}


function validarIdentificador(identificador: string): boolean {
    return /[A-Z]{3}[0-9]{4}/.test(identificador);
}

function suma(total: number, num: number): number {
    return total + num;
}

function ordenarPorCompra(regalo1: Regalo, regalo2: Regalo): number {
    if (regalo1.precioCompra > regalo2.precioCompra) {
        return 1
    }
    if (regalo1.precioCompra < regalo2.precioCompra) {
        return -1
    }
    return 0;
}

function ordenarPorVenta(regalo1: Regalo, regalo2: Regalo): number {
    if (regalo1.precioVenta > regalo2.precioVenta) {
        return 1
    }
    if (regalo1.precioVenta < regalo2.precioVenta) {
        return -1
    }
    return 0;
}

function ordenarPorBeneficio(regalo1: Regalo, regalo2: Regalo): number {
    if (regalo1.beneficio() > regalo2.beneficio()) {
        return 1;
    }
    if (regalo1.beneficio() < regalo2.beneficio()) {
        return -1;
    }
    return 0;
}

function mostrarRegalos(regalos: Regalo[]) {
    for (const regalo of regalos) {
        console.log(`Regalo ${regalo.identificador}\n\tPrecio de compra: ${regalo.precioCompra}\n\tPrecio de venta: ${regalo.precioVenta}\n\tBeneficios: ${regalo.beneficio()} €`);
    }
}

function mostrarBeneficios(regalos: Regalo[]){
    for (const regalo of regalos) {
        // Se necesita el .toFixed(2) para compensar la precisión de puntos flotantes
        console.log(`Regalo ${regalo.identificador} genera ${regalo.beneficio().toFixed(2)} € de beneficio.`);
    }
}


function calcularTotalCompra(regalos: Regalo[]): number {
    const preciosCompra: number[] = regalos.map(regalo => regalo.precioCompra);
    return preciosCompra.reduce(suma);
}

function calcularTotalVenta(regalos: Regalo[]): number {
    const preciosVenta: number[] = regalos.map(regalo => regalo.precioVenta);
    return preciosVenta.reduce(suma);
}

function calcularTotalBeneficios(regalos: Regalo[]): number {
    const beneficios: number[] = regalos.map(regalo => regalo.beneficio());
    return beneficios.reduce(suma);
}



function recalcularIVA(nuevoIVA: number, regalos: Regalo[]) {
    for (const regalo of regalos) {
        regalo.precioCompra *= nuevoIVA;
        regalo.precioVenta *= nuevoIVA;
    }
}

const jarron1: JarronMing = new JarronMing("JAR0001");
const jarron2: JarronMing = new JarronMing("JAR0002");

const taza1: TazaMong = new TazaMong("TAZ0001");
const taza2: TazaMong = new TazaMong("TAZ0002");

const colgante1: ColganteChulin = new ColganteChulin("COL0001");
const colgante2: ColganteChulin = new ColganteChulin("COL0002");

const regalos: Regalo[] = [jarron1, jarron2, taza1, taza2, colgante1, colgante2];

const totalCompra = calcularTotalCompra(regalos);
const totalVenta = calcularTotalVenta(regalos);
const totalBeneficios = calcularTotalBeneficios(regalos);

const mediaCompra = totalCompra / regalos.length;
const mediaVenta = totalVenta / regalos.length;



console.log("=== Regalos ===")
mostrarBeneficios(regalos);



console.log("\n=== Regalos ordenados por precio de venta ===")
regalos.sort(ordenarPorVenta);
mostrarBeneficios(regalos);

console.log("\n=== Regalos ordenados por precio de compra ===")
regalos.sort(ordenarPorCompra);
mostrarBeneficios(regalos);

console.log("\n=== Regalos ordenados por beneficios ===")
regalos.sort(ordenarPorBeneficio);
mostrarBeneficios(regalos);



console.log("\n=== Regalos con nuevo IVA ===");
recalcularIVA(1.28, regalos);
mostrarBeneficios(regalos);





