var db;
var playerCount = 0;
var gameState = 0;
var form, game, player;
var allPlayers;

var car1, car2, car3, car4, cars;


function setup(){
  createCanvas(displayWidth-30,displayHeight-100);
  db= firebase.database();

  game= new Game();
  game.readState();
  game.start();

}

function draw(){

  if(playerCount == 2){
    game.writeState(1);
  }

  if(gameState == 1){
    game.play();
  }

}