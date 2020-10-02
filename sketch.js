var PLAY = 1
var END = 0
var gameState = 1
var background1Image,background1;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score
var ground;
var survivalTime = 0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  background1Image = loadImage("download.jfif");

}



function setup() {
createCanvas(600,600)  

background1 = createSprite(300,300,600,600)
background1.addImage("bg",background1Image)
background1.scale = 6
background1.velocityX = -3

monkey = createSprite(200,500,10,10)
monkey.addAnimation("monkey",monkey_running)
monkey.scale = 0.2;
monkey.lifetime = (1300);

ground = createSprite(300,610,600,10)

bananaGroup = new Group()
obstacleGroup = new Group()


obstacle.setCollider
}


function draw() {
background("download.jfif")
  

  monkey.collide(ground)
  
  if(keyDown("space") ||mouseDown("leftButton")&& monkey.y >= 540) {
        monkey.velocityY = -15;
     
    }
   if (background1.x < -100){
      background1.x = background1.width/2;
    } 
    //add gravity
    monkey.velocityY =monkey.velocityY + 0.4
if(bananaGroup.isTouching(monkey)){
  
 bananaGroup.destroyEach() 
 monkey.lifetime = monkey.lifetime + 100
}
  if(obstacleGroup.isTouching(monkey)){
    
    obstacleGroup.setVelocityEach(0)
     bananaGroup.setVelocityEach(0)
    monkey.lifetime = 0;
    
  }
  if(monkey.lifeTime == 0){
    gameState = END; 
    
  }
  if(gameState == END){
    
   survivalTime = 0; 
  }
    spawnObstacles();
  spawnBananas();
  drawSprites();
stroke("white")
textSize(24)
text("lifetime:" + monkey.lifetime,250,20)
survivalTime=Math.ceil(frameCount/frameRate()) 
text("Survival time:" + survivalTime,250,40)  
}
function spawnBananas(){
  
 if(frameCount % 130 === 0){
  bananas = createSprite(610,Math.round(random(250,400)),10,10)
  bananas.addImage("banana",bananaImage)
  bananas.scale = 0.2 
   bananas.velocityX = -6;
 
 bananaGroup.add(bananas)
 }
}
function spawnObstacles(){
  
  if(frameCount % 130 === 0){
  obstacle = createSprite(610,550,10,10)  
  obstacle.addImage("obstacle",obstacleImage)
  obstacle.scale = 0.5;
  obstacle.velocityX = -6;
  obstacleGroup.add(obstacle)
  }
  }




