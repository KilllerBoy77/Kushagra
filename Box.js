class Box{
  constructor(x,y,width,height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = loadImage("buildings.png")
    this.defaultObject = Bodies.rectangle(x,y,width,height,{restitution:0.8});
    World.add(myWorld,this.defaultObject);
  }

  display(){

    var pos = this.defaultObject.position;
    var angle = this.defaultObject.angle;
    push()
    //translate(pos.x,pos.y)
    rotate(angle)
    imageMode(CENTER)
    image(this.image,pos.x,pos.y,90,100)
    pop()
  }
}