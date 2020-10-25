
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

	dustbin1=new Bin(700,600,10,100)
	dustbin2=new Bin(500,600,10,100)
	dustbin3=new Bin(600,646,200,10)

paper=new Paper(200,645,50)

ground=new Ground(300,650,1000,4);



	Engine.run(engine);
  
	
	

}


function draw() {
  rectMode(CENTER);
  background(0);

 
  Engine.update(engine)
  

  dustbin1.display();

dustbin2.display();

dustbin3.display();

paper.display();

ground.display();



drawSprites();
 
}

function keyPressed(){

if(keyCode===UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})

}

}

