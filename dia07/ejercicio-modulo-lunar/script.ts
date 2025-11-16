interface IPiloto {
    dameIdentificador(): string;
    dameNombreCompleto(): string;
    dameEdad(): number;
}

class Astronauta implements IPiloto {
    id: string;
    nombre: string;
    edad: number;
    constructor(id: string, nombre: string, edad: number) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
    }
    dameIdentificador(): string {
        return this.id;
    }
    dameNombreCompleto(): string {
        return this.nombre;
    }
    dameEdad(): number {
        return this.edad;
    }
    
}



class Mision {
    astronauta: IPiloto;
    mision: ICriterioValidacion;
    salida: ISalida | undefined;

    constructor(astronauta: IPiloto, mision: ICriterioValidacion) {
        this.astronauta = astronauta;
        this.mision = mision;
    }

    analizar(roca: ICapturable): boolean {
        return this.mision.validar(roca);
    }
}





enum Origen {
    IGNEA,
    METAMORFICA,
    SEDIMENTARIA
}
enum TamanyoGrano {
    MUY_GRUESO,
    GRUESO,
    MEDIO,
    FINO
}
enum Clasificacion {
    CONSTRUCCION,
    ORNAMENTAL,
    UTENSILIOS,
    MACHACADA
}
enum Textura {
    VITREA,
    AFANITICA,
    FANERITICA
}

interface ICapturable {
    id: string,
    nombre: string,
    grupo: Origen,
    dureza: number,
    tamanyoGrano: TamanyoGrano,
    clasificacion: Clasificacion,
    tamanyoCristales: number,
    temperaturaFormacion: number,
    estructura: string,
    formaGranos: string,
    textura: Textura

    dameGrupo(): Origen;
    dameTamanyoGrano(): TamanyoGrano;
    dameTextura(): Textura;
}

class Mineral implements ICapturable{
    constructor(
        public id: string,
        public nombre: string,
        public grupo: Origen,
        public dureza: number,
        public tamanyoGrano: TamanyoGrano,
        public clasificacion: Clasificacion,
        public tamanyoCristales: number,
        public temperaturaFormacion: number,
        public estructura: string,
        public formaGranos: string,
        public textura: Textura
    ){}
    dameGrupo(): Origen {
        return this.grupo;
    }
    dameTamanyoGrano(): TamanyoGrano {
        return this.tamanyoGrano;
    }
    dameTextura(): Textura {
        return this.textura;
    }
}





interface ISalida {
    dameRoca(): ICapturable;
    dameGrupo(): string;
    dameTamanyoGrano(): string;
    dameTextura(): string;
    dameClasificacion(): string;
    dameTemperatura(): string;
}

class SalidaEuropea implements ISalida {
    roca: ICapturable;
    constructor(roca: ICapturable) {
        this.roca = roca;
    }
    dameRoca(): ICapturable {
        throw new Error("Method not implemented.");
    }
    dameGrupo(): string {
        switch (this.roca.dameGrupo()) {
            case (Origen.IGNEA): return "Ígnea";
            case (Origen.METAMORFICA): return "Metamórfica";
            case (Origen.SEDIMENTARIA): return "Sedimentaria";
            default: return "Desconocido";
        }
    }
    dameTamanyoGrano(): string {
        switch (this.roca.dameTamanyoGrano()) {
            case (TamanyoGrano.FINO): return "Fino";
            case (TamanyoGrano.MEDIO): return "Medio";
            case (TamanyoGrano.GRUESO): return "Grueso";
            case (TamanyoGrano.MUY_GRUESO): return "Muy Grueso";
            default: return "Desconocido";
        }
    }
    dameTextura(): string {
        switch (this.roca.dameTextura()) {
            case (Textura.VITREA): return "Vitrea";
            // Que sea sabido que estas palabras no existen
            case (Textura.AFANITICA): return "Afanítica";
            case (Textura.FANERITICA): return "Fanérica";
            default: return "Desconocido";
            
        }
    }
    dameClasificacion(): string {
        switch (this.roca.clasificacion) {
            case (Clasificacion.CONSTRUCCION): return "Para la construcción";
            case (Clasificacion.MACHACADA): return "Para machacar";
            case (Clasificacion.ORNAMENTAL): return "Ornamental";
            case (Clasificacion.UTENSILIOS): return "Para hacer utensilios";
            default: return "Desconocido";
            
        }
    }
    dameTemperatura(): string {
        const celsius = this.roca.temperaturaFormacion - 273.15
        return `${celsius} ºC`;
    }
    
}

class SalidaAmericana implements ISalida {
    roca: ICapturable;
    constructor(roca: ICapturable) {
        this.roca = roca;
    }
    dameRoca(): ICapturable {
        throw new Error("Method not implemented.");
    }
    dameGrupo(): string {
        switch (this.roca.dameGrupo()) {
            case (Origen.IGNEA): return "Igneous";
            case (Origen.METAMORFICA): return "Metamorphic";
            case (Origen.SEDIMENTARIA): return "Sedimentary";
            default: return "Unknown";
        }
    }
    dameTamanyoGrano(): string {
        switch (this.roca.dameTamanyoGrano()) {
            case (TamanyoGrano.FINO): return "Fine";
            case (TamanyoGrano.MEDIO): return "Medium";
            case (TamanyoGrano.GRUESO): return "Thick";
            case (TamanyoGrano.MUY_GRUESO): return "Very Thick";
            default: return "Unknown";
        }
    }
    dameTextura(): string {
        switch (this.roca.dameTextura()) {
            case (Textura.VITREA): return "Glassy";
            case (Textura.AFANITICA): return "Aphanite-like";
            case (Textura.FANERITICA): return "Phanerite-like";
            default: return "Unknown";
            
        }
    }
    dameClasificacion(): string {
        switch (this.roca.clasificacion) {
            case (Clasificacion.CONSTRUCCION): return "For construction";
            case (Clasificacion.MACHACADA): return "To crush";
            case (Clasificacion.ORNAMENTAL): return "Decorative";
            case (Clasificacion.UTENSILIOS): return "For making tools";
            default: return "Unknown";
            
        }
    }
    dameTemperatura(): string {
        const fahrenheit = this.roca.temperaturaFormacion - 1.8 - 459.67
        return `${fahrenheit} ºF`;
    }
}






interface ICriterioValidacion {
    validar(mineral: ICapturable): boolean;
}

class CriterioIgnea implements ICriterioValidacion {
    grupo: Origen = Origen.IGNEA;
    tamanyoGrano: TamanyoGrano = TamanyoGrano.GRUESO;
    validar(mineral: ICapturable): boolean {
        return mineral.dameGrupo() === this.grupo && mineral.dameTamanyoGrano() === this.tamanyoGrano;
    }
    
}

class CriterioMetamorfica implements ICriterioValidacion {
    grupo: Origen = Origen.METAMORFICA;
    tamanyoGrano: TamanyoGrano[] = [TamanyoGrano.MEDIO, TamanyoGrano.FINO];
    textura: Textura = Textura.VITREA;
    validar(mineral: ICapturable): boolean {
        return mineral.dameGrupo() === this.grupo && mineral.dameTamanyoGrano() in this.tamanyoGrano && mineral.dameTextura() === this.textura;
    }
    
}

class CriterioSedimentaria implements ICriterioValidacion {
    grupo: Origen = Origen.IGNEA;
    tamanyoGrano: TamanyoGrano = TamanyoGrano.GRUESO;
    validar(mineral: ICapturable): boolean {
        return mineral.dameGrupo() === this.grupo && mineral.dameTamanyoGrano() === this.tamanyoGrano;
    }
    
}






const agmunsen = new Astronauta("PIL-001", "Agmunsen", 32);

const misionIgnea = new Mision(agmunsen, new CriterioIgnea());






console.log("inicio script");
const toggleLayoutCheckBox = <HTMLInputElement> document.getElementById("toggle-layout");
const toggleLayoutCheckBoxDiv = <HTMLDivElement> document.getElementById("toggle-layout-div");
const formularioContainer = <HTMLDivElement> document.getElementById("formulario-container");
const comprobarBtn = <HTMLButtonElement> document.getElementById("comprobar");
const volverBtn = <HTMLButtonElement> document.getElementById("volver");
const happyResult = <HTMLDivElement> document.getElementById("happy-result");
const angryResult = <HTMLDivElement> document.getElementById("angry-result");


mostrarIframe("./formulario-extendido.html");

toggleLayoutCheckBox.addEventListener("click", function() {
    if (toggleLayoutCheckBox.checked) {
        mostrarIframe("./formulario-reducido.html");
    } else {
        mostrarIframe("./formulario-extendido.html");
    }
});

comprobarBtn.addEventListener("click", function() {
    const mineral = generarRoca(getIframeDoc("formulario-iframe"));
    
    if (mineral !== false) {


        const salida = new SalidaAmericana(mineral as ICapturable);
        
        misionIgnea.salida = salida;

        if (misionIgnea.analizar(mineral as ICapturable)) {
            mostrarResultadoBien(salida);
    
            toggleLayoutCheckBoxDiv.setAttribute("hidden", "true");
            volverBtn.removeAttribute("hidden");
            
        } else {
            toggleLayoutCheckBoxDiv.setAttribute("hidden", "true");
            volverBtn.removeAttribute("hidden");
            mostrarResultadoMal();
        }
        

    }

});
volverBtn.addEventListener("click", function() {
    volverBtn.setAttribute("hidden", "true");
    toggleLayoutCheckBoxDiv.removeAttribute("hidden");
    formularioContainer.removeAttribute("hidden");
    happyResult.setAttribute("hidden", "true");
    angryResult.setAttribute("hidden", "true");

});

function mostrarIframe(path: string, id: string = "formulario-iframe") {
    formularioContainer.innerHTML = "";
    const formulario = <HTMLIFrameElement> document.createElement("iframe");
    formulario.setAttribute("src", path);
    formulario.setAttribute("id", "formulario-iframe");
    formulario.style.width = "100%";
    formulario.style.height = "100%";
    formularioContainer.append(formulario);
}

function getIframeDoc(id: string): Document {

    const iframe = <HTMLIFrameElement> document.getElementById('formulario-iframe');
    return <Document> iframe.contentDocument || iframe.contentWindow?.document;

}

function generarRoca(innerDoc: Document): ICapturable | boolean {

    console.log("recibiendo selects");
    const grupoMineralSelect = <HTMLSelectElement> innerDoc.getElementById("grupo-mineral");
    const tamanyoGranoSelect = <HTMLSelectElement> innerDoc.getElementById("tamanyo-grano-mineral");
    const texturaSelect = <HTMLSelectElement> innerDoc.getElementById("textura-mineral");
    const clasificacionSelect = <HTMLSelectElement> innerDoc.getElementById("clasificacion-mineral");
    const identificadorInput = <HTMLInputElement> innerDoc.getElementById("identificador-mineral");
    const nombreInput = <HTMLInputElement> innerDoc.getElementById("nombre-mineral");
    const durezaInput = <HTMLInputElement> innerDoc.getElementById("dureza-mineral");
    const tamanyoCristalesInput = <HTMLInputElement> innerDoc.getElementById("tamanyo-cristales-mineral");
    const temperaturaFormacionInput = <HTMLInputElement> innerDoc.getElementById("temperatura-formacion-mineral");
    const estructuraTextarea = <HTMLTextAreaElement> innerDoc.getElementById("estructura-mineral");
    const formaGranoTextarea = <HTMLTextAreaElement> innerDoc.getElementById("forma-grano-mineral");
    
    if (!/[A-Z]{2}[0-9]{4}[A-Z]{2}/.test(identificadorInput.value)) {
        identificadorInput.classList.add("is-invalid");
        return false;
    } else {
        identificadorInput.classList.remove("is-invalid");
    }
    
    const mineral = new Mineral(identificadorInput.value, nombreInput.value, grupoMineralSelect.selectedIndex, parseInt(durezaInput.value), tamanyoGranoSelect.selectedIndex, clasificacionSelect.selectedIndex, parseInt(tamanyoCristalesInput.value), parseInt(temperaturaFormacionInput.value), estructuraTextarea.value, formaGranoTextarea.value, texturaSelect.selectedIndex);
    console.log(mineral);
    
    return mineral;
}

function mostrarResultadoBien(salida: ISalida) {
    // generar el nuevo iframe or not, whatever this fucking thing wants

    formularioContainer.setAttribute("hidden", "true");
    happyResult.removeAttribute("hidden");

    const mostrarGrupoInput = <HTMLInputElement> document.getElementById("mostrar-grupo");
    const mostrarTamanyoInput = <HTMLInputElement> document.getElementById("mostrar-tamanyo-grano");
    const mostrarTexturaInput = <HTMLInputElement> document.getElementById("mostrar-textura");
    const mostrarClasificacionInput = <HTMLInputElement> document.getElementById("mostrar-clasificacion");
    const mostrarTemperaturaInput = <HTMLInputElement> document.getElementById("mostrar-temperatura");

    mostrarGrupoInput.value = salida.dameGrupo();
    mostrarTamanyoInput.value = salida.dameTamanyoGrano();
    mostrarTexturaInput.value = salida.dameTextura();
    mostrarClasificacionInput.value = salida.dameClasificacion();
    mostrarTemperaturaInput.value = salida.dameTemperatura();
}

function mostrarResultadoMal() {
    formularioContainer.setAttribute("hidden", "true");
    angryResult.removeAttribute("hidden");
}

