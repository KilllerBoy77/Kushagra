const Engine = Matter.Engine; //const Kushagra = Kushagra.Arnav
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;

function setup(){
  createCanvas(1000,500);

    myEngine = Engine.create();// automatically creates myEngine.world;
    myWorld = myEngine.world; /// renaming
    

}

function draw(){

    Engine.update(myEngine);

}