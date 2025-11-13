var GrupoMinerales;
(function (GrupoMinerales) {
    GrupoMinerales[GrupoMinerales["IGNEAS"] = 0] = "IGNEAS";
    GrupoMinerales[GrupoMinerales["METAMORFICAS"] = 1] = "METAMORFICAS";
    GrupoMinerales[GrupoMinerales["SEDIMENTARIAS"] = 2] = "SEDIMENTARIAS";
})(GrupoMinerales || (GrupoMinerales = {}));
var ClasificacionTamanyoGranos;
(function (ClasificacionTamanyoGranos) {
    ClasificacionTamanyoGranos[ClasificacionTamanyoGranos["MUY_GRUESO"] = 0] = "MUY_GRUESO";
    ClasificacionTamanyoGranos[ClasificacionTamanyoGranos["GRUESO"] = 1] = "GRUESO";
    ClasificacionTamanyoGranos[ClasificacionTamanyoGranos["MEDIO"] = 2] = "MEDIO";
    ClasificacionTamanyoGranos[ClasificacionTamanyoGranos["FINO"] = 3] = "FINO";
})(ClasificacionTamanyoGranos || (ClasificacionTamanyoGranos = {}));
var ClasificacionUso;
(function (ClasificacionUso) {
    ClasificacionUso[ClasificacionUso["CONSTRUCCION"] = 0] = "CONSTRUCCION";
    ClasificacionUso[ClasificacionUso["ORNAMENTAL"] = 1] = "ORNAMENTAL";
    ClasificacionUso[ClasificacionUso["UTENSILIOS"] = 2] = "UTENSILIOS";
    ClasificacionUso[ClasificacionUso["MACHACAR"] = 3] = "MACHACAR";
})(ClasificacionUso || (ClasificacionUso = {}));
var Textura;
(function (Textura) {
    Textura[Textura["VITREA"] = 0] = "VITREA";
    Textura[Textura["AFANITICA"] = 1] = "AFANITICA";
    Textura[Textura["FANERITICA"] = 2] = "FANERITICA";
})(Textura || (Textura = {}));
var Mineral = /** @class */ (function () {
    function Mineral(id, nombre, grupo, dureza, tamanyoGranos, clasificacionTamanyoGranos, clasificacion, temperaturaFormacion, estructura, formaGranos, textura) {
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
    return Mineral;
}());
var LayoutExtendido = /** @class */ (function () {
    function LayoutExtendido() {
        this.anchuraLabel = 3;
        this.anchuraInput = 9;
        this.placeholder = false;
    }
    LayoutExtendido.prototype.dameAnchuraLabel = function () {
        return this.anchuraLabel;
    };
    LayoutExtendido.prototype.dameAnchuraInput = function () {
        return this.anchuraInput;
    };
    LayoutExtendido.prototype.mostrarPlaceholder = function () {
        return this.placeholder;
    };
    return LayoutExtendido;
}());
var LayoutReducido = /** @class */ (function () {
    function LayoutReducido() {
        this.anchuraLabel = 0;
        this.anchuraInput = 6;
        this.placeholder = true;
    }
    LayoutReducido.prototype.dameAnchuraLabel = function () {
        return this.anchuraLabel;
    };
    LayoutReducido.prototype.dameAnchuraInput = function () {
        return this.anchuraInput;
    };
    LayoutReducido.prototype.mostrarPlaceholder = function () {
        return this.placeholder;
    };
    return LayoutReducido;
}());
var reducedLayout = false;
var inputs = document.getElementsByClassName("input-container");
var labels = document.getElementsByClassName("col-form-label");
var toggleLayoutBtn = document.getElementById("toggle-layout");
toggleLayoutBtn === null || toggleLayoutBtn === void 0 ? void 0 : toggleLayoutBtn.addEventListener("click", function (e) {
    e.preventDefault();
    toggleLayout();
});
function toggleLayout() {
    var layout;
    if (reducedLayout) {
        layout = new LayoutReducido();
    }
    else {
        layout = new LayoutExtendido();
    }
    for (var _i = 0, labels_1 = labels; _i < labels_1.length; _i++) {
        var label = labels_1[_i];
        var idk = label.className.split(' ').filter(function (c) {
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
