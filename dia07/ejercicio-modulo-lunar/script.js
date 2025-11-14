var Astronauta = /** @class */ (function () {
    function Astronauta(id, nombre, edad) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
    }
    Astronauta.prototype.dameID = function () {
        return this.id;
    };
    Astronauta.prototype.dameNombre = function () {
        return this.nombre;
    };
    Astronauta.prototype.dameEdad = function () {
        return this.edad;
    };
    return Astronauta;
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
    function Mineral(
    // public id: string,
    // public nombre: string,
    grupo, 
    // public dureza: number,
    tamanyoGrano, 
    // public clasificacion: Clasificacion,
    // public tamanyoCristales: number,
    // public temperaturaFormacion: number,
    // public estructura: string,
    // public formaGranos: string,
    textura) {
        this.grupo = grupo;
        this.tamanyoGrano = tamanyoGrano;
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
console.log("inicio script");
var toggleLayoutCheckBox = document.getElementById("toggle-layout");
var formularioContainer = document.getElementById("formulario-container");
var comprobarBtn = document.getElementById("comprobar");
mostrarFormularioExtendido();
toggleLayoutCheckBox.addEventListener("click", function () {
    formularioContainer.innerHTML = "";
    if (toggleLayoutCheckBox.checked) {
        mostrarFormularioReducido();
    }
    else {
        mostrarFormularioExtendido();
    }
});
comprobarBtn.addEventListener("click", function () {
    var _a;
    var iframe = document.getElementById('formulario-iframe');
    var innerDoc = iframe.contentDocument || ((_a = iframe.contentWindow) === null || _a === void 0 ? void 0 : _a.document);
    console.log("recibiendo selects");
    var grupoMineralSelect = innerDoc.getElementById("grupo-mineral");
    var tamanyoGranoSelect = innerDoc.getElementById("tamanyo-grano-mineral");
    var texturaSelect = innerDoc.getElementById("textura-mineral");
    console.log("asignando valores");
    var mineral = new Mineral(grupoMineralSelect.selectedIndex, tamanyoGranoSelect.selectedIndex, texturaSelect.selectedIndex);
    console.log(mineral.dameGrupo());
});
function mostrarFormularioExtendido() {
    var formulario = document.createElement("iframe");
    formulario.setAttribute("src", "./formulario-extendido.html");
    formulario.setAttribute("id", "formulario-iframe");
    formulario.style.width = "100%";
    formulario.style.height = "500px";
    formularioContainer.append(formulario);
}
function mostrarFormularioReducido() {
    var formulario = document.createElement("iframe");
    formulario.setAttribute("src", "./formulario-reducido.html");
    formulario.setAttribute("id", "formulario-iframe");
    formulario.style.width = "100%";
    formulario.style.height = "500px";
    formularioContainer.append(formulario);
}
