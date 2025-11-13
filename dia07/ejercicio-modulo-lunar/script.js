var Origen = ["Ígneas", "Metamórficas", "Sedimentarias"];
var TamanyoGrano = ["Muy grueso", "Grueso", "Medio", "Fino"];
var Clasificacion = ["Construcción", "Ornamental", "Utensilios", "Machacada"];
var Textura = ["Vitrea", "Afanítica", "Fanerítica"];
var entradaReducida = false;
var mineralForm = document.getElementById("mineral-form");
var toggleLayoutBtn = document.getElementById("toggle-layout");
toggleLayoutBtn.addEventListener("click", function () {
    entradaReducida = !entradaReducida;
    if (entradaReducida) {
        generarFormularioReducido(fields);
    }
    else {
        generarFormularioExtendido(fields);
    }
});
var fields = [
    { label: "ID del mineral", type: "text", values: [] },
    { label: "Nombre del mineral", type: "text", values: [] },
    { label: "Grupo", type: "select", values: Origen },
    { label: "Dureza", type: "number", values: [0, 10] },
    { label: "Tamaño del grano", type: "select", values: TamanyoGrano },
    { label: "Clasificación", type: "select", values: Clasificacion },
    { label: "Tamaño de los cristales", type: "number", values: [0, 10] },
    { label: "Temperatura de formación", type: "number", values: [-100, 100] },
    { label: "Estructura", type: "textarea", values: [] },
    { label: "Forma de los granos", type: "textarea", values: [] },
    { label: "Textura", type: "select", values: Textura }
];
generarFormularioExtendido(fields);
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
    return Mineral;
}());
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
function generarFormularioReducido(campos) {
    mineralForm.innerHTML = "";
    for (var _i = 0, campos_1 = campos; _i < campos_1.length; _i++) {
        var campo = campos_1[_i];
        var campoDiv = document.createElement("div");
        campoDiv.classList.add("mb-3");
        mineralForm.append(campoDiv);
        var inputDiv = document.createElement("div");
        inputDiv.classList.add("col-9", "mx-auto", "mineral-form__input-container");
        campoDiv.append(inputDiv);
        switch (campo.type) {
            case ("number"): {
                var input = document.createElement("input");
                input.classList.add("form-control");
                input.setAttribute("type", "number");
                input.setAttribute("placeholder", campo.label);
                inputDiv.append(input);
                if (campo.values.length > 0) {
                    input.setAttribute("min", "".concat(campo.values[0]));
                    input.setAttribute("max", "".concat(campo.values[1]));
                }
                break;
            }
            case ("select"): {
                var input = document.createElement("select");
                input.classList.add("form-select");
                input.setAttribute("placeholder", campo.label);
                inputDiv.append(input);
                var option = document.createElement("option");
                option.setAttribute("selected", "true");
                option.textContent = "".concat(campo.label);
                input.append(option);
                for (var i = 0; i < campo.values.length; i++) {
                    var option_1 = document.createElement("option");
                    option_1.setAttribute("value", "".concat(i));
                    option_1.textContent = "".concat(campo.values[i]);
                    input.append(option_1);
                }
                break;
            }
            case ("textarea"): {
                var input = document.createElement("textarea");
                input.classList.add("form-control");
                input.setAttribute("placeholder", campo.label);
                inputDiv.append(input);
                break;
            }
            default: {
                var input = document.createElement("input");
                input.classList.add("form-control");
                input.setAttribute("type", campo.type);
                input.setAttribute("placeholder", campo.label);
                inputDiv.append(input);
                break;
            }
        }
    }
}
function generarFormularioExtendido(campos) {
    mineralForm.innerHTML = "";
    for (var _i = 0, campos_2 = campos; _i < campos_2.length; _i++) {
        var campo = campos_2[_i];
        var campoDiv = document.createElement("div");
        campoDiv.classList.add("mb-3", "row");
        mineralForm.append(campoDiv);
        var label = document.createElement("label");
        label.classList.add("col-3", "col-form-label", "text-end", "mineral-form__label");
        label.textContent = campo.label + ":";
        campoDiv.append(label);
        var inputDiv = document.createElement("div");
        inputDiv.classList.add("col-9", "mineral-form__input-container");
        campoDiv.append(inputDiv);
        switch (campo.type) {
            case ("number"): {
                var input = document.createElement("input");
                input.classList.add("form-control");
                input.setAttribute("type", "number");
                inputDiv.append(input);
                if (campo.values.length > 0) {
                    input.setAttribute("min", "".concat(campo.values[0]));
                    input.setAttribute("max", "".concat(campo.values[1]));
                }
                break;
            }
            case ("select"): {
                var input = document.createElement("select");
                input.classList.add("form-select");
                inputDiv.append(input);
                for (var i = 0; i < campo.values.length; i++) {
                    var option = document.createElement("option");
                    option.setAttribute("value", "".concat(i));
                    option.textContent = "".concat(campo.values[i]);
                    input.append(option);
                }
                break;
            }
            case ("textarea"): {
                var input = document.createElement("textarea");
                input.classList.add("form-control");
                inputDiv.append(input);
                break;
            }
            default: {
                var input = document.createElement("input");
                input.classList.add("form-control");
                input.setAttribute("type", campo.type);
                inputDiv.append(input);
                break;
            }
        }
    }
}
