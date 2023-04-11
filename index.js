import { Snake } from "./models/snake.model.js";
import { Comida } from "./models/comida.model.js";

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');


const snake = new Snake({ x: 10, y: 10 });
console.log(snake);
const comida = new Comida({ x: 5, y: 5 });

//audio
const gulpSound = new Audio('./sound/gulp.mp3')

//Donde se guardara las partes de la vibora
const snakeParts = [];

//Actualizacion por segundo de la pantalla.
// Tres maneras de hacerlo...
// requestAnimationFrame
// setInterval
// setTimeout

// Longitud de la cola
let tailLength = 0;

//Velocidad de la pantalla fps
let speed = 7;

//Numero de mozaicos de la pantalla
let tileCount = 20;

//Tamaño de los elementos de juego y donde se ubicarian

let tileSize = canvas.width / tileCount -2;

let score = 0;

//Cuerpo de la serpiente
let headX = 10;
let headY = 10;

//Cuerpo de la manzana
let appleX = 5;
let appleY = 5;

//Monster
let monsterX = 3;
let monsterY = 3;


//velocidad de la serpiente
let velocidadX = 0;
let velocidadY = 0;




//class
class SnakePart {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}


function drawScore(){
    ctx.fillStyle = 'white';
    ctx.font = '10px Verdana';
    ctx.fillText('Score' + score , canvas.width -47, 12);

    if (score > 2) {
        speed == 11;
    }

    if (score > 7) {
        speed == 13;
    }

    if (score > 10) {
        speed == 15;
    }

    if (score > 15) {
        speed == 18;
    }
    if (score > 20) {
        speed == 23;
    }
}


//Donde se dibuja en la pantalla y corre el juego
function drawGame (){
    //Cambia de posicion la vibora
    changeSnakePosition();
    //GAME OVER
    let result = isGameOver();
    if (result){
        return;
    }
    //pantalla del juego
    clearScreen();
    
    //checkColisionApple();
    snake.ChequearColisionComida(comida);
    drawApple();
    drawSnake(); 
    drawMonster();


    drawScore();




    //fps
    setTimeout(drawGame, 1000 / speed);
}

//Funcion GAME OVER
function isGameOver(){
    let gameOver = false;

    if(monsterX === headX && monsterY === headY){
        gameOver = true;
    }

    if (velocidadY === 0 && velocidadX === 0) {
        return false;
    }

    //paredes
    if (headX < 0) {
        gameOver = true;
    }
    if (headX >= tileCount) {
        gameOver = true;
    }
    if (headY < 0) {
        gameOver = true
    }
    if (headY === tileCount) {
        gameOver = true;
    }

    for (let i = 0; i < snakeParts.length; i++) {
        let part = snakeParts[i];
        if (part.x === headX && part.y === headY) {
            gameOver = true;
            break;
            
        }
        
    }

    if (gameOver) {
        ctx.fillStyle = 'white';
        ctx.font = '50px Verdana';

        var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        gradient.addColorStop('0', 'magenta');
        gradient.addColorStop('0', 'blue');
        gradient.addColorStop('1.0', 'red');

        ctx.fillStyle = gradient;

        ctx.fillText('Game Over!', canvas.width / 6.5, canvas.height / 2);
    }

    return gameOver;
}


//pantalla del juego
function clearScreen(){
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,canvas.width,canvas.height);
}

//Se dibuja la serpiente aca
function drawSnake(){

    //otras partes de la vibora
    ctx.fillStyle = 'green';
    for (let i = 0; i < snakeParts.length; i++) {

        let part = snakeParts[i]
        ctx.fillRect(part.x * tileCount, part.y * tileCount,tileSize,tileSize)
    }
    snakeParts.push(new SnakePart(headX, headY));
    if (snakeParts.length > tailLength) {
        snakeParts.shift();
    }

    //Cabeza de la vibora
    ctx.fillStyle = 'orange';
    ctx.fillRect(headX * tileCount, headY * tileCount,tileSize,tileSize)


}

//Actualiza la posicion de la serpiente y velocidad
function changeSnakePosition(){
    headX = headX + velocidadX;
    headY = headY + velocidadY;
}

//Dibuja la manzana
function drawApple(){
    ctx.fillStyle = 'red';
    ctx.fillRect(appleX * tileCount, appleY * tileCount,tileSize,tileSize);
}

function checkColisionApple(){
    if (appleX === headX && appleY === headY) {
        appleX = Math.floor(Math.random() * tileCount)
        appleY = Math.floor(Math.random() * tileCount)
        tailLength++;
        score++;
        gulpSound.play();
    }
}


//Monstruo
function drawMonster(){
    ctx.fillStyle = 'blue';
    ctx.fillRect(monsterX * tileCount, monsterY * tileCount ,tileSize,tileSize);
}



//Evento flechas para que las detecte
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


drawGame();

