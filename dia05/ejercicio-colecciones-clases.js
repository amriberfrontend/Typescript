var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Regalo = /** @class */ (function () {
    function Regalo(identificador, precioCompra, precioVenta) {
        if (!validarIdentificador(identificador)) {
            throw new Error("Identificador no válido");
        }
        this.identificador = identificador;
        this.precioCompra = precioCompra;
        this.precioVenta = precioVenta;
    }
    Regalo.prototype.beneficio = function () {
        return this.precioVenta - this.precioCompra;
    };
    return Regalo;
}());
var JarronMing = /** @class */ (function (_super) {
    __extends(JarronMing, _super);
    function JarronMing(identificador) {
        return _super.call(this, identificador, 100, 200) || this;
    }
    return JarronMing;
}(Regalo));
var TazaMong = /** @class */ (function (_super) {
    __extends(TazaMong, _super);
    function TazaMong(identificador) {
        return _super.call(this, identificador, 10, 22) || this;
    }
    return TazaMong;
}(Regalo));
var ColganteChulin = /** @class */ (function (_super) {
    __extends(ColganteChulin, _super);
    function ColganteChulin(identificador) {
        return _super.call(this, identificador, 120, 140) || this;
    }
    return ColganteChulin;
}(Regalo));
function validarIdentificador(identificador) {
    return /[A-Z]{3}[0-9]{4}/.test(identificador);
}
function suma(total, num) {
    return total + num;
}
function ordernarPorCompra(regalo1, regalo2) {
    if (regalo1.precioCompra > regalo2.precioCompra) {
        return 1;
    }
    if (regalo1.precioCompra < regalo2.precioCompra) {
        return -1;
    }
    return 0;
}
function ordernarPorVenta(regalo1, regalo2) {
    if (regalo1.precioVenta > regalo2.precioVenta) {
        return 1;
    }
    if (regalo1.precioVenta < regalo2.precioVenta) {
        return -1;
    }
    return 0;
}
function ordenarPorBeneficio(regalo1, regalo2) {
    if (regalo1.beneficio() > regalo2.beneficio()) {
        return 1;
    }
    if (regalo1.beneficio() < regalo2.beneficio()) {
        return -1;
    }
    return 0;
}
function mostrarRegalos(regalos) {
    for (var _i = 0, regalos_1 = regalos; _i < regalos_1.length; _i++) {
        var regalo = regalos_1[_i];
        console.log("Regalo ".concat(regalo.identificador, "\n            \rPrecio de compra: ").concat(regalo.precioCompra, "\n            Precio de venta: ").concat(regalo.precioVenta, "\n            Beneficios: ").concat(regalo.beneficio(), " \u20AC"));
    }
}
var jarron1 = new JarronMing("JAR0001");
var jarron2 = new JarronMing("JAR0002");
var taza1 = new TazaMong("TAZ0001");
var taza2 = new TazaMong("TAZ0002");
var colgante1 = new ColganteChulin("COL0001");
var colgante2 = new ColganteChulin("COL0002");
var regalos = [jarron1, jarron2, taza1, taza2, colgante1, colgante2];
regalos.sort(ordernarPorVenta);
mostrarRegalos(regalos);
var preciosCompra = regalos.map(function (regalo) { return regalo.precioCompra; });
var preciosVenta = regalos.map(function (regalo) { return regalo.precioVenta; });
var beneficios = regalos.map(function (regalo) { return regalo.beneficio(); });
var totalCompra = preciosCompra.reduce(suma);
var totalVenta = preciosVenta.reduce(suma);
var totalBeneficios = beneficios.reduce(suma);
var mediaCompra = totalCompra / preciosCompra.length;
var mediaVenta = totalVenta / preciosVenta.length;
