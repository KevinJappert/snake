import { canvas, ctx } from "../utils/canvas.info.js";
import { Mapa } from "../models/mapa.class.js";
const anchoTile = canvas.width / Mapa.ancho;
const altoTile = canvas.width / Mapa.alto;

class Tile {
    position = {
        x: 0,
        y: 0
    };
    size = {
        x: anchoTile, 
        y: altoTile
    };
    constructor({ x, y }) {
        this.position.x = x;
        this.position.y = y;
    }
}

export { Tile };