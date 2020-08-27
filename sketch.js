
const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
var matter;
var engine;
var atom1=[];
var pinko1=[];
var diviaions=[];
var partHeight=300;
var ground1;



//if you have declayered atoms then what is particle?????

function setup() {
  engine=Engine.create();
  world = engine.world;
  createCanvas(800,400);
  //wrong class name
 ground1=new Ground(width/2,width,height,20)

 for (var k = 0; k <=width; k = k + 80) {
  divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
}


 for (var j = 75; j <=width; j=j+50) 
 {
 
    plinko1.push(new Plinko(j,75));
 }

 for (var j = 50; j <=width-10; j=j+50) 
 {
 
    plinko1.push(new Plinko(j,175));
 }

  for (var j = 75; j <=width; j=j+50) 
 {
 
    plinko1.push(new Plinko(j,275));
 }

  for (var j = 50; j <=width-10; j=j+50) 
 {
 
    plinko1.push(new Plinko(j,375));
 }

 
}

function draw() {
  background(255,255,255);  
  drawSprites();
  Engine.update(engine);
  ground1.display();
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   for (var j = 0; j < particles.length; j++) {
   //what is particle?
    particles[j].display();
  }
  for (var k = 0; k < divisions.length; k++) {
    
    divisions[k].display();
  }
}