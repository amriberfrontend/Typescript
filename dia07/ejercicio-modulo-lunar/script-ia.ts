// Interfaces
interface IPilotable {
    dameId(): string;
    dameNombre(): string;
    dameEdad(): number;
}

interface IEntrada {
    dameRoca(): Roca;
}

interface ISalida {
    muestra(roca: Roca): void;
}

interface IValidable {
    isValid(roca: Roca): boolean;
}

// Tipos
type Origen = "ígneas" | "metamórficas" | "sedimentarias";
type TamanyoGrano = "muy grueso" | "grueso" | "medio" | "fino";
type Clasificacion = "construcción" | "ornamental" | "utensilios" | "machacada";
type Textura = "vitrea" | "afanítica" | "fanerítica";

// Clase Roca
class Roca {
    constructor(
        public id: string,
        public nombre: string,
        public origen: Origen,
        public dureza: number,
        public tamañoGrano: TamanyoGrano,
        public clasificacion: Clasificacion,
        public tamañoCristales: number,
        public temperaturaFormacion: number,
        public estructura: string,
        public formaGranos: string,
        public textura: Textura
    ) {}
}

// Clase Astronauta
class Astronauta implements IPilotable {
    constructor(
        private identificador: string,
        private nombreCompleto: string,
        private edad: number
    ) {}

    dameId(): string {
        return this.identificador;
    }

    dameNombre(): string {
        return this.nombreCompleto;
    }

    dameEdad(): number {
        return this.edad;
    }
}

// Validadores
class ValidadorIgneo implements IValidable {
    isValid(roca: Roca): boolean {
        return roca.origen === "ígneas" && roca.tamañoGrano === "muy grueso";
    }
}

class ValidadorMetamorfico implements IValidable {
    isValid(roca: Roca): boolean {
        return (
            roca.origen === "metamórficas" &&
            (roca.tamañoGrano === "medio" || roca.tamañoGrano === "fino") &&
            roca.textura === "vitrea"
        );
    }
}

class ValidadorSedimentario implements IValidable {
    isValid(roca: Roca): boolean {
        return roca.origen === "sedimentarias" && roca.textura === "fanerítica";
    }
}

// Entrada
class EntradaExtendida implements IEntrada {
    dameRoca(): Roca {
        // Implementación con labels
        return new Roca(
            "AB1234CD",
            "Feldespato",
            "ígneas",
            6,
            "muy grueso",
            "construcción",
            8,
            50,
            "Cristalina",
            "Angulosa",
            "fanerítica"
        );
    }
}

class EntradaReducida implements IEntrada {
    dameRoca(): Roca {
        // Implementación con placeholder
        return new Roca(
            "XY5678ZW",
            "Cuarzo",
            "metamórficas",
            7,
            "fino",
            "ornamental",
            5,
            25,
            "Compacta",
            "Redondeada",
            "vitrea"
        );
    }
}

// Salida
class SalidaAmericana implements ISalida {
    muestra(roca: Roca): void {
        const tempF = roca.temperaturaFormacion * 1.8 + 32;
        console.log(`✅ Rock ID: ${roca.id}, Name: ${roca.nombre}, Temp: ${tempF}°F`);
    }
}

class SalidaEuropea implements ISalida {
    muestra(roca: Roca): void {
        console.log(
            `✅ ID Roca: ${roca.id}, Nombre: ${roca.nombre}, Temp: ${roca.temperaturaFormacion}°C`
        );
    }
}

// Clase Misión
class Mision {
    constructor(
        private piloto: IPilotable,
        private validador: IValidable,
        private entrada: IEntrada,
        private salida: ISalida
    ) {}

    analiza(): void {
        const roca = this.entrada.dameRoca();
        if (this.validador.isValid(roca)) {
            console.log("😊");
            this.salida.muestra(roca);
        } else {
            console.log("😠");
        }
    }

    setValidador(validador: IValidable): void {
        this.validador = validador;
    }
}

// Ejecución
const piloto: IPilotable = new Astronauta("AG001", "Agmunsen Perez", 45);
const entrada = new EntradaExtendida();
const salida = new SalidaEuropea();

const misionIgnea = new Mision(
    piloto,
    new ValidadorIgneo(),
    entrada,
    salida
);

misionIgnea.analiza();
misionIgnea.setValidador(new ValidadorMetamorfico());
misionIgnea.analiza();