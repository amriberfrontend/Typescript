var Astronauta = /** @class */ (function () {
    function Astronauta(id, nombre, edad) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
    }
    Astronauta.prototype.dameIdentificador = function () {
        return this.id;
    };
    Astronauta.prototype.dameNombreCompleto = function () {
        return this.nombre;
    };
    Astronauta.prototype.dameEdad = function () {
        return this.edad;
    };
    return Astronauta;
}());
var Mision = /** @class */ (function () {
    function Mision(astronauta, mision) {
        this.astronauta = astronauta;
        this.mision = mision;
    }
    Mision.prototype.analizar = function (roca) {
        return this.mision.validar(roca);
    };
    return Mision;
}());
var Origen;
(function (Origen) {
    Origen[Origen["IGNEA"] = 0] = "IGNEA";
    Origen[Origen["METAMORFICA"] = 1] = "METAMORFICA";
    Origen[Origen["SEDIMENTARIA"] = 2] = "SEDIMENTARIA";
})(Origen || (Origen = {}));
var TamanyoGrano;
(function (TamanyoGrano) {
    TamanyoGrano[TamanyoGrano["MUY_GRUESO"] = 0] = "MUY_GRUESO";
    TamanyoGrano[TamanyoGrano["GRUESO"] = 1] = "GRUESO";
    TamanyoGrano[TamanyoGrano["MEDIO"] = 2] = "MEDIO";
    TamanyoGrano[TamanyoGrano["FINO"] = 3] = "FINO";
})(TamanyoGrano || (TamanyoGrano = {}));
var Clasificacion;
(function (Clasificacion) {
    Clasificacion[Clasificacion["CONSTRUCCION"] = 0] = "CONSTRUCCION";
    Clasificacion[Clasificacion["ORNAMENTAL"] = 1] = "ORNAMENTAL";
    Clasificacion[Clasificacion["UTENSILIOS"] = 2] = "UTENSILIOS";
    Clasificacion[Clasificacion["MACHACADA"] = 3] = "MACHACADA";
})(Clasificacion || (Clasificacion = {}));
var Textura;
(function (Textura) {
    Textura[Textura["VITREA"] = 0] = "VITREA";
    Textura[Textura["AFANITICA"] = 1] = "AFANITICA";
    Textura[Textura["FANERITICA"] = 2] = "FANERITICA";
})(Textura || (Textura = {}));
var Mineral = /** @class */ (function () {
    function Mineral(id, nombre, grupo, dureza, tamanyoGrano, clasificacion, tamanyoCristales, temperaturaFormacion, estructura, formaGranos, textura) {
        this.id = id;
        this.nombre = nombre;
        this.grupo = grupo;
        this.dureza = dureza;
        this.tamanyoGrano = tamanyoGrano;
        this.clasificacion = clasificacion;
        this.tamanyoCristales = tamanyoCristales;
        this.temperaturaFormacion = temperaturaFormacion;
        this.estructura = estructura;
        this.formaGranos = formaGranos;
        this.textura = textura;
    }
    Mineral.prototype.dameGrupo = function () {
        return this.grupo;
    };
    Mineral.prototype.dameTamanyoGrano = function () {
        return this.tamanyoGrano;
    };
    Mineral.prototype.dameTextura = function () {
        return this.textura;
    };
    return Mineral;
}());
var SalidaEuropea = /** @class */ (function () {
    function SalidaEuropea(roca) {
        this.roca = roca;
    }
    SalidaEuropea.prototype.dameRoca = function () {
        throw new Error("Method not implemented.");
    };
    SalidaEuropea.prototype.dameGrupo = function () {
        switch (this.roca.dameGrupo()) {
            case (Origen.IGNEA): return "Ígnea";
            case (Origen.METAMORFICA): return "Metamórfica";
            case (Origen.SEDIMENTARIA): return "Sedimentaria";
            default: return "Desconocido";
        }
    };
    SalidaEuropea.prototype.dameTamanyoGrano = function () {
        switch (this.roca.dameTamanyoGrano()) {
            case (TamanyoGrano.FINO): return "Fino";
            case (TamanyoGrano.MEDIO): return "Medio";
            case (TamanyoGrano.GRUESO): return "Grueso";
            case (TamanyoGrano.MUY_GRUESO): return "Muy Grueso";
            default: return "Desconocido";
        }
    };
    SalidaEuropea.prototype.dameTextura = function () {
        switch (this.roca.dameTextura()) {
            case (Textura.VITREA): return "Vitrea";
            // Que sea sabido que estas palabras no existen
            case (Textura.AFANITICA): return "Afanítica";
            case (Textura.FANERITICA): return "Fanérica";
            default: return "Desconocido";
        }
    };
    SalidaEuropea.prototype.dameClasificacion = function () {
        switch (this.roca.clasificacion) {
            case (Clasificacion.CONSTRUCCION): return "Para la construcción";
            case (Clasificacion.MACHACADA): return "Para machacar";
            case (Clasificacion.ORNAMENTAL): return "Ornamental";
            case (Clasificacion.UTENSILIOS): return "Para hacer utensilios";
            default: return "Desconocido";
        }
    };
    SalidaEuropea.prototype.dameTemperatura = function () {
        var celsius = this.roca.temperaturaFormacion - 273.15;
        return "".concat(celsius, " \u00BAC");
    };
    return SalidaEuropea;
}());
var SalidaAmericana = /** @class */ (function () {
    function SalidaAmericana(roca) {
        this.roca = roca;
    }
    SalidaAmericana.prototype.dameRoca = function () {
        throw new Error("Method not implemented.");
    };
    SalidaAmericana.prototype.dameGrupo = function () {
        switch (this.roca.dameGrupo()) {
            case (Origen.IGNEA): return "Igneous";
            case (Origen.METAMORFICA): return "Metamorphic";
            case (Origen.SEDIMENTARIA): return "Sedimentary";
            default: return "Unknown";
        }
    };
    SalidaAmericana.prototype.dameTamanyoGrano = function () {
        switch (this.roca.dameTamanyoGrano()) {
            case (TamanyoGrano.FINO): return "Fine";
            case (TamanyoGrano.MEDIO): return "Medium";
            case (TamanyoGrano.GRUESO): return "Thick";
            case (TamanyoGrano.MUY_GRUESO): return "Very Thick";
            default: return "Unknown";
        }
    };
    SalidaAmericana.prototype.dameTextura = function () {
        switch (this.roca.dameTextura()) {
            case (Textura.VITREA): return "Glassy";
            case (Textura.AFANITICA): return "Aphanite-like";
            case (Textura.FANERITICA): return "Phanerite-like";
            default: return "Unknown";
        }
    };
    SalidaAmericana.prototype.dameClasificacion = function () {
        switch (this.roca.clasificacion) {
            case (Clasificacion.CONSTRUCCION): return "For construction";
            case (Clasificacion.MACHACADA): return "To crush";
            case (Clasificacion.ORNAMENTAL): return "Decorative";
            case (Clasificacion.UTENSILIOS): return "For making tools";
            default: return "Unknown";
        }
    };
    SalidaAmericana.prototype.dameTemperatura = function () {
        var fahrenheit = this.roca.temperaturaFormacion - 1.8 - 459.67;
        return "".concat(fahrenheit, " \u00BAF");
    };
    return SalidaAmericana;
}());
var CriterioIgnea = /** @class */ (function () {
    function CriterioIgnea() {
        this.grupo = Origen.IGNEA;
        this.tamanyoGrano = TamanyoGrano.GRUESO;
    }
    CriterioIgnea.prototype.validar = function (mineral) {
        return mineral.dameGrupo() === this.grupo && mineral.dameTamanyoGrano() === this.tamanyoGrano;
    };
    return CriterioIgnea;
}());
var CriterioMetamorfica = /** @class */ (function () {
    function CriterioMetamorfica() {
        this.grupo = Origen.METAMORFICA;
        this.tamanyoGrano = [TamanyoGrano.MEDIO, TamanyoGrano.FINO];
        this.textura = Textura.VITREA;
    }
    CriterioMetamorfica.prototype.validar = function (mineral) {
        return mineral.dameGrupo() === this.grupo && mineral.dameTamanyoGrano() in this.tamanyoGrano && mineral.dameTextura() === this.textura;
    };
    return CriterioMetamorfica;
}());
var CriterioSedimentaria = /** @class */ (function () {
    function CriterioSedimentaria() {
        this.grupo = Origen.IGNEA;
        this.tamanyoGrano = TamanyoGrano.GRUESO;
    }
    CriterioSedimentaria.prototype.validar = function (mineral) {
        return mineral.dameGrupo() === this.grupo && mineral.dameTamanyoGrano() === this.tamanyoGrano;
    };
    return CriterioSedimentaria;
}());
var agmunsen = new Astronauta("PIL-001", "Agmunsen", 32);
var misionIgnea = new Mision(agmunsen, new CriterioIgnea());
console.log("inicio script");
var toggleLayoutCheckBox = document.getElementById("toggle-layout");
var toggleLayoutCheckBoxDiv = document.getElementById("toggle-layout-div");
var formularioContainer = document.getElementById("formulario-container");
var comprobarBtn = document.getElementById("comprobar");
var volverBtn = document.getElementById("volver");
var happyResult = document.getElementById("happy-result");
var angryResult = document.getElementById("angry-result");
mostrarIframe("./formulario-extendido.html");
toggleLayoutCheckBox.addEventListener("click", function () {
    if (toggleLayoutCheckBox.checked) {
        mostrarIframe("./formulario-reducido.html");
    }
    else {
        mostrarIframe("./formulario-extendido.html");
    }
});
comprobarBtn.addEventListener("click", function () {
    var mineral = generarRoca(getIframeDoc("formulario-iframe"));
    if (mineral !== false) {
        var salida = new SalidaAmericana(mineral);
        misionIgnea.salida = salida;
        if (misionIgnea.analizar(mineral)) {
            mostrarResultadoBien(salida);
            toggleLayoutCheckBoxDiv.setAttribute("hidden", "true");
            volverBtn.removeAttribute("hidden");
        }
        else {
            toggleLayoutCheckBoxDiv.setAttribute("hidden", "true");
            volverBtn.removeAttribute("hidden");
            mostrarResultadoMal();
        }
    }
});
volverBtn.addEventListener("click", function () {
    volverBtn.setAttribute("hidden", "true");
    toggleLayoutCheckBoxDiv.removeAttribute("hidden");
    formularioContainer.removeAttribute("hidden");
    happyResult.setAttribute("hidden", "true");
    angryResult.setAttribute("hidden", "true");
});
function mostrarIframe(path, id) {
    if (id === void 0) { id = "formulario-iframe"; }
    formularioContainer.innerHTML = "";
    var formulario = document.createElement("iframe");
    formulario.setAttribute("src", path);
    formulario.setAttribute("id", "formulario-iframe");
    formulario.style.width = "100%";
    formulario.style.height = "100%";
    formularioContainer.append(formulario);
}
function getIframeDoc(id) {
    var _a;
    var iframe = document.getElementById('formulario-iframe');
    return iframe.contentDocument || ((_a = iframe.contentWindow) === null || _a === void 0 ? void 0 : _a.document);
}
function generarRoca(innerDoc) {
    console.log("recibiendo selects");
    var grupoMineralSelect = innerDoc.getElementById("grupo-mineral");
    var tamanyoGranoSelect = innerDoc.getElementById("tamanyo-grano-mineral");
    var texturaSelect = innerDoc.getElementById("textura-mineral");
    var clasificacionSelect = innerDoc.getElementById("clasificacion-mineral");
    var identificadorInput = innerDoc.getElementById("identificador-mineral");
    var nombreInput = innerDoc.getElementById("nombre-mineral");
    var durezaInput = innerDoc.getElementById("dureza-mineral");
    var tamanyoCristalesInput = innerDoc.getElementById("tamanyo-cristales-mineral");
    var temperaturaFormacionInput = innerDoc.getElementById("temperatura-formacion-mineral");
    var estructuraTextarea = innerDoc.getElementById("estructura-mineral");
    var formaGranoTextarea = innerDoc.getElementById("forma-grano-mineral");
    if (!/[A-Z]{2}[0-9]{4}[A-Z]{2}/.test(identificadorInput.value)) {
        identificadorInput.classList.add("is-invalid");
        return false;
    }
    else {
        identificadorInput.classList.remove("is-invalid");
    }
    var mineral = new Mineral(identificadorInput.value, nombreInput.value, grupoMineralSelect.selectedIndex, parseInt(durezaInput.value), tamanyoGranoSelect.selectedIndex, clasificacionSelect.selectedIndex, parseInt(tamanyoCristalesInput.value), parseInt(temperaturaFormacionInput.value), estructuraTextarea.value, formaGranoTextarea.value, texturaSelect.selectedIndex);
    console.log(mineral);
    return mineral;
}
function mostrarResultadoBien(salida) {
    // generar el nuevo iframe or not, whatever this fucking thing wants
    formularioContainer.setAttribute("hidden", "true");
    happyResult.removeAttribute("hidden");
    var mostrarGrupoInput = document.getElementById("mostrar-grupo");
    var mostrarTamanyoInput = document.getElementById("mostrar-tamanyo-grano");
    var mostrarTexturaInput = document.getElementById("mostrar-textura");
    var mostrarClasificacionInput = document.getElementById("mostrar-clasificacion");
    var mostrarTemperaturaInput = document.getElementById("mostrar-temperatura");
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
