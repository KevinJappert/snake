import { Tile } from "./tile.class.js";
import { Mapa } from "./mapa.class.js";
import { Direction } from "../enums/direction.enum.js";

class Snake {
    /** @type {Tile[]} */
    cuerpo = [];
    direction = Direction.Abajo;

    constructor() {
        const [x, y] = [Math.round(Mapa.alto / 2), Math.round(Mapa.ancho / 2)];
        const cabeza = new Tile({ x, y });
        this.cuerpo.push(cabeza);
        const parteCuerpo1 = new Tile({ x, y: y - 1 });
        this.cuerpo.push(parteCuerpo1);
        const parteCuerpo2 = new Tile({ x, y: y - 2 });
        this.cuerpo.push(parteCuerpo2);
    };

    ObtenerLongitud() {
        return this.cuerpo.length + 1;
    };

    Dibujar({ ctx, anchoTile, altoTile }) {
        //Dibujo cuerpo
        ctx.fillStyle = '#999';
        for (let i = 1; i < this.cuerpo.length; i++) {
            const parteCuerpo = this.cuerpo[i];
            ctx.fillRect(parteCuerpo.position.x * parteCuerpo.size.x, parteCuerpo.position.y * parteCuerpo.size.y, anchoTile, altoTile);
        }

        // Dibujo cabeza
        ctx.fillStyle = '#FFF';
        const cabeza = this.cuerpo[0];
        ctx.fillRect(cabeza.position.x * cabeza.size.x, cabeza.position.y * cabeza.size.y, anchoTile, altoTile);
    };

    Mover() {
        const cabezaActual = this.cuerpo[0];
        const nuevaCabeza = new Tile({ 
            x: cabezaActual.position.x, 
            y: cabezaActual.position.y0 
        });
        if (this.direction == Direction.Abajo) {
            nuevaCabeza.position.y = cabezaActual.position.y + 1;
        }
        if (this.direction == Direction.Arriba) {
            nuevaCabeza.position.y = cabezaActual.position.y - 1;
        }
        if (this.direction == Direction.Derecha) {
            nuevaCabeza.position.x = cabezaActual.position.x + 1;
        }
        if (this.direction == Direction.Izquierda) {
            nuevaCabeza.position.x = cabezaActual.position.x - 1;
        }
        
        this.cuerpo.unshift(nuevaCabeza);
        this.cuerpo.pop();

        this.ChequearPosicionCabeza();
    };

    ChequearPosicionCabeza() {
        const cabeza = this.cuerpo[0];
        if (cabeza.position.x < 0) cabeza.position.x = Mapa.ancho;
        if (cabeza.position.x > Mapa.ancho) cabeza.position.x = 0;
        
        if (cabeza.position.y < 0) cabeza.position.y = Mapa.alto;
        if (cabeza.position.y > Mapa.alto) cabeza.position.y = 0;
    }
}





export { Snake };