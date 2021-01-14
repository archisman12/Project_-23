var helicopterIMG, helicopter, packageSprite,packageIMG;
var box1,box2,box3;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;







function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopter=createSprite(width/2, 200, 10,10);
	helicopter.addImage(helicopterIMG)
	helicopter.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(400 , 200 , 20 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

 	


	


	Engine.run(engine);
	box1 = new Box(400,650,215,20);
	box2 = new Box(300,610,20,100);
	box3 = new Box(500,610,20,100);
	
  
}


function draw() {
  background(0);
Engine.update(engine);


  rectMode(CENTER);
  
   
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  packageSprite.x=helicopter.x


  box1.display();
  box2.display();
  box3.display();

  
  drawSprites();
  
  
 
}

function keyPressed(){
if( keyCode===LEFT_ARROW){
     helicopter.x=helicopter.x-8
}
if( keyCode===RIGHT_ARROW){
	helicopter.x=helicopter.x+8
}
if( keyCode===DOWN_ARROW){
	
	Body.setStatic(packageBody,false)
}



}
