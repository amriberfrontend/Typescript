enum TipoPieza {
    RUEDA,
    VOLANTE,
    CARROCERIA
}

interface IValorable {
    damePrecio(): number;
}

class Pieza implements IValorable {
    tipoPieza: TipoPieza;
    precio: number;

    constructor(tipoPieza: TipoPieza, precio: number) {
        this.tipoPieza = tipoPieza;
        this.precio = precio;
    }
    
    damePrecio(): number {
        return this.precio;
    }
}

class Coche implements IValorable {
    piezas: Pieza[];
    precio: number;
    constructor(piezas: Pieza[], precio: number) {
        this.piezas = piezas;
        this.precio = precio;
    }

    damePrecio(): number {
        return this.precio;
    }
}


class Centro implements IValorable {
    coches: Coche[];
    constructor(coches: Coche[] = []) {
        this.coches = coches;
    }

    añadirCoche(coche: Coche): void {
        this.coches.push(coche);
    }

    damePrecio(): number {
        return this.coches.reduce((total, c) => total + c.damePrecio(), 0);
    }
}