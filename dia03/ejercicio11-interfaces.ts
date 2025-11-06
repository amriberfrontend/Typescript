
interface Repuesto {

    dameIdentificador(): string;
    damePrecio(): number;
}
interface VolumenRepuesto {
    dameVolumen(): number;
}
class Rueda implements Repuesto, VolumenRepuesto {
    dameVolumen(): number {
        return 50;
    }
    dameIdentificador(): string {
        return `Soy una rueda`;
    }

    damePrecio(): number {
        return 200;
    }
}
class Retrovisor implements Repuesto, VolumenRepuesto {
    dameVolumen(): number {
        return 70;
    }
    dameIdentificador(): string {
        return `Soy un retrovisor`;
    }

    damePrecio(): number {
        return 50;
    }
}
class LuzCruce implements Repuesto {
    dameIdentificador(): string {
        return `Soy una luz de cruce`;
    }

    damePrecio(): number {
        return 60;
    }
}
class Pegatina implements Repuesto, VolumenRepuesto {
    dameIdentificador(): string {
        return "Soy una pegatina";
    }
    damePrecio(): number {
        return 1;
    }
    dameVolumen(): number {
        return 100;
    }
}

function instanceOfVolumenRepuesto(object: any): object is VolumenRepuesto {
    return 
}

const repuestos: Repuesto[] = [new Rueda(), new Rueda(), new Retrovisor(), new Retrovisor(), new LuzCruce(), new LuzCruce(), new Pegatina(), new Pegatina()];

let totalPrecio = 0;
let totalVolumen = 0;
repuestos.forEach(repuesto => {
    if (repuesto in VolumenRepuesto)
    totalPrecio += repuesto.damePrecio();
})
console.log(`El precio total de los repuestos es ${totalPrecio} €`);