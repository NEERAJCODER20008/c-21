var fixedRect, movingRect;
var r1
var r2
var r3
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

r1 = createSprite(400,400,50,50);
r1.shapeColor="green"

r2 = createSprite(800,400,50,50);
r2.shapeColor="green"

r3 = createSprite(1000,400,50,50);
r3.shapeColor="green"


}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

if (isTouching(r1,movingRect)){
  movingRect.shapeColor = "black";
  r1.shapeColor = "black";
} 
else if (isTouching(fixedRect,movingRect)){
  movingRect.shapeColor = "black";
  fixedRect.shapeColor = "black";
}

else if (isTouching(r2,movingRect)){
  movingRect.shapeColor = "black";
  r2.shapeColor = "black";
}

else if (isTouching(r3,movingRect)){
  movingRect.shapeColor = "black";
  r3.shapeColor = "black";
}

else{
  movingRect.shapeColor = "green";
  r1.shapeColor = "green";
  fixedRect.shapeColor="green";
  r2.shapeColor="green"
  r3.shapeColor="green"
}

  drawSprites();
}
  
  
  

  
  

