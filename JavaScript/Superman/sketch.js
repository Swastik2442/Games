function preload(){
  
  bgImage = loadImage("space.png");
   supermanImage = loadImage('superman.png');   
   villainImage = loadImage('villain.png')
 }
 
 function setup() {
   createCanvas(500, 500);
   
   bg = createSprite(250,250,500,500); 
   superman= createSprite(50,450,20,20);     
   villain= createSprite(450,50,20,20)
   
 }
 
 function draw() {
   superman.addImage(supermanImage);   villain.addImage(villainImage);       
   superman.x = mouseX;   
   superman.y = mouseY
   bg.addImage(bgImage);
   bg.velocityY=4;
   if(superman.isTouching(villain)){     
     villain.destroy()   }
     if (bg.y >500 ){
        bg.y = 250;
       }
   
   drawSprites();
 }