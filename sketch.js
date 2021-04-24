
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var paper,ground,leftwall,rightwall,bottomwall;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

paper = new Paper(100,600,10);
ground = new Ground(400,670,800,15);
leftwall = new Dustbin(550,620,20,100);
bottomwall = new Dustbin(610,660,100,15);
rightwall = new Dustbin(670,620,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);
  ground.display();
  paper.display();
  leftwall.display();
  rightwall.display();
  bottomwall.display();
  
  drawSprites();
 
}

function Presskey(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x: 15,y: -15})
	}
}



