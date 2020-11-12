var bouncingRectangle,fixedRectangle;

function setup() {
  createCanvas(800,800);
  bouncingRectangle=createSprite(40, 20, 50, 50);
  bouncingRectangle.velocityX=6;
  bouncingRectangle.velocityY=3;
  bouncingRectangle.shapeColor="red";

  fixedRectangle=createSprite(700,700,50,50);
  fixedRectangle.shapeColor="blue";
  fixedRectangle.velocityX=5;
  fixedRectangle.velocityY=2;

}


function draw() {
  background("lightgreen");

if(bouncingRectangle.x-fixedRectangle.x<bouncingRectangle.width/2+fixedRectangle.width/2 &&
  fixedRectangle.x-bouncingRectangle.x<bouncingRectangle.width/2+fixedRectangle.width/2 ){
   bouncingRectangle.velocityX=bouncingRectangle.velocityX*(-1);
   fixedRectangle.velocityX=fixedRectangle.velocityX*(-1);
}

if(bouncingRectangle.y-fixedRectangle.y<bouncingRectangle.height/2+fixedRectangle.height/2 &&
  fixedRectangle.y-bouncingRectangle.y<bouncingRectangle.height/2+fixedRectangle.height/2 ){
   bouncingRectangle.velocityY=bouncingRectangle.velocityY*(-1);
   fixedRectangle.velocityY=fixedRectangle.velocityY*(-1);
}

edges=createEdgeSprites();
bouncingRectangle.bounceOff(edges);
fixedRectangle.bounceOff(edges);

  drawSprites();
}