var fixedRect, movingRect;
var ball1,ball2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  ball1 = createSprite(60,200,50,50);
  ball1.velocityX = 5;
  ball2 = createSprite(1100,200,50,50);
  ball2.velocityX = -5;
  ball3 = createSprite(30,200,50,50);
//  movingRect.velocityY = -5;
  //fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
bounceoff(ball1,ball2)
 ball3.x=mouseX;
 ball3.y=mouseY;
 if(istouching(fixedRect,ball3)){
   ball3.shapeColor = "white";
 }else{ball3.shapeColor = "blue"}
  
  drawSprites();
}