import { Mapa } from "../models/mapa.class.js";
import { Snake } from "../models/snake.model.js";
// import { Teclado } from "../utils/teclado.utils.js";
import { PrecargarImagenes } from "../images/images-manager.js";


/** @type {Mapa} */
let mapa = null;
/** @type {Snake} */
let snake = null;

const IniciarJuego = async () => {
    await PrecargarImagenes();

    mapa = new Mapa();
    snake = new Snake();

    mapa.Iniciar();

    LoopJuego();
};


const Dibujar = () => {
    mapa.LimpiarPantalla();
    mapa.Dibujar();
    snake.Dibujar();
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