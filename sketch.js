const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

var box6, box7, box8, box9, box10, log6, log7, log8, log9, log10, pig3, pig4;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1400,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(700,height,1400,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);


    box6 = new Box(1100, 320, 70, 70);
    box7 = new Box(1300, 320, 70, 70);
    
    pig3 = new Pig(1200, 320);

    log6 = new Log(1200,250,275, PI/2);

    box8 = new Box(1100, 220, 70, 70);
    box9 = new Box(1300, 220, 70, 70);

    pig4 = new Pig(1200, 220);
    
    log7 = new Log(1200,200, 275, PI/2);

    box10 = new Box(1200, 170, 70, 70);

    log9 = new Log(1150,100, 125, PI/3);
    log10 = new Log(1230,100, 125, -PI/3);

    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    box6.display();
    box7.display();

    pig3.display();
    pig4.display();

    log6.display();
    log7.display();
    
    box8.display();
    box9.display();

    box10.display();

    log9.display();
    log10.display();


    bird.display();
    platform.display();
   
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}