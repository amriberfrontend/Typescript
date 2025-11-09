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

function comprobarLongitud(nombre01): boolean {
    return nombre01.nombre.length > 2
}

function comprobarMasDe6(nombre01: {nombre:string, descripcion: string}): boolean {
    return nombre01.nombre.length > 6
}

function filtrarPorI(nombre01): boolean {
    const nombreString: string = nombre01.nombre;
    return nombreString.toLowerCase().localeCompare('i') > 0;
}

function palindromo(nombres: {nombre: string, descripcion: string}[]): string[] {
    const palindromos = [];
    for (const nombre of nombres) [
        palindromos.push(nombre.nombre + nombre.nombre.split('').reverse().join(''))
    ]
    return palindromos;
}

function runningTotal(total: number, num: number) {
    return total + num;
}



console.log("=== Juntar nombres ===");
const nombresJuntos = nombres01.concat(nombres02);
mostrarNombres(nombresJuntos);

console.log("\n=== Comprobar que todos tengan más de 2 characteres ===")
console.log(nombres01.every(comprobarLongitud));

console.log("\n=== Mostrar los mayores a 'i' ===")
let nombres01Filtrados = nombres01.filter(filtrarPorI);
let nombres02Filtrados = nombres02.filter(filtrarPorI);
for (const nombre of nombres01Filtrados) {
    console.log(nombre.nombre);
}
for (const nombre of nombres02Filtrados) {
    console.log(nombre.nombre);
}

console.log("\n=== Palíndromos ===");
const palindromos01 = palindromo(nombres01);
const palindromos02 = palindromo(nombres02);
for (const palindromo of palindromos01) {
    console.log(palindromo);
}
for (const palindromo of palindromos02) {
    console.log(palindromo);
}

console.log("\n=== Encontrar Tanit ===");
const tanit1 = nombres01.map(nombre => nombre.nombre).indexOf("Tanit");
const tanit2 = nombres02.map(nombre => nombre.nombre).indexOf("Tanit");
console.log(`Tanit está en la posición ${tanit1} de nombres01`);
console.log(`Tanit está en la posición ${tanit2} de nombres02`);

console.log("-- Y Jacinto ---");
const jacinto1 = nombres01.map(nombre => nombre.nombre).indexOf("Jacinto");
const jacinto2 = nombres02.map(nombre => nombre.nombre).indexOf("Jacinto");
console.log(`Jacinto está en la posición ${jacinto1} de nombres01`);
console.log(`Jacinto está en la posición ${jacinto2} de nombres02`);


console.log("\n=== Separar con comas ===");
console.log(nombresJuntos.map(nombre => nombre.nombre).join(', '));


console.log("\n=== Array de longitudes ===");
const longitudes01 = []
for (const nombre of nombres01) {
    longitudes01.push(nombre.nombre.length);
}

console.log(longitudes01);


// Eliminar último elemeneto de cada lista
nombres01.pop();
nombres02.pop();

// Añadir Jacinto
nombres01.push({nombre: "Jacinto", descripcion: ""});
nombres02.push({nombre: "Jacinto", descripcion: ""});

const totalLongitudes01 = longitudes01.reduce(runningTotal);
console.log("Total longitudes: " + totalLongitudes01)


console.log("\n=== Subarrays ===")
const nombres01Recortado = nombres01.slice(1,7);
const nombres02Recortado = nombres02.slice(4,6);

const nombresJuntosRecortados = nombres01Recortado.concat(nombres02Recortado);
for (const nombre of nombresJuntosRecortados) {
    console.log(nombre.nombre);
}



console.log("\n=== ¿>6 caracteres? ===")
console.log(`nombres01 tiene al menos un elemento con 6 characteres: ${nombres01.some(comprobarMasDe6)}`);
console.log(`nombres02 tiene al menos un elemento con 6 characteres: ${nombres02.some(comprobarMasDe6)}`);


nombres01.sort()
nombres02.sort()
nombres01.reverse()
nombres02.reverse()