const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var number1,number2,number3,number4,number5,number6,board ;
var score= 15+'M'+' $';

function preload() {
}

function setup() {
  createCanvas(2000,2000);
  engine = Engine.create();
    world = engine.world;
  number1=new Number1(320,500,100,100);
  number2=new Number2(440,500,100,100);
  number3=new Number3(560,500,100,100);
  number4=new Number4(680,500,100,100);
  number5=new Number5(800,500,100,100);
  number6=new Number6(920,500,100,100);
 
}

function draw() {
  background("white");
  Engine.update(engine);
  number1.display();
  number2.display();
  number3.display();
  number4.display();
  number5.display();
  number6.display();
  //board.display();
  textSize(20);
  fill("black");
  text("Money: " + score, 450, 50);
  
  drawSprites()
}