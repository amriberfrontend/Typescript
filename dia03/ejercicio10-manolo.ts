
abstract class Repuesto {
    readonly identificador: string;
    readonly precio: number;

    constructor(identificador: string, precio: number) {
        this.identificador = identificador;
        this.precio = precio;
    }

    abstract dameIdentificador(): string;
    abstract damePrecio(): number;
}

class Rueda extends Repuesto {
    constructor(identificador: string) {
        super(identificador, 200);
    }
    dameIdentificador(): string {
        return `Soy una rueda con identificador ${this.identificador}`;
    }

    damePrecio(): number {
        return this.precio;
    }
}
class Retrovisor extends Repuesto {
    constructor(identificador: string) {
        super(identificador, 50);
    }
    dameIdentificador(): string {
        return `Soy un retrovisor con identificador ${this.identificador}`;
    }

    damePrecio(): number {
        return this.precio;
    }
}
class LuzCruce extends Repuesto {
    constructor(identificador: string) {
        super(identificador, 60);
    }
    dameIdentificador(): string {
        return `Soy una luz de cruce y mi identificador es ${this.identificador}`;
    }

    damePrecio(): number {
        return this.precio;
    }
}

/**
 * Calcula el total de los precios de los repuestos recibidos.
 * @param repuestos Repuesto[]
 * @returns number
 */
function calcularTotal(repuestos: Repuesto[]): number {
    let total = 0;
    repuestos.forEach(repuesto => {
        total += repuesto.damePrecio();
    })
    return total;
}


const rueda1: Rueda = new Rueda("RD001");
const rueda2: Rueda = new Rueda("RD002");

const retrovisor1: Retrovisor = new Retrovisor("RT001");
const retrovisor2: Retrovisor = new Retrovisor("RT002");

const luzCruce1: LuzCruce = new LuzCruce("LC001");
const luzCruce2: LuzCruce = new LuzCruce("LC002");

const repuestos: Repuesto[] = [rueda1, rueda2, retrovisor1, retrovisor2, luzCruce1, luzCruce2];

const totalPrecio: number = calcularTotal(repuestos);

console.log(`El precio total de los repuestos es ${totalPrecio} €`);