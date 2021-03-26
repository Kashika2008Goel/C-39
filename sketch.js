var db;
var playerCount = 0;
var gameState = 0;
var form, game, player;
var allPlayers;

var car1, car2, car3, car4, cars;
var car1Img, car2Img, car3Img, car4Img ;

var trackImg;

function proload(){
  car1Img = loadImage("car1.png");
  car2Img = loadImage("car2.png");
  car3Img = loadImage("car3.png");
  car4Img = loadImage("car4.png");

  trackImg = loadImage("track.jpeg")

}


function setup(){
  createCanvas(displayWidth-30,displayHeight-100);
  db= firebase.database();

  game= new Game();
  game.readState();
  game.start();

}

function draw(){

  if(playerCount == 4){
    game.writeState(1);
  }

  if(gameState == 1){
    game.play();
  }

  if(gameState == 2){
    game.end();
  }

}
