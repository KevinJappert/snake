import { TipoObjeto } from "../enums/tipo-objeto.enum.js";
class Objeto {
    position = {
        x: 0,
        y: 0
    };
    tipo = TipoObjeto.Enemigo;
    vidaTotal = 100;
    vidaActual = 0;
}

export {
    Objeto
};
