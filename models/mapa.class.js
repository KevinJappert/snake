import { InfoTile } from "./info-tile.class.js";
import { Objeto } from "./objeto.class.js";
import { canvas, ctx } from "../utils/canvas.info.js";
import { imagenes } from "../images/images-manager.js";

class Mapa {
    static alto = 30;
    static ancho = 30;
    static altoTile = canvas.height / Mapa.alto;
    static anchoTile = canvas.width / Mapa.ancho;

    texturaCuadrilla = null;
    /** @type {InfoTile[]} */
    infoTiles = [];
    /** @type {Objeto[]} */
    objetos = [];

    constructor() {
        console.log(imagenes.find(item => item.src == "cuadrado-blanco-transparente"));
        this.texturaCuadrilla = imagenes.find(item => item.src == "cuadrado-blanco-transparente").img;
        console.log(this.texturaCuadrilla);
    }

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

    LimpiarPantalla() {
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    Dibujar() {
        ctx.save();

        for (let y = 0; y < Mapa.alto; y++) {
            for (let x = 0; x < Mapa.ancho; x++) {
                ctx.setTransform(1, 0, 0, 1, x * Mapa.anchoTile, y * Mapa.altoTile); // sets scales and origin
                //ctx.rotate(this.rotacion * Math.PI/180);
                ctx.drawImage(this.texturaCuadrilla, -Mapa.anchoTile, -Mapa.altoTile);
                ctx.setTransform(1, 0, 0, 1, 0, 0);
            }
        }

        ctx.restore();
    }


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