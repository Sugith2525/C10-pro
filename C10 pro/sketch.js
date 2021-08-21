var ship,shipAnimation
var ocean,oceanImage

function preload(){
shipAnimation = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
oceanImage=loadImage("sea.png")
}

function setup(){
//OCEAN
ocean= createSprite(632,312,100,20)
ocean.addImage("background" ,oceanImage)
//CANVAS
createCanvas(1275,625);
//SHIP
ship= createSprite(725,285,10,100);
ship.addAnimation ("run",shipAnimation);
ship.scale=0.5;
}

function draw() {
background("blue");
//OCEAN MOVING
ocean.velocityX=2
if(ocean.x>1275){
ocean.x=ocean.width/2

}








drawSprites();
}