interface IPiloto {
    dameID(): string;
    dameNombre(): string;
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
    dameID(): string {
        return this.id;
    }
    dameNombre(): string {
        return this.nombre;
    }
    dameEdad(): number {
        return this.edad;
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
    dameGrupo(): Origen;
    dameTamanyoGrano(): TamanyoGrano;
    dameTextura(): Textura;
}

class Mineral implements ICapturable{
    constructor(
        // public id: string,
        // public nombre: string,
        public grupo: Origen,
        // public dureza: number,
        public tamanyoGrano: TamanyoGrano,
        // public clasificacion: Clasificacion,
        // public tamanyoCristales: number,
        // public temperaturaFormacion: number,
        // public estructura: string,
        // public formaGranos: string,
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


interface ICriterioValidacion {
    dameGrupo(): Origen;
    dameTamanyoGrano(): TamanyoGrano;
}

class CriterioIgnea implements ICriterioValidacion {
    grupo: Origen = Origen.IGNEA;
    tamanyoGrano: TamanyoGrano = TamanyoGrano.GRUESO;
    dameGrupo(): Origen {
        return this.grupo;
    }
    dameTamanyoGrano(): TamanyoGrano {
        return this.tamanyoGrano;
    }
    
}

class CriterioMetamorfica implements ICriterioValidacion {
    grupo: Origen = Origen.METAMORFICA;
    tamanyoGrano: TamanyoGrano[] = [TamanyoGrano.MEDIO, TamanyoGrano.FINO];
    textura: Textura = Textura.VITREA;
    dameGrupo(): Origen {
        return this.grupo;
    }
    dameTamanyoGrano(): TamanyoGrano {
        return this.tamanyoGrano;
    }
    
}

class CriterioIgnea implements ICriterioValidacion {
    grupo: Origen = Origen.IGNEA;
    tamanyoGrano: TamanyoGrano = TamanyoGrano.GRUESO;
    dameGrupo(): Origen {
        return this.grupo;
    }
    dameTamanyoGrano(): TamanyoGrano {
        return this.tamanyoGrano;
    }
    
}





console.log("inicio script");
const toggleLayoutCheckBox = <HTMLInputElement> document.getElementById("toggle-layout");
const formularioContainer = <HTMLDivElement> document.getElementById("formulario-container");
const comprobarBtn = <HTMLButtonElement> document.getElementById("comprobar");

mostrarFormularioExtendido();

toggleLayoutCheckBox.addEventListener("click", function() {
    formularioContainer.innerHTML = "";
    if (toggleLayoutCheckBox.checked) {
        mostrarFormularioReducido();
    } else {
        mostrarFormularioExtendido();
    }
});

comprobarBtn.addEventListener("click", function() {

    const iframe = <HTMLIFrameElement> document.getElementById('formulario-iframe');
    const innerDoc = <Document> iframe.contentDocument || iframe.contentWindow?.document;

    
    console.log("recibiendo selects");
    const grupoMineralSelect = <HTMLSelectElement> innerDoc.getElementById("grupo-mineral");
    const tamanyoGranoSelect = <HTMLSelectElement> innerDoc.getElementById("tamanyo-grano-mineral");
    const texturaSelect = <HTMLSelectElement> innerDoc.getElementById("textura-mineral");
    
    console.log("asignando valores");
    
    const mineral: ICapturable = new Mineral(grupoMineralSelect.selectedIndex, tamanyoGranoSelect.selectedIndex, texturaSelect.selectedIndex)
    
    console.log(mineral.dameGrupo());
});

function mostrarFormularioExtendido() {
    const formulario = <HTMLIFrameElement> document.createElement("iframe");
    formulario.setAttribute("src", "./formulario-extendido.html");
    formulario.setAttribute("id", "formulario-iframe");
    formulario.style.width = "100%";
    formulario.style.height = "500px";
    formularioContainer.append(formulario);
}
function mostrarFormularioReducido() {
    const formulario = <HTMLIFrameElement> document.createElement("iframe");
    formulario.setAttribute("src", "./formulario-reducido.html");
    formulario.setAttribute("id", "formulario-iframe");
    formulario.style.width = "100%";
    formulario.style.height = "500px";
    formularioContainer.append(formulario);
}

