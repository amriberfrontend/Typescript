enum GrupoMinerales {
    IGNEAS,
    METAMORFICAS,
    SEDIMENTARIAS
}

enum ClasificacionTamanyoGranos {
    MUY_GRUESO,
    GRUESO,
    MEDIO,
    FINO
}

enum ClasificacionUso {
    CONSTRUCCION,
    ORNAMENTAL,
    UTENSILIOS,
    MACHACAR
}

enum Textura {
    VITREA,
    AFANITICA,
    FANERITICA
}



class Mineral {
    id: string;
    nombre: string;
    grupo: GrupoMinerales;
    dureza: number;
    tamanyoGranos: number;
    clasificacionTamanyoGranos: ClasificacionTamanyoGranos;
    clasificacion: ClasificacionUso;
    temperaturaFormacion: number;
    estructura: string;
    formaGranos: string;
    textura: Textura;

    constructor(
        id: string,
        nombre: string,
        grupo: GrupoMinerales,
        dureza: number,
        tamanyoGranos: number,
        clasificacionTamanyoGranos: ClasificacionTamanyoGranos,
        clasificacion: ClasificacionUso,
        temperaturaFormacion: number,
        estructura: string,
        formaGranos: string,
        textura: Textura
    ) {
        this.id = id;
        this.nombre = nombre;
        this.grupo = grupo;
        this.dureza = dureza;
        this.tamanyoGranos = tamanyoGranos;
        this.clasificacionTamanyoGranos = clasificacionTamanyoGranos;
        this.clasificacion = clasificacion;
        this.temperaturaFormacion = temperaturaFormacion;
        this.estructura = estructura;
        this.formaGranos = formaGranos;
        this.textura = textura;
    }

}


// Formato de la entrada de datos
interface IMostrable {
    dameAnchuraLabel(): number;
    dameAnchuraInput(): number;
    mostrarPlaceholder(): boolean;
}

class LayoutExtendido implements IMostrable {
    readonly anchuraLabel: number = 3;
    readonly anchuraInput: number = 9;
    readonly placeholder: boolean = false;
    dameAnchuraLabel(): number {
        return this.anchuraLabel;
    }
    dameAnchuraInput(): number {
        return this.anchuraInput;
    }
    mostrarPlaceholder(): boolean {
        return this.placeholder;
    }
}

class LayoutReducido implements IMostrable {
    readonly anchuraLabel: number = 0;
    readonly anchuraInput: number = 6;
    readonly placeholder: boolean = true;
    dameAnchuraLabel(): number {
        return this.anchuraLabel;
    }
    dameAnchuraInput(): number {
        return this.anchuraInput;
    }
    mostrarPlaceholder(): boolean {
        return this.placeholder;
    }

}

const reducedLayout: boolean = false;

const inputs = document.getElementsByClassName("input-container");
const labels = document.getElementsByClassName("col-form-label");

const toggleLayoutBtn = document.getElementById("toggle-layout");


toggleLayoutBtn?.addEventListener("click", (e: Event) => {
    e.preventDefault();
    toggleLayout();
});

function toggleLayout() {
    let layout: IMostrable;
    if (reducedLayout) {
        layout = new LayoutReducido();
    } else {
        layout = new LayoutExtendido();
    }

    for (const label of labels) {
        const idk = label.className.split(' ').filter(c => {
            return c.lastIndexOf("col-3", 0) !== 0;
        });
        console.log(label.className);
        
    }

}


// Comprobación de criterios
/** 
 * Igneas
 * -------------
 * Grupo: igneas
 * Grano: grueso
 */

/**
 * Metamórficas
 * -------------------
 * Grupo: metamórfica
 * Grano: medio | fino
 * Textura: vitrea
 */

/**
 * Sedimentaria
 * -------------------
 * Grupo: sedimentaria
 * Textura: fanerítica
 */

// Mostrar resultado de comprobación de criterios

// Mostrar resultados en formato inglés y europeo

/**
 * Inglés
 * -------------------
 * Textos en inglés
 * Grados en Farenheit
 */


/**
 * Europeo
 * -----------------
 * Textos en español
 * Grados en Celsius
 */