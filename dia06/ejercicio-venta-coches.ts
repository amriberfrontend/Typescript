interface IValorable {
    damePrecio(): number;
}

class Coche implements IValorable {
    id: string;
    ruedas: Rueda[];
    carroceria: Carroceria;
    volante: Volante;
    precio: number;

    constructor(id: string, ruedas: Rueda[], carroceria: Carroceria, volante: Volante, precio: number) {
        this.id = id;
        this.ruedas = ruedas;
        this.carroceria = carroceria;
        this.volante = volante;
        this.precio = precio
    }

    damePrecio(): number {
        return this.precio;
    }
}

class Rueda implements IValorable {
    id: string;
    precio: number;
    terreno: Terreno;

    constructor(id: string, precio: number, terreno: Terreno) {
        this.id = id;
        this.precio = precio;
        this.terreno = terreno;
    }
    damePrecio(): number {
        return this.precio;
    }
}

class Carroceria implements IValorable {
    id: string;
    precio: number;
    color: string;
    constructor(id: string, precio: number, color: string) {
        this.id = id;
        this.precio = precio;
        this.color = color;
    }

    damePrecio(): number {
        return this.precio;
    }
}

class Volante implements IValorable {
    id: string;
    precio: number;
    constructor(id: string, precio: number) {
        this.id = id;
        this.precio = precio;
    }

    damePrecio(): number {
        return this.precio;
    }
}

enum Terreno {
    CARRETERA,
    NIEVE,
    TODO_TERRENO
}

class Concesionario implements IValorable {
    direccion: string;
    productos: IValorable[]
    constructor(
        direccion: string,
        products: IValorable[]
    ) {
        this.direccion = direccion;
        this.productos = products;
    }

    damePrecio(): number {
        return this.productos.reduce((total, p) => total + p.damePrecio(), 0);
    }

    añadirCoche(coche: Coche): void {
        this.productos.push(coche);
    }
}

// create 4 ruedas
const rueda1 = new Rueda("r1", 120, Terreno.CARRETERA);
const rueda2 = new Rueda("r2", 150, Terreno.CARRETERA);
const rueda3 = new Rueda("r3", 130, Terreno.CARRETERA);
const rueda4 = new Rueda("r4", 140, Terreno.CARRETERA);

// create 2 volante ruedas
const volante1 = new Volante("v1", 250);
const volante2 = new Volante("v2", 300);

// create 3 bodies
const carroceria1 = new Carroceria("c1", 2000, "rojo");
const carroceria2 = new Carroceria("c2", 2200, "azul");
const carroceria3 = new Carroceria("c3", 2100, 'negro');

// create 1 car using the 4 ruedas, one carroceria and one volante rueda
const coche1 = new Coche(
    "coche1",
    [rueda1, rueda2, rueda3, rueda4],
    carroceria1,
    volante1,
    15000
);

// create dealership and add the items
const concesionario = new Concesionario(
    'c/ Principal, 123',
    [coche1, rueda1, rueda2, rueda3, rueda4, carroceria1, carroceria2, carroceria3, volante1, volante2]
);

// optional: show total inventory precio
console.log("Precio total concesionario: " + concesionario.damePrecio());

console.log(concesionario.direccion);