var gameState = 0;

var pin;

var pin1;
var pin_img;

var pin2;
var pin_img;

var pin3;
var pin_img;

var pin4;
var pin_img;

var pin5;
var pin_img;

var pin6;
var pin_img;

var pin7;
var pin_img;

var pin8;
var pin_img;

var pin9;
var pin_img;

var pin10;
var pin_img;

var bowl;
var bowl_img;

var bg;

var fpin;

var score = 0;

var sound;

function preload()
{
  pin_img = loadImage("black pin.png");
  bowl_img = loadImage("ball.png");
  bg = loadImage("background.jpg");
  fpin = loadImage("falling pin.png");
  sound = loadSound("Sound.mp3");
}

function setup() 
{
  createCanvas(displayWidth, displayHeight);
  
  pin1 = createSprite(displayWidth / 2 - 35, 345);
  pin1.addImage(pin_img);
  pin1.scale = 0.23;
  //pin1.debug = true;
  pin1.setCollider("rectangle", 0, 60, 60, 220);

  pin2 = createSprite(displayWidth / 2 + 35, 345);
  pin2.addImage(pin_img);
  pin2.scale = 0.23;
  pin2.setCollider("rectangle", 0, 60, 60, 220);

  pin3 = createSprite(displayWidth / 2, 355);
  pin3.addImage(pin_img);
  pin3.scale = 0.23;
  pin3.setCollider("rectangle", 0, 60, 60, 220);

  pin4 = createSprite(displayWidth / 2, 390);
  pin4.addImage(pin_img);
  pin4.scale = 0.23;
 // pin4.debug = true;
  pin4.setCollider("rectangle", 0, 60, 60, 220);

  pin5 = createSprite(displayWidth / 2 + 30, 384);
  pin5.addImage(pin_img);
  pin5.scale = 0.23;
  pin5.setCollider("rectangle", 0, 60, 60, 220);

  pin6 = createSprite(displayWidth / 2 - 30, 384);
  pin6.addImage(pin_img);
  pin6.scale = 0.23;
  pin6.setCollider("rectangle", 0, 60, 60, 220);

  pin7 = createSprite(displayWidth / 2 + 58, 373);
  pin7.addImage(pin_img);
  pin7.scale = 0.23;
  pin7.setCollider("rectangle", 0, 60, 60, 220);

  pin8 = createSprite(displayWidth / 2 - 58, 373);
  pin8.addImage(pin_img);
  pin8.scale = 0.23;
  pin8.setCollider("rectangle", 0, 60, 60, 220);

  pin9 = createSprite(displayWidth / 2 + 84, 365);
  pin9.addImage(pin_img);
  pin9.scale = 0.23;
  pin9.setCollider("rectangle", 0, 60, 60, 220);

  pin10 = createSprite(displayWidth / 2 - 84, 365);
  pin10.addImage(pin_img);
  pin10.scale = 0.23;
  pin10.setCollider("rectangle", 0, 60, 60, 220);

  bowl = createSprite(displayWidth / 2, displayHeight / 2 + 270);
  // bowl = createSprite(displayWidth / 2, 300);
  bowl.addImage(bowl_img);
  bowl.scale = 0.2;
  //bowl.debug = true;
  bowl.setCollider("circle", 0, 0, 190);

  pin = [pin1, pin2, pin3, pin4, pin5, pin6, pin7, pin8, pin9, pin10];

  sound.play();
}

function draw() 
{
  background(bg);
  //background("white");
  
  if(gameState == 0)
  {
    bowl.x = mouseX;
  }

  for(var i = 0; i < pin.length; i++)
  {
    if(bowl.isTouching(pin[i]))
    {
      score++;
      pin[i].addImage(fpin);
    }
  }

  drawSprites();

  textSize(40);
  fill("black");
  stroke("black");
  text("Score: " + score, displayWidth / 2 + 350, 100);


}

function keyPressed()
{
  gameState = 1;

  if(keyCode == 32  && gameState == 1)
  {
    bowl.velocityY = -4;
    bowl.lifetime = 80;
  }
}














