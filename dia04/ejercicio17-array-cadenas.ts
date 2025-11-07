const nombres01 = [
    {nombre: "Andra", descripcion: ""},
    {nombre: "Aneu", descripcion: ""},
    {nombre: "Arlet", descripcion: ""},
    {nombre: "Ehud", descripcion: ""},
    {nombre: "Indivar", descripcion: ""},
    {nombre: "Samay", descripcion: ""},
    {nombre: "Sança", descripcion: ""},
    {nombre: "Tanit", descripcion: ""},
    {nombre: "Uxia", descripcion: ""},
    {nombre: "Zenda", descripcion: ""}
]
const nombres02 = [
    {nombre: "Abba", descripcion: ""},
    {nombre: "Accfred", descripcion: ""},
    {nombre: "Areu", descripcion: ""},
    {nombre: "Drac", descripcion: ""},
    {nombre: "Guim", descripcion: ""},
    {nombre: "Iol", descripcion: ""},
    {nombre: "Kilian", descripcion: ""},
    {nombre: "Mirt", descripcion: ""},
    {nombre: "Yannick", descripcion: ""},
    {nombre: "Zigor", descripcion: ""},
    {nombre: "Tanit", descripcion: ""}
]

function mostrarNombres(nombres) {
    for (const nombre of nombresJuntos) {
        console.log(nombre.nombre);
    }
}

function comprobarLongitud(nombre1): boolean {
    return nombre1.nombre.length > 2
}

function filtrarPorI(nombre): number {
    return 'b'.localeCompare('a');
}

const nombresJuntos = nombres01.concat(nombres02);

mostrarNombres(nombresJuntos);

console.log(nombres01.every(comprobarLongitud));

console.log(nombres01.filter(filtrarPorI))


