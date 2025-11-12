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