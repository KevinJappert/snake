import { InfoTile } from "./info-tile.class.js";
import { Objeto } from "./objeto.class.js";

class Mapa {
    static alto = 30;
    static ancho = 30;
    /** @type {InfoTile[]} */
    infoTiles = [];
    /** @type {Objeto[]} */
    objetos = [];

    Iniciar() {
        this.Resetear();
    };

    Resetear() {
        this.infoTiles = [];
        for (let y = 0; y < Mapa.alto; y++) {
            for (let x = 0; x < Mapa.ancho; x++) {
                const newTile = new InfoTile({ x, y });
                this.infoTiles.push(newTile);
            }
        }
    };

    /**
     * @param {InfoTile} newTile 
     */
    // SetearTile(nuevoTile) {
    //     const tileActual = this.infoTiles.find(tile => tile.position.x == nuevoTile.position.x && tile.position.y == nuevoTile.position.y);
    //     if (tileActual == null) return false;

    //     tileActual.
    // };
};

export {
    Mapa
};