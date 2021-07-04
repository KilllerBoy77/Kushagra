const Engine = Matter.Engine; //const Kushagra = Kushagra.Arnav
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine,myWorld;
var box1,ground,ball1;

function setup(){

    createCanvas(1000,800);

    myEngine=Engine.create();//myEngine.world
    myWorld=myEngine.world;

   
    ground = new Ground(500,750,width,50);

    console.log(ground);

    box1 = new Box(500,700,70,70);
    console.log (box1);
    
    box2 = new Box(500,600,70,70);

    box3 = new Box(500,500,70,70);

    box4 = new Box(500,400,70,70);

    box5 = new Box(500,300,70,70);

    box6 = new Box(500,200,70,70);

    box7 = new Box(500,100,70,70);

    box8 = new Box(500,25,70,70);

    box9 = new Box(600,700,70,70);

    box10 = new Box(600,600,70,70);

    box11 = new Box(600,500,70,70);

    box12 = new Box(600,400,70,70);

    box13 = new Box(600,300,70,70);

    box14 = new Box(600,200,70,70);

    box15 = new Box(600,100,70,70);

    box16 = new Box(600,25,70,70);

    ball1 = new Ball(350,400,50);

    rope1 = new Rope({x:300,y:200},ball1.ball)
}

function draw(){
    background(255);
    Engine.update(myEngine);

    ground.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    ball1.display();
    rope1.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball1.body, { x: mouseX, y: mouseY });
}



