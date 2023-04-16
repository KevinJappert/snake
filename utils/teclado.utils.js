document.body.addEventListener('keydown',keyDown);

function keyDown(e){
        // y// - va para arriba
       // y// + hacia abajo
       // x// - va para izquierda
       // x// + va para la izquierda


    //hacia arriba
    if (e.keyCode === 38) {

        //Este if es para que no vuelva al mismo lugar de donde viene y la vibora se choque sola
        if (velocidadY == 1) 
           return;
         velocidadY = -1;
         velocidadX = 0;
    }

    //hacia abajo
    if (e.keyCode === 40) {
        if (velocidadY == -1) 
        return;
        velocidadY = 1        
        velocidadX = 0;
    }

    //hacia la izquierda
    if (e.keyCode === 37) {
        if (velocidadX == 1) 
        return;
        velocidadY = 0        
        velocidadX = -1;
    }

    //hacia la derecha
    if (e.keyCode === 39) {
        if (velocidadX == -1) 
        return;
        velocidadY = 0;        
        velocidadX = 1;
    }
    
}