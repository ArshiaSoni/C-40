var database;
var playerCount, gameState;
var game, player, form;
var allPlayers;
var car1, car2, car3, car4, cars;
var car1_img, car2_img, car3_img, car4_img;
var track_img;
var resetButton;
var carsAtEnd;

function preload(){
  car1_img = loadImage('images/car1.png');
  car2_img = loadImage('images/car2.png');
  car3_img = loadImage('images/car3.png');
  car4_img = loadImage('images/car4.png');

  track_img = loadImage('images/track.jpg');
}

function setup(){
  database = firebase.database();
  // console.log(database);
  createCanvas(displayWidth-50, displayHeight-120);

  // car1 = createSprite(100, 100);

  game = new Game();
  console.log('check');
  game.getGameState();

  resetButton = createButton('reset');
}

function draw(){
  background("white");

  imageMode (CENTER);
  image (track_img, width/2, height/2, width);
  
  if(playerCount==4){
    game.updateGameState(1);
  }
  if (gameState==1){
    clear ();
    game.play();
  }

  if(gameState == 2){
    game.end();
  }

  resetButton.mousePressed(()=>{
    player.updatePlayerCount(0);
    game.updateGameState(0);
    player.updateCarsAtEnd(0);
    database.ref('players').remove();
  })
  drawSprites();
}


