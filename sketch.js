var movingRect,fixedrect

function setup() {
  createCanvas(800,400);
  movingRect=createSprite(200,200,60,60)
  fixedrect=createSprite(300,200,60,60)
  movingRect.shapeColor="red";
  fixedrect.shapeColor="red";
}

function draw() {
  background(255,255,255);
  movingRect.x=mouseX  
  movingRect.y=mouseY
  if (movingRect.x-fixedrect.x<movingRect.width/2+fixedrect.width/2&&
     fixedrect.x-movingRect.x<fixedrect.width/2+movingRect.width/2&&
     movingRect.y-fixedrect.y<movingRect.height/2+fixedrect.height/2&&
    fixedrect.y-movingRect.y<fixedrect.height/2+movingRect.height/2) {
      movingRect.shapeColor="green";
      fixedrect.shapeColor="green";
  }
  else {
    movingRect.shapeColor="red";
    fixedrect.shapeColor="red";
  }
  drawSprites();
}