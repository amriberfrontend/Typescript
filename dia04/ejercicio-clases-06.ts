const nombres01 = [
    {nombre: "Andra", descripcion: `Nombre femenino de origen griego que tiene un bonito significado: “fuerte y valiente”.`},
    {nombre: "Aneu", descripcion: `Este nombre hace referencia a la virgen de Aneu, situada en el pueblo de la Guingueta de Aneu, en la zona catalana del Pallars Sobirà. Describe a una chica idealista, solitaria, pero que ama la naturaleza.`},
    {nombre: "Arlet", descripcion: `Este nombre procede del francés Arlette, que describe a una chica femenina, coqueta y bohemia.`},
    {nombre: "Ehud", descripcion: `Este nombre raro para niña es de origen vasco, aunque su significado es incierto. Sin embargo, parece ser que hace referencia a un ave.`},
    {nombre: "Indivar", descripcion: `Nombre de origen vasco con un significado relacionado con las estrellas. Designa a una mujer soñadora, romántica y con ganas de conocer el mundo que le rodea.`},
    {nombre: "Samay", descripcion: `Nombre de origen quechua con un significado que hace referencia a la paz y al sosiego. Describe a una mujer delicada, sensual, reflexiva y con mucha paciencia.`},
    {nombre: "Sança", descripcion: `Este nombre raro de niña hace referencia a una mujer visionaria, idealista, sensible, perfeccionista y un tanto distante.`},
    {nombre: "Tanit", descripcion: `Este nombre raro para niña es de origen fenicio. Tanit hace referencia a la diosa más importante de la mitología cartaginesa.`},
    {nombre: "Uxia", descripcion: `Nombre griego que significa "bien nacida". Suele designar a una mujer fuerte, noble y con mucho afán de superación.`},
    {nombre: "Zenda", descripcion: `De origen persa, su significado habla de una mujer sagrada.`}
];
const nombres02 = [
    {nombre: "Abba", descripcion: `Este nombre hace referencia a San Abba, tío de San Pablo. Describe a un hombre generoso, sociable y muy leal con sus amistades.`},
    {nombre: "Accfred", descripcion: `Este es el nombre del hijo pequeño de Oliba I de Carcassonne, que fue Duque de Aquitania (Francia). Designa a un hombre noble, leal y generoso.`},
    {nombre: "Areu", descripcion: `Este nombre es de origen catalán y hace referencia a un pueblo del Valle Ferrera o Vallferrera (Valle del Hierro), situado en el Pallars Sobirà (Cataluña).`},
    {nombre: "Drac", descripcion: `Se trata de un nombre catalán y su significado es "dragón". Describe a un hombre muy valiente, con mucho coraje y perseverancia.`},
    {nombre: "Guim", descripcion: `Es un nombre catalán, que procede del nombre alemán Will. Tiene un bonito signficado: "voluntad".`},
    {nombre: "Iol", descripcion: `Este nombre raro para niño describe a un hombre generoso, pasional, altruista e ingenioso, pero un tanto egoísta y frágil.`},
    {nombre: "Kilian", descripcion: `Nombre de origen celta y transmitido a través de la tradición medieval irlandesa. Significa "pequeño guerrero" y está relacionado con hombres valientes, fuertes, constantes y con cualidades físicas muy destacadas.`},
    {nombre: "Mirt", descripcion: `Define a un hombre compasivo, servicial y justo, pero un poco solitario. Se cree que procede de la palabra "mirto", un arbusto que, en la antigua Grecia, era considerado uno de los símbolos de la victoria.`},
    {nombre: "Yannick", descripcion: `De origen francés y con un carácter exótico, se trata de la versión francófona de uno de los nombres más frecuentes para niños en Francia, Jean o Juan.`},
    {nombre: "Zigor", descripcion: `De origen vasco y significado incierto, el nombre de Zigor aporta un toque de misterio y seducción poco habitual en los nombres de niños.`},
    {nombre: "Tanit", descripcion: `Este nombre raro para niña es de origen fenicio. Tanit hace referencia a la diosa más importante de la mitología cartaginesa.`}
];



function mostrarNombres(nombres: {nombre:string, descripcion: string}[]) {
    for (const nombre of nombres) {
        console.log(nombre.nombre);
    }
}

function comprobarLongitud(nombre01: {nombre:string, descripcion: string}): boolean {
    return nombre01.nombre.length > 2;
}

function comprobarMasDe6(nombre01: {nombre:string, descripcion: string}): boolean {
    return nombre01.nombre.length > 6;
}

function filtrarPorI(nombre01: {nombre:string, descripcion: string}): boolean {
    const nombreString: string = nombre01.nombre;
    return nombreString.toLowerCase().localeCompare('i') > 0;
}

function palindromo(nombres: {nombre: string, descripcion: string}[]): string[] {
    const palindromos = [];
    for (const nombre of nombres) {
        palindromos.push(nombre.nombre + nombre.nombre.split('').reverse().join(''));

    }
    return palindromos;
}

function runningTotal(total: number, num: number) {
    return total + num;
}

function ordernarPorNombre(nombre1: {nombre: string, descripcion: string}, nombre2: {nombre: string, descripcion: string}): number {
    return nombre1.nombre.localeCompare(nombre2.nombre);
}



console.log("=== Juntar nombres ===");
const nombresJuntos = nombres01.concat(nombres02);
mostrarNombres(nombresJuntos);

console.log("\n=== Comprobar que todos tengan más de 2 characteres ===");
console.log(nombres01.every(comprobarLongitud));

console.log("\n=== Mostrar los mayores a 'i' ===")
let nombres01Filtrados = nombres01.filter(filtrarPorI);
let nombres02Filtrados = nombres02.filter(filtrarPorI);
mostrarNombres(nombres01Filtrados);
mostrarNombres(nombres02Filtrados);

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
const longitudes01 = nombres01.map(nombre => nombre.nombre.length);

console.log(longitudes01);


// Eliminar último elemeneto de cada lista
nombres01.pop();
nombres02.pop();

// Añadir Jacinto
nombres01.push({nombre: "Jacinto", descripcion: ``});
nombres02.push({nombre: "Jacinto", descripcion: ``});

const totalLongitudes01 = longitudes01.reduce(runningTotal);
console.log("Total longitudes: " + totalLongitudes01);


console.log("\n=== Subarrays ===");
const nombres01Recortado = nombres01.slice(1,7);
const nombres02Recortado = nombres02.slice(4,6);

const nombresJuntosRecortados = nombres01Recortado.concat(nombres02Recortado);
mostrarNombres(nombresJuntosRecortados);



console.log("\n=== ¿>6 caracteres? ===");
console.log(`nombres01 tiene al menos un elemento con 6 characteres: ${nombres01.some(comprobarMasDe6)}`);
console.log(`nombres02 tiene al menos un elemento con 6 characteres: ${nombres02.some(comprobarMasDe6)}`);

console.log("\n=== Ordenados alfabéticamente ===");
nombres01.sort(ordernarPorNombre);
nombres02.sort(ordernarPorNombre);
console.log("- Nombres 01 -");
mostrarNombres(nombres01);
console.log("- Nombres 02 -");
mostrarNombres(nombres02);

console.log("\n=== Invertidos ===");
nombres01.reverse();
nombres02.reverse();
console.log("- Nombres 01 -");
mostrarNombres(nombres01);
console.log("- Nombres 02 -");
mostrarNombres(nombres02);