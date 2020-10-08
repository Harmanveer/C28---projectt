
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, boy1, stone1, tree1;
var mango1, mango2, mango3;
var slingshot;

function preload()
{
}

function setup() 
{
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,height,800,20);

	boy1 = new boy(60,530);

	tree1 = new tree(500,1);

	stone1 = new Stone(55,65);

	mango1 = new mango(480,520,20);
	mango2 = new mango(500,480,20);
	mango3 = new mango(520,560,20);

	slingshot = new SlingShot(stone1.body, {x: 55, y: 500});

	Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  background("lightblue");

  mango1.display();
  mango2.display();
  mango3.display();

  ground.display();
  tree1.display();

  boy1.display();
  stone1.display();

  slingshot.display();
 
}

function mouseDragged()
{
	Matter.Body.setPosition(stone1.body,{x: mouseX, y: mouseY});
}

function mouseReleased()
{
	slingshot.fly();
}



