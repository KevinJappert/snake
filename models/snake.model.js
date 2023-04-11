import { TilePosition } from "./tile-position.model.js";
import { Comida } from "./comida.model.js";


class ParteCuerpo extends TilePosition {
    numeroParte = 0;
    constructor({ x, y }, numeroParte) {
        super({ x, y });
        this.numeroParte = numeroParte;
    }
}

class Snake {
    /** @type {ParteCuerpo[]} */
    partesDelCuerpo = [];

    constructor({ x, y }) {
        const cabeza = new ParteCuerpo({ x, y }, 0);
        this.partesDelCuerpo.push(cabeza);
    }


    /**
     * @param {Comida} comida 
     */
    ChequearColisionComida(comida) {
        comida.position.
        console.log("ChequearColisionComida");
    }
    // constructor({parX, parY}) {
    //     this.position = {
    //         x: parX, 
    //         y: parY
    //     };
    // }
    // constructor(x, y) {
    //     this.position.x = x;
    //     this.position.y = y;
    // }
}





export { Snake };