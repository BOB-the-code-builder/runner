var jake,jake_running;
var pathImg;
function preload(){
  //pre-load images
  pathImg=loadAnimation("path.png");
  jake_running=loadAnimation("jake1.png","jake2.png","jake3.png","jake4.PNG","jake5.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200,200,400);
  path.addAnimation("path",pathImg);
  path.velocityY=4;
  path.scale=1.2

  jake=createSprite(200,360,60,70);
  jake.addAnimation("running",jake_running);

  wall=createSprite(20,200,2,400)
  wall.visible=false
  wall2=createSprite(380,200,2,400)
  wall2.visible=false
}

function draw() {
  background("green");
  if (path.y>400) {
    path.y=height/2;
  }

  if (keyDown("a")) {
    jake.x=jake.x-10
  }
  
  if (keyDown("d")) {
    jake.x=jake.x+10
  }
  jake.collide(wall)
  jake.collide(wall2)
  drawSprites();
}
