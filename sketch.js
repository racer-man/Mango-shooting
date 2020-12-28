
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world
var tree,treeImage,back;
var land;
var boy, boyI;
var rock,Img;
var chain;
var mango1,mango2,mango3,mango4,mango5,mango6,Image1; 
  
function preload()
{
	treeImage = loadImage("tree.png");
	back = loadImage("village.jpg");
	Img = loadImage("stone.png");
	boyI = loadImage("boy.png");
	Image1 = loadImage("mango.png")
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	mango1 = createSprite(1000,200,23,23);
	mango1.addImage(Image1);
	mango1.scale = 0.05;
	
	mango2 =createSprite(800,250,23,23);
	mango2.addImage(Image1);
	mango2.scale = 0.05;

	mango3 = createSprite(900,120,23,23);
	mango3.addImage(Image1)
	mango3.scale = 0.05;
	
	mango4 = createSprite(950,25,23,23)
	mango4.addImage(Image1)
	mango4.scale = 0.05;

	rock = new Stone(320,225);
	chain = new SlingShot(rock.body,{x:110 , y:230});
	
	
	

	//mango5 = createSprite(250)
	
	ground = createSprite(10,690,3505,100);
	ground.shapeColor = "green";
	boy = createSprite(160,280,23,23);
	boy.addImage(boyI);
	boy.scale = 0.1;

	tree = createSprite(900,200)
	tree.addImage(treeImage);
	tree.scale = 0.3;

	World.add(world,ground);

	Engine.run(engine);
	  
}
function mouseDragged(){
    Matter.Body.setPosition(rock.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    chain.fly();
}


function draw() {
	if (keyIsPressed === true) {
		chain.attach();
	  }

    rectMode(CENTER);
    background(back);
    push();
    rect(width/2,400,width,20);
	chain.display();
    drawSprites();
    
    
	rock.display();
	


	collision(rock,mango1);
	

	strokeWeight(3);
	
	
}
function collision(a,b){
	var d = dist(a.body.position.x,a.body.position.y,b.body.position.x,b.body.position.y)
	if(d <= 50){
		Body.setStatic(b.body,false);
	}
}