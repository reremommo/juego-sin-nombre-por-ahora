var background;
var bg;
var personaje, personajeImg;
var invisible1, invisible2, invisible3, invisible4, invisible5, invisible6;
function preload(){
  bg = loadImage("sprites/fondo.png");
  personajeImg = loadAnimation("sprites/moviendose1.png","sprites/moviendose2.png","sprites/moviendose3.png");
}

function setup(){
  createCanvas(600,600);
  rectMode(CENTER);
  background= createSprite(300,300);
  background.addImage(bg);
  invisible1 = createSprite(background.x,background.y,1300,10);
  fill("yellow");
  invisible2 = createSprite(600,0,10,955);
  personaje=createSprite(300,300,1,1);
  personaje.addAnimation("movimiento",personajeImg);
}

function draw(){
  //backGround("white");
  if(keyDown("up")){
    //personaje.y= personaje.y-2;
    background.y= background.y+2;
  }
  if(keyDown("down")){
    //personaje.y= personaje.y+2;
    background.y= background.y-2;
  }
  if(keyDown("right")){
    //personaje.x= personaje.x+2;
    background.x= background.x-2;

  }
  if(keyDown("left")){
    //personaje.x= personaje.x-2;
    background.x= background.x+2;
  }
 drawSprites();
}