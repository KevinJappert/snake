import { Mapa } from "../models/mapa.class.js";
import { Snake } from "../models/snake.model.js";
import { canvas, ctx } from "../utils/canvas.info.js";
// import { Teclado } from "../utils/teclado.utils.js";

const anchoTile = canvas.width / Mapa.ancho;
const altoTile = canvas.width / Mapa.alto;


const mapa = new Mapa();
const snake = new Snake();

const IniciarJuego = () => {
    mapa.Iniciar();

    LoopJuego();
};

//pantalla del juego
const LimpiarPantalla = () => {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

const Dibujar = () => {
    LimpiarPantalla();

    snake.Dibujar({ ctx, anchoTile, altoTile });
};

const Actualizar = () => {
    snake.Mover();
};

const LoopJuego = () => {
    Actualizar();
    Dibujar();

    setTimeout(() => {
        LoopJuego()
    }, 100);
};


export { 
    IniciarJuego 
};