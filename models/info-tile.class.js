import { EstadoTile } from "../enums/estado-tile.enum.js";

class InfoTile {
    position = {
        x: 0,
        y: 0
    };
    estado = EstadoTile.Libre;
    constructor({ x, y }) {
        this.position = { x, y };
    }
}

export {
    InfoTile
};