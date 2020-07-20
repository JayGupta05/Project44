var hall1,hall2,hall3;
var rand, backsprite;
var steve,steveImg;
var logan,loganImg;


function preload(){
  hall1 = loadImage("images/1.png");
  hall2 = loadImage("images/2.png");
  hall3 = loadImage("images/3.png");
  steveImg = loadImage("images/playingCharacter.jpg");
  loganImg = loadImage("images/supportingNPC.jpg");
}

function setup(){
  createCanvas(displayWidth,displayHeight-100);
  backsprite = createSprite(0,(displayHeight-100)/2,displayWidth,displayHeight);  
  backsprite.addImage("1",hall1);
  backsprite.addImage("2",hall2);
  backsprite.addImage("3",hall3);
  backsprite.velocityX = -5;

  steve = new Steve(300,300);
  logan = new Logan(150,300)}

function draw(){
  if(frameCount % 2000 === 0){
    rand = Math.round(random(1,3));
    console.log(rand);
    backsprite.x = backsprite.width/2;
    switch(rand){
      case 1 : backsprite.changeAnimation("1");
      break;
      case 2 : backsprite.changeAnimation("2",);
      break;
      case 3 : backsprite.changeAnimation("3");
      break;
    }
       
  }
  if(backsprite.x<=0){
    backsprite.x = backsprite.width/2;
  }

  steve.display();
  logan.display();
  steve.move();

  logan.body.x = steve.character.x-150;
  logan.body.y = steve.character.y;
  
  console.log(logan.body.y);
  console.log(steve.character.y);
  
  drawSprites();
}