import { canvas, ctx } from "../utils/canvas.info.js";
import { Mapa } from "../models/mapa.class.js";

class Tile {
    position = {
        x: 0,
        y: 0
    };
    size = {
        x: Mapa.anchoTile, 
        y: Mapa.altoTile
    };
    constructor({ x, y }) {
        this.position.x = x;
        this.position.y = y;
    }
}

export { Tile };