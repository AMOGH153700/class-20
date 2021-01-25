var movingRectangle;
var fixedRectangle;

function setup() {
  createCanvas(800,400);
  movingRectangle= createSprite(220, 90, 100, 100);
   fixedRectangle=createSprite(500,200,100,90);
fixedRectangle.shapeColor= "red";
movingRectangle.shapeColor= "blue";
fixedRectangle.debug=true;
movingRectangle.debug=true;



}


function draw() {
  background("black");  
  movingRectangle.y =mouseY
 movingRectangle.x=mouseX
 
if(movingRectangle.x-fixedRectangle.x <fixedRectangle.width/2+movingRectangle.width/2 &&
  fixedRectangle.x-movingRectangle.x <movingRectangle.width/2+fixedRectangle.width/2  &&
  movingRectangle.y-fixedRectangle.y <fixedRectangle.width/2+movingRectangle.width/2  && 
  fixedRectangle.y-movingRectangle.y <movingRectangle.width/2+fixedRectangle.width/2  
  ){
  fixedRectangle.shapeColor="Green";
  movingRectangle.shapeColor="Green";
}
else{ 
  movingRectangle.shapeColor="blue";
  fixedRectangle.shapeColor="red";
}





  drawSprites()
  ;
}