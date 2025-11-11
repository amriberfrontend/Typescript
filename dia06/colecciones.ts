interface ICadenable
{
    TodosLosElementosMayorQue(numeroCaracteres : number) : Boolean
    AlgunoDeLosElementosMayorQue(numeroCaracteres:  number): Boolean
    MuestraContenidoArray(): void
    FiltraPorPrimeraLetra(letra: string):string[]
    InvierteCadenas(): string[]
    IndiceDeElemento(elemento: string):number
    ConcatenaElementosConComa(): string
    ArrayConLongitudDeLosElementos(): number[]
    EliminarUltimoElemento(): void;
    AñadirNuevoElemento(elemento: string): void
    RunningTotalsSobreLaLongitudDeLosElementos():number
    DameRebanadaDeArray(indiceInicial: number, indiceFinal: number): string[]
    AñadirNuevosElementosAlArray(cadenas :string[]):void
    Ordenar(): void
    OrdenarInvertido(): void
}
class ProcesoCadenasV01 implements ICadenable
{
    private elementos: string[];

    constructor(elementos: string[]) {
        this.elementos = elementos;
    }
    AlgunoDeLosElementosMayorQue(numeroCaracteres: number): Boolean {
        return this.elementos.some(el => el.length > numeroCaracteres);
    }
    AñadirNuevosElementosAlArray(cadenas: string[]): void {
        if (cadenas && Array.isArray(cadenas)) {
            this.elementos.push(...cadenas.filter(el => typeof el === 'string'));
        }
    }
    DameRebanadaDeArray(indiceInicial: number, indiceFinal: number): string[] {
        if (!this.elementos || this.elementos.length === 0) return [];
        if (indiceInicial < 0 || indiceFinal > this.elementos.length || indiceInicial > indiceFinal) return [];
        return this.elementos.slice(indiceInicial, indiceFinal);
    }
    RunningTotalsSobreLaLongitudDeLosElementos(): number {
        if (!this.elementos || this.elementos.length === 0) return 0;
        return this.elementos.reduce((acc, el) => acc + el.length, 0);
    }
    AñadirNuevoElemento(elemento: string): void {
        if (elemento && typeof elemento === 'string') {
            this.elementos.push(elemento);
        } else {
            console.log('Elemento no válido para añadir.');
        }
    }
    
    EliminarUltimoElemento(): void {
        if (this.elementos.length > 0) {
            this.elementos.pop();
        } else {
            console.log('No hay elementos para eliminar.');
        }
    }
    ArrayConLongitudDeLosElementos(): number[] {
        return this.elementos.map(el => el.length);
    }
    ConcatenaElementosConComa(): string {
        return this.elementos.join(',');
    }
    IndiceDeElemento(elemento: string): number {
        if (!this.elementos || !elemento) return -1;
        const buscado = elemento.trim();
        if (!buscado) return -1;
        // Try exact match first
        const exactIndex = this.elementos.indexOf(buscado);
        if (exactIndex !== -1) return exactIndex;
        // Fallback to case-insensitive comparison (ignoring surrounding whitespace)
        return this.elementos.findIndex(el => {
            if (!el) return false;
            return el.trim().toLowerCase() === buscado.toLowerCase();
        });
    }
    InvierteCadenas(): string[] {
        if (!this.elementos || this.elementos.length === 0) return [];
        return this.elementos.map(el => el.split('').reverse().join(''));
    }
    FiltraPorPrimeraLetra(letra: string): string[] {
        if (!this.elementos || this.elementos.length === 0) return [];
        if (!letra || typeof letra !== 'string') return [];
        const primera = letra.trim().toLowerCase().charAt(0);
        if (!primera) return [];
        return this.elementos.filter(el => {
            if (!el || el.length === 0) return false;
            return el.charAt(0).toLowerCase() === primera;
        });
    }
    MuestraContenidoArray(): void {
        if (!this.elementos || this.elementos.length === 0) {
            console.log('ProcesoCadenasV01: no hay elementos para mostrar.');
            return;
        }
        console.log('Contenido de ProcesoCadenasV01:');
        this.elementos.forEach((el, idx) => {
            console.log(`  [${idx}] ${el}`);
        });
    }
    
    TodosLosElementosMayorQue(numeroCaracteres: number): Boolean {
        return this.elementos.every(el => el.length > numeroCaracteres);
    }
    
    Ordenar(): void {
        if (!this.elementos || this.elementos.length === 0) return;
        this.elementos.sort((elemento1, elemento2) => {
            return elemento1.localeCompare(elemento2);
        })
    }
    OrdenarInvertido(): void {
        if (!this.elementos || this.elementos.length === 0) return;
        this.elementos.sort((elemento1, elemento2) => {
            return elemento1.localeCompare(elemento2);
        }).reverse();
    }
}

class Nombre {
    readonly gestorDeCadenas: ICadenable;
    constructor(gestor: ICadenable) {
        this.gestorDeCadenas = gestor;
    }

    mostrar(): void {
        this.gestorDeCadenas.MuestraContenidoArray();
    }

    comprobarLongitudTodos(longitud: number): Boolean {
        return this.gestorDeCadenas.TodosLosElementosMayorQue(longitud);
    }

    getMayorQue(letra: string): string[] {
        return this.gestorDeCadenas.FiltraPorPrimeraLetra(letra);
    }

    comprobarLongitudAlguno(longitud: number): Boolean {
        return this.gestorDeCadenas.AlgunoDeLosElementosMayorQue(longitud);
    }



}

class Padron
{
    readonly GestorDeCadenas :ICadenable;
    constructor(Gestor :ICadenable)
    {
        this.GestorDeCadenas = Gestor;
    }
    DamePadron():string[]
    {
        return this.GestorDeCadenas.DameRebanadaDeArray(1,3);
    }
}

let PadronZaragoza = new Padron(new ProcesoCadenasV01(["Pepe","Juan","Ana"]));
PadronZaragoza.DamePadron();






/* 13. Sort ascending and descending
const ascendente01 = [...nombres01].sort();
const descendente01 = [...nombres01].sort().reverse();
const ascendente02 = [...nombres02].sort();
const descendente02 = [...nombres02].sort().reverse();

// Display results
console.log('1. Mostrar arrays:');
mostrarArrays(nombres01, 'nombres01');
mostrarArrays(nombres02, 'nombres02');

console.log('\n2. Todos los nombres tienen longitud > 2:', todosLongitudMayorDos);

console.log('\n3. Nombres filtrados después de "i":');
console.log('nombres01:', filtradosNombres01);
console.log('nombres02:', filtradosNombres02);

console.log('\n4. Palíndromos:');
console.log('nombres01:', palindromosNombres01);
console.log('nombres02:', palindromosNombres02);

console.log('\n5. Índices de búsqueda:');
console.log('Tanit en nombres01:', tanitIndex01);
console.log('Tanit en nombres02:', tanitIndex02);
console.log('Jacinto en nombres01:', jacintoIndex01);
console.log('Jacinto en nombres02:', jacintoIndex02);

console.log('\n6. Arrays unidos con comas:');
console.log('nombres01:', nombresUnidos01);
console.log('nombres02:', nombresUnidos02);

console.log('\n7. Longitudes de nombres01:', longitudesNombres01);

console.log('\n10. Running total:', runningTotal);

console.log('\n11. Subarrays combinados:', combinedSubarrays);

console.log('\n12. Nombres con longitud > 6:');
console.log('nombres01:', hayLargosMayorSeis01);
console.log('nombres02:', hayLargosMayorSeis02);

console.log('\n13. Arrays ordenados:');
console.log('Ascendente nombres01:', ascendente01);
console.log('Descendente nombres01:', descendente01);
console.log('Ascendente nombres02:', ascendente02);
console.log('Descendente nombres02:', descendente02);
*/