var ship,ship_sailing;
var seaImage;
function preload(){
ship_sailing = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png")
seaImage = loadImage("sea.png")
}
function setup(){
  createCanvas(400,400);
  sea=createSprite(50, 180, 150, 150)
  sea.addImage(seaImage)
  sea.scale = 0.27
  ship = createSprite(200, 200,50,100);
  ship.addAnimation("sailing", ship_sailing)
  ship.scale = 0.3;
  ship.x = 200
}
function draw(){
  background("blue");
  sea.velocityX=-5
  if(sea.x<0){
  sea.x=sea.width/8
  }
  drawSprites();
}