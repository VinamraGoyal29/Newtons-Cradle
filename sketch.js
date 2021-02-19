const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var pendulum1, pendulum2, pendulum3, pendulum4, pendulum5;
var sling1, sling2, sling3, sling4, sling5;

function setup() {
	canvas = createCanvas(windowWidth, windowHeight / 1.5);


	engine = Engine.create();
	world = engine.world;

  pendulum1 = new Pendulum(290, 450, "purple");
  sling1 = new Sling(pendulum1.body, {x: 290, y: 175});
  pendulum2 = new Pendulum(350, 450, "purple");
  sling2 = new Sling(pendulum2.body, {x: 350, y: 175});
  pendulum3 = new Pendulum(410, 450, "purple");
  sling3 = new Sling(pendulum3.body, {x: 410, y: 175});
  pendulum4 = new Pendulum(470, 450, "purple");
  sling4 = new Sling(pendulum4.body, {x: 470, y: 175});
  pendulum5 = new Pendulum(530, 450, "purple");
  sling5 = new Sling(pendulum5.body, {x: 530, y: 175});
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
 
  Engine.update(engine);
  pendulum1.display();
  sling1.display();
  pendulum2.display();
  sling2.display();
  pendulum3.display();
  sling3.display();
  pendulum4.display();
  sling4.display();
  pendulum5.display();
  sling5.display();
}

function mouseDragged(){
  Matter.Body.setPosition(pendulum1.body, {x : mouseX, y : mouseY});
}
