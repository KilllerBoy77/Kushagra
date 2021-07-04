class Ball{
    constructor(x,y){
    this.x=x;
    this.y=y;
    this.r=50;
    this.image = loadImage("Rock.png");
    this.ball = Bodies.circle(x,y,50,{restitution:0.8});
    World.add(myWorld,this.ball);
    }
display(){
   var pos = this.ball.position;
   var angle = this.ball.angle;
   push();
   imageMode(CENTER)
   image(this.image,pos.x,pos.y,100,100);
   pop();


}
}