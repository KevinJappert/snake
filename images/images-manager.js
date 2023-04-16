/** @type {{ src, img }[]} */
const imagenes = [];
const CargarImagen = path => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = path;
        img.onload = () => {
            resolve(img)
        }
        img.onerror = e => {
            reject(e)
        }
    })
}


async function PrecargarImagenes() {
    let nombres = [
        "cuadrado-blanco", "cuadrado-blanco-transparente", "cuadrado-verde"
    ];
    for (let i = 0; i < nombres.length; i++) {
        const url = `./images/${nombres[i]}.png`;
        let img = await CargarImagen(url);
        imagenes.push({
            src: nombres[i],
            img: img
        });
    };
}

export {
    PrecargarImagenes, imagenes
}