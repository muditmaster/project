const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1;
var bob2;
var bob3;
var bob4;
var bob5;

var rope1;
var rope2;
var rope3;
var rope4;
var rope5;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	ellipseMode(RADIUS)

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic: true			
	}

	var bob1_options = {
		restitution: 0.8	
	  }

	  var bob2_options = {
		restitution: 0.8	
	  }

	  var bob3_options = {
		restitution: 0.8
	  }

	  var bob4_options = {
		restitution: 0.8
	  }

	  var bob5_options = {
		restitution: 0.8
	  }



	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);
	

	bob1 = Bodies.circle(300,400,25,bob1_options);
	World.add(world,bob1);
	bob2 = Bodies.circle(350,400,25,bob2_options);
	World.add(world,bob2);
	bob3 = Bodies.circle(400,400,25,bob3_options);
	World.add(world,bob3);
	bob4 = Bodies.circle(450,400,25,bob4_options);
	World.add(world,bob4);
	bob5 = Bodies.circle(500,400,25,bob5_options);
	World.add(world,bob5);	

	rope1 = Matter.Constraint.create({
		pointA:{x:300,y:100},
		bodyB:bob1,
		pointB:{x:0,y:0},
		length:200,
		stiffness:0.1
	  });

	  World.add(world,rope1);

	  rope2 = Matter.Constraint.create({
		pointA:{x:350,y:100},
		bodyB:bob2,
		pointB:{x:0,y:0},
		length:200,
		stiffness:0.1
	  });

	  World.add(world,rope2);

	  rope3= Matter.Constraint.create({
		pointA:{x:400,y:100},
		bodyB:bob3,
		pointB:{x:0,y:0},
		length:200,
		stiffness:0.1
	  });

	  World.add(world,rope3);

	  rope4 = Matter.Constraint.create({
		pointA:{x:450,y:100},
		bodyB:bob4,
		pointB:{x:0,y:0},
		length:200,
		stiffness:0.1
	  });

	  World.add(world,rope4);

	  rope5 = Matter.Constraint.create({
		pointA:{x:500,y:100},
		bodyB:bob5,
		pointB:{x:0,y:0},
		length:200,
		stiffness:0.1
	  });

	  World.add(world,rope5);
  
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");
  Engine.update(engine);

  rect(roof.position.x,roof.position.y,230,20);

   //call display() to show ropes here
   push();
  strokeWeight(2);
  stroke(255);
  line(rope1.pointA.x,rope1.pointA.y,bob1.position.x,bob1.position.y);
  line(rope2.pointA.x,rope2.pointA.y,bob2.position.x,bob2.position.y);
  line(rope3.pointA.x,rope3.pointA.y,bob3.position.x,bob3.position.y)
  line(rope4.pointA.x,rope4.pointA.y,bob4.position.x,bob4.position.y)
  line(rope5.pointA.x,rope5.pointA.y,bob5.position.x,bob5.position.y)
  pop();
  



 
  
  //create ellipse shape for multiple bobs here
  ellipse(bob1.position.x,bob1.position.y,25);
  ellipse(bob2.position.x,bob2.position.y,25);
  ellipse(bob3.position.x,bob3.position.y,25);
  ellipse(bob4.position.x,bob4.position.y,25);
  ellipse(bob5.position.x,bob5.position.y,25);

}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed()
{
  if(keyCode==UP_ARROW)
    {
      Matter.Body.applyForce(bob1,{x:0,y:0},{x:-0.10,y:0});
    }
}	
