const Origen: string[] = ["Ígneas", "Metamórficas", "Sedimentarias"];
const TamanyoGrano: string[] = ["Muy grueso", "Grueso", "Medio", "Fino"];
const Clasificacion: string[] = ["Construcción", "Ornamental", "Utensilios", "Machacada"];
const Textura: string[] = ["Vitrea", "Afanítica", "Fanerítica"];


let entradaReducida: boolean = false;
const mineralForm = <HTMLFormElement> document.getElementById("mineral-form");
const toggleLayoutBtn = <HTMLButtonElement> document.getElementById("toggle-layout");

toggleLayoutBtn.addEventListener("click", function() {
    entradaReducida = !entradaReducida;
    if (entradaReducida) {
        generarFormularioReducido(fields);
    } else {
        generarFormularioExtendido(fields);
    }
});

const fields: {id: string, label: string, type: string, values: number[] | string[]}[] = [
    {id: "id-mineral", label: "ID del mineral", type: "text", values: []},
    {id: "nombre-mineral", label: "Nombre del mineral", type: "text", values: []},
    {id: "grupo-mineral", label: "Grupo", type: "select", values: Origen},
    {id: "dureza-mineral", label: "Dureza", type: "number", values: [0, 10]},
    {id: "tamanyo-grano-mineral", label: "Tamaño del grano", type: "select", values: TamanyoGrano},
    {id: "clasificacion-mineral", label: "Clasificación", type: "select", values: Clasificacion},
    {id: "tamanyo-cristales-mineral", label: "Tamaño de los cristales", type: "number", values: [0, 10]},
    {id: "temperatura-formacion-mineral", label: "Temperatura de formación", type: "number", values: [-100, 100]},
    {id: "estructura-mineral", label: "Estructura", type: "textarea", values: []},
    {id: "forma-granos-mineral", label: "Forma de los granos", type: "textarea", values: []},
    {id: "textura-mineral", label: "Textura", type: "select", values: Textura}
];
generarFormularioExtendido(fields);

interface ICapturable {}

class Mineral implements ICapturable{
    constructor(
        public id: string,
        public nombre: string,
        public grupo: Origen,
        public dureza: number,
        public tamanyoGrano: TamanyoGrano,
        public clasificacion: Clasificacion,
        public tamanyoCristales: number,
        public temperaturaFormacion: number,
        public estructura: string,
        public formaGranos: string,
        public textura: Textura
    ){}
}

interface IPiloto {
    dameID(): string;
    dameNombre(): string;
    dameEdad(): number;
}

class Astronauta implements IPiloto {
    id: string;
    nombre: string;
    edad: number;
    constructor(id: string, nombre: string, edad: number) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
    }
    dameID(): string {
        return this.id;
    }
    dameNombre(): string {
        return this.nombre;
    }
    dameEdad(): number {
        return this.edad;
    }
    
}


function generarFormularioReducido(campos: {label: string, type: string, values: string[] | number[]}[]) {
    mineralForm.innerHTML = "";
    for (const campo of campos) {
        const campoDiv = <HTMLDivElement> document.createElement("div");
        campoDiv.classList.add("mb-3");
        mineralForm.append(campoDiv);

        const inputDiv = <HTMLDivElement> document.createElement("div");
        inputDiv.classList.add("col-9", "mx-auto", "mineral-form__input-container");
        campoDiv.append(inputDiv);

        switch (campo.type) {
            case ("number"): {
                const input = <HTMLInputElement> document.createElement("input");
                input.classList.add("form-control");
                input.setAttribute("type", "number");
                input.setAttribute("placeholder", campo.label);
                inputDiv.append(input);
                if (campo.values.length > 0) {
                    input.setAttribute("min", `${campo.values[0]}`);
                    input.setAttribute("max", `${campo.values[1]}`);
                }
                break;
            }
            case ("select"): {
                const input = <HTMLSelectElement> document.createElement("select");
                input.classList.add("form-select");
                input.setAttribute("placeholder", campo.label);
                inputDiv.append(input);
                const option = <HTMLOptionElement> document.createElement("option");
                option.setAttribute("selected", "true");
                option.textContent = `${campo.label}`;
                input.append(option);
                
                for (let i = 0; i < campo.values.length; i++) {
                    const option = <HTMLOptionElement> document.createElement("option");
                    option.setAttribute("value", `${i}`);
                    option.textContent = `${campo.values[i]}`;
                    input.append(option);
                }
                break;
            }
            case ("textarea"): {
                const input = <HTMLTextAreaElement> document.createElement("textarea");
                input.classList.add("form-control");
                input.setAttribute("placeholder", campo.label);
                inputDiv.append(input);
                break;
            }
            
            default: {
                const input = <HTMLInputElement> document.createElement("input");
                input.classList.add("form-control");
                input.setAttribute("type", campo.type);
                input.setAttribute("placeholder", campo.label);
                inputDiv.append(input);
                break;
            }

        }

    }
}

function generarFormularioExtendido(campos: {label: string, type: string, values: string[] | number[]}[]) {
    mineralForm.innerHTML = "";
    for (const campo of campos) {
        const labelText = campo.label;
        const campoDiv = <HTMLDivElement> document.createElement("div");
        campoDiv.classList.add("mb-3", "row");
        mineralForm.append(campoDiv);

        const label = <HTMLLabelElement> document.createElement("label");
        label.classList.add("col-3", "col-form-label", "text-end", "mineral-form__label")
        label.textContent = labelText;
        campoDiv.append(label);

        

    }
}

function generarInput(campo: {label: string, type: string, values: string[] | number[]}, placeholderText: string = ""): HTMLElement {
    

    const inputDiv = <HTMLDivElement> document.createElement("div");
    inputDiv.classList.add("col-9", "mineral-form__input-container");

    switch (campo.type) {
        case ("number"): {
            const input = <HTMLInputElement> document.createElement("input");
            input.classList.add("form-control");
            input.setAttribute("type", "number");
            input.setAttribute("placeholder", placeholderText);
            inputDiv.append(input);
            if (campo.values.length > 0) {
                input.setAttribute("min", `${campo.values[0]}`);
                input.setAttribute("max", `${campo.values[1]}`);
            }
            break;
        }
        case ("select"): {
            const input = <HTMLSelectElement> document.createElement("select");
            input.classList.add("form-select");
            input.setAttribute("placeholder", placeholderText);
            inputDiv.append(input);
            for (let i = 0; i < campo.values.length; i++) {
                const option = <HTMLOptionElement> document.createElement("option");
                option.setAttribute("value", `${i}`);
                option.textContent = `${campo.values[i]}`;
                input.append(option);
            }
            break;
        }
        case ("textarea"): {
            const input = <HTMLTextAreaElement> document.createElement("textarea");
            input.classList.add("form-control");
            input.setAttribute("placeholder", placeholderText);
            inputDiv.append(input);
            break;
        }
        
        default: {
            const input = <HTMLInputElement> document.createElement("input");
            input.classList.add("form-control");
            input.setAttribute("type", campo.type);
            input.setAttribute("placeholder", placeholderText);
            inputDiv.append(input);
            break;
        }

    }
    return inputDiv;
}