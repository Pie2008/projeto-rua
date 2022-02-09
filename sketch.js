var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  
  createCanvas(400,400);
  

path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;


boy = createSprite(180,340,30,30);
boy.scale=0.08;
boy.addAnimation("JakeRunning",boyImg);
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);

  if(path.y > 400 ){
    path.y = height/2;
  }
  
  boy.x=World.mouseX

  drawSprites();
}
