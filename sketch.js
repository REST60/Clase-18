var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;

  
  ghost = createSprite(300,300);
  ghost.addImage("Ghost-standing",ghostImg);
  ghost.scale = 0.5;

  climbersGroup = new Group();

  
}

function draw() {
  background(200);
  
  if(tower.y > 400){
      tower.y = 300
    }

    if(keyDown("space")){
      ghost.velocityY = -3;
    }
    ghost.velocityY = ghost.velocityY + 0.5;

    if(keyDown("right")){
      ghost.x = ghost.x + 2;
    }

    if(keyDown("left")){
      ghost.x = ghost.x - 2;
    }

    if(ghost.y >= 600){
      gameState = "end";
      tower.velocityY = 0;

    }

      


    ghost.collide(climbersGroup);

    spawnClimbers();

    drawSprites();
    if(gameState === "end"){
      ghost.destroy();
      climbersGroup.destroyEach();
      textSize(50);
      fill("yellow");
      textAlign(CENTER);
      text("Game Over",300,300);
      
    }
}


function spawnClimbers(){
  if(frameCount % 125 === 0){
     climber = createSprite(Math.round(random(125,400)),0);
     climber.addImage("Climbers",climberImg);
     climbersGroup.add(climber);
     climber.velocityY = 3;
  }
  
  
}