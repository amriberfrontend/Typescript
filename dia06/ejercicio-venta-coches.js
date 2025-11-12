var Coche = /** @class */ (function () {
    function Coche(id, ruedas, carroceria, volante, precio) {
        this.id = id;
        this.ruedas = ruedas;
        this.carroceria = carroceria;
        this.volante = volante;
        this.precio = precio;
    }
    Coche.prototype.damePrecio = function () {
        return this.precio;
    };
    return Coche;
}());
var Rueda = /** @class */ (function () {
    function Rueda(id, precio, terreno) {
        this.id = id;
        this.precio = precio;
        this.terreno = terreno;
    }
    Rueda.prototype.damePrecio = function () {
        return this.precio;
    };
    return Rueda;
}());
var Carroceria = /** @class */ (function () {
    function Carroceria(id, precio, color) {
        this.id = id;
        this.precio = precio;
        this.color = color;
    }
    Carroceria.prototype.damePrecio = function () {
        return this.precio;
    };
    return Carroceria;
}());
var Volante = /** @class */ (function () {
    function Volante(id, precio) {
        this.id = id;
        this.precio = precio;
    }
    Volante.prototype.damePrecio = function () {
        return this.precio;
    };
    return Volante;
}());
var Terreno;
(function (Terreno) {
    Terreno[Terreno["CARRETERA"] = 0] = "CARRETERA";
    Terreno[Terreno["NIEVE"] = 1] = "NIEVE";
    Terreno[Terreno["TODO_TERRENO"] = 2] = "TODO_TERRENO";
})(Terreno || (Terreno = {}));
var Concesionario = /** @class */ (function () {
    function Concesionario(direccion, products) {
        this.direccion = direccion;
        this.productos = products;
    }
    Concesionario.prototype.damePrecio = function () {
        return this.productos.reduce(function (total, p) { return total + p.damePrecio(); }, 0);
    };
    Concesionario.prototype.añadirCoche = function (coche) {
        this.productos.push(coche);
    };
    return Concesionario;
}());
// create 4 ruedas
var rueda1 = new Rueda("r1", 120, Terreno.CARRETERA);
var rueda2 = new Rueda("r2", 150, Terreno.CARRETERA);
var rueda3 = new Rueda("r3", 130, Terreno.CARRETERA);
var rueda4 = new Rueda("r4", 140, Terreno.CARRETERA);
// create 2 volante ruedas
var volante1 = new Volante('v1', 250);
var volante2 = new Volante("v2", 300);
// create 3 bodies
var carroceria1 = new Carroceria("c1", 2000, "rojo");
var carroceria2 = new Carroceria("c2", 2200, "azul");
var carroceria3 = new Carroceria("c3", 2100, 'negro');
// create 1 car using the 4 ruedas, one carroceria and one volante rueda
var coche1 = new Coche('coche1', [rueda1, rueda2, rueda3, rueda4], carroceria1, volante1, 15000);
// create dealership and add the items
var concesionario = new Concesionario("c/ Principal, 123", [coche1, rueda1, rueda2, rueda3, rueda4, carroceria1, carroceria2, carroceria3, volante1, volante2]);
// optional: show total inventory precio
console.log("Precio total concesionario: " + concesionario.damePrecio());
console.log(concesionario.direccion);
