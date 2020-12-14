
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy,boyImage;

function preload()
{
	boyImage = loadImage("boy.png"); 
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;
ground = new Ground(600,680,1200,20)
stone = new Stone(250,420);
boy = createSprite(300,480,50,50);
	boy.addImage(boyImage);
	boy.scale = 0.1
tree = new Tree(900,350,50,50);

mango1 = new Mango(830,250);
mango2 = new Mango(850,300);
mango3 = new Mango(900,200);
mango4 = new Mango(950,250);
mango5 = new Mango(1000,300);
mango6 = new Mango(1000,200);
sling1 = new Slingshot(stone.body,{x:250,y:420});


	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  boy.display();
  sling1.display();
  
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  ground.display();
  stone.display();
  drawSprites();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
}



function keyPressed() {
    if (keyCode === 32) {
     Matter.Body.setPosition(stone.body,{x:250,y:420});
    sling1.attach(stone.body);
	}
}


function mouseDragged() {

	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
	
	}
	
	function mouseReleased() {
	
		sling1.fly();
	
	}
	

  function detectCollision(lstone,lmango){
    
    mangoBodyPosition=lmango.body.position
    stoneBodyPosition=lstone.body.position
    
    var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
    
      if(distance<=lmango.r+lstone.r)
      {
        
        Matter.Body.setStatic(lmango.body,false);
      }
  
    }



