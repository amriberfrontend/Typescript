class Viewport {
    anchura: number;
    altura: number;
    color: string;
    constructor(anchura: number, altura: number, color: string) {
        this.anchura = anchura;
        this.altura = altura;
        this.color = color;
    }
}

const viewport1 = new Viewport(35, 42, "#FF0000");
const viewport2 = new Viewport(71, 19, "#00FFFF");
