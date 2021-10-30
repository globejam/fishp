var fishingRod;
var fishingRodImg;
var fisherman,fishermanImg
var bg
var fLineLength
var hook,hookPos=862,hookPosY =672;
var deepSea;
var bluepurpleFish
var greenFish
var fishGroup
var crabImg
var hookINS
var randomNub
var byFish
var ybFish
var shakeFactor = 0
var score = 0
function preload(){
fishingRodImg = loadImage("assets/FishingRod.png");
bg=loadImage("./assets/background.gif");
fishermanImg=loadImage("./assets/fishingBoat2 copy.png");
hook=loadImage("./assets/hook.png");
deepSea=loadGif("./assets/DI5 (1).gif");
bluepurpleFish=loadImage("./assets/bluePurpleFish.png");
greenFish=loadImage("/assets/green-YellowFish.png");
byFish=loadImage("/assets/bY.png")
ybFish=loadImage("/assets/yB.png")
}
function setup() {
 
 
  createCanvas(windowWidth,windowHeight);
 // fishingRod = createSprite(windowWidth/2+200,windowHeight/2-200,10,10);
  fisherman = createSprite(1050,950,10,10);
  hookINS = createSprite(902,800,100,100);
  hookINS.addImage(hook);
  hookINS.scale = 0.3
//fishingRod.addImage(fishingRodImg);
fisherman.addImage(fishermanImg);
fLineLength = 56;
fishGroup=new Group();

}

function draw() {
  console.log(score);
  shakeFactor+=1
  fisherman.rotation = shakeFactor

 skake();
  background(50)
  camera.position.y=hookPos;
  image(bg, 0, 0, width, height);
  image(deepSea, 0, 1050, width, height);
  rodLength()

  fish(0,1200);
  
 hookINS.isTouching(fishGroup,removeFish)
  fishGroup.depth +=100
  fishGroup.setVelocityXEach(10)
  
  if(keyIsDown(LEFT_ARROW)){
    fisherman.x -=2
  }

  if(keyIsDown(RIGHT_ARROW)){
    fisherman.x +=2
  }
drawSprites();


}

//FUNCTIONS

//changing rod length
function rodLength(){
  fill("red");
  if(keyIsDown(UP_ARROW)&& fLineLength>=0){
    fLineLength -=2
  }

  if(keyIsDown(DOWN_ARROW)&& fLineLength<=872){
    fLineLength +=2
  }
   rect(fisherman.x-130,730,2,fLineLength);

hookPos = 730+fLineLength
hookPosY = fisherman.x-130
hookINS.y = hookPos;
hookINS.x = hookPosY;
}

function fish(x,y){
  
  if(frameCount%75==0){
  var fish = createSprite(x,Math.round(random(1200,1400)),80,80);
  fishGroup.add(fish);
  fish.scale = 0.5;
 
  randomNub = Math.round(random(0,3));
  if(randomNub === 0){
    fish.addImage(bluepurpleFish)
   
  }

  else if(randomNub === 2){
    fish.addImage(greenFish);
    
  }

  
 if(randomNub === 1){
    fish.addImage(byFish);
    
  }

  if(randomNub === 3){
    fish.addImage(ybFish);
    
  }

  

  
 

  if(fish.position.x>1000){
    fish.position.x = x;
  }
  }

  //if(shakeFactor>5){
  //  shakeFactor-=1.2
  //}
  //fish.rotation = shakeFactor
}

function removeFish(hookINS,fish){
  
  //console.log(fish);
  fish.remove();
  //if(randomNub === 0 && hookINS.isTouching(fishGroup)){
  //  score+=10
   
  //}

  //if(randomNub === 2 && hookINS.isTouching(fishGroup)){
 //score+=5
    
  //}
  
}
function skake(){

  if(shakeFactor>5){
    shakeFactor-=1.2
  }
  //fisherman.rotation=5;
  //fisherman.rotation=0;
  //fisherman.rotation=-5;
}