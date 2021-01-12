
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint

var boy;
var ground;
 var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var tree;
var stone;
var launcher;

var launchingForce=100;
function preload()
{
  boy=loadImage("boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground=new Ground(width/2,600,width,20);

mango1=new Mango(1100,100,30);
mango2=new Mango(1170,130,30);
mango3=new Mango(1010,140,40);
mango4=new Mango(1000,70,40);
mango5=new Mango(1100,70,40);
mango6=new Mango(1000,230,30);
mango7=new Mango(900,230,30);
mango8=new Mango(1140,150,30);
mango9=new Mango(1100,230,40);
mango10=new Mango(1200,200,40);
mango11=new Mango(1120,50,40);
mango12=new Mango(900,160,30);

tree=new Tree(1050,580);

stone=new Stone(235,420,30);

launcher=new Launcher(stone.body,{x:235,y:420})
  


Engine.run(engine);
  
}


function draw() {
  
  Engine.update(engine);
  background(230);
  
  image(boy,200,340,200,300)
ground.display();
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  
  stone.display();
  
  tree.display();
  
  launcher.display();
  drawSprites();
 
  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);
  detectcollision(stone,mango4);
  detectcollision(stone,mango5);
  detectcollision(stone,mango6);
  detectcollision(stone,mango7);
  detectcollision(stone,mango8);
  detectcollision(stone,mango9);
  detectcollision(stone,mango10);
  detectcollision(stone,mango11);
  detectcollision(stone,mango12);
}
function mousedragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseRealised(){
  launcherObject.fly()
}
function detectcollision(lstone,lmango)
{
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)

 if (distance<=lmango.r+lstone.r)
 {
     Matter.Body.setStatic(lmango.body,false)
 }


}
