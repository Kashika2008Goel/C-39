class Game{
  constructor(){
       
      }
  
  readState(){
      var loc2= db.ref('GameState');
      loc2.on("value", function(data){
        gameState= data.val();
      });
    }
          
  writeState(c){
      db.ref("/").update({GameState: c});
        }
    
  start(){
    if(gameState == 0){
      form= new Form();
      form.display();
      player= new Player();
      player.readCount();
    }
    car1= createSprite(20,20,10,10);
    car2= createSprite(25,25,10,10);
    car3= createSprite(30,30,10,10);
    car4= createSprite(35,35,10,10);

    cars= [car1,car2,car3,car4];
  }

  play(){
    form.hide();
    /*textSize(25)
    text("Game Start",100,100);*/
    Player.readPlayerInfo();
   
    if(allPlayers !== undefined){
      var x = 100;
      var y;

      var i = 0;

      for(var plr in allPlayers){
        i= i + 1;
        x = x+200;
        y = displayHeight - allPlayers[plr].distance;
       
        cars[i-1].x = x;
        cars[i-1].y = y;

        if(i== player.index){
          camera.position.x= displayWidth/2;
          camera.position.y= cars[i-1].y;

        }
      
        /*textSize(15);
        text(allPlayers[plr].Name + ": " + allPlayers[plr].Distance, 100, y);
        y= y+30;*/
      }
    }
    
    if(keyWentDown("UP_ARROW")){
      console.log(player.distance)
      player.distance= player.distance + 10;
      player.writePlayerInfo();
    }

    drawSprites();
  }

    display(){
     
      }
  }