var paper;
var dustbin;
var ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(200, 650, 20, 20);

	dustbin1 = new DustBin(700, 600, 100, 20 );

	dustbin2 = new DustBin(750, 650, 20, 100 );

	dustbin3 = new DustBin(650, 600, 100, 20);

	ground = new ground(200, 680, 700, 10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body, paperObject.body.position,{x: 85, y: -85});
	}
}



