  class Rope{
      constructor(pointA,bodyB){
          var ops={
          pointA:pointA,
          bodyB:bodyB,
          length:200,
          stiffness:0.5
          }
          this.pointA=pointA
          this.rope = Matter.Constraint.create(ops)
          World.add(myWorld,this.rope)
      }
display(){
    var posA=this.pointA;
    var posB=this.rope.bodyB.position;
    push();
    strokeWeight(7)
    line(posA.x,posA.y,posB.x,posB.y)
    pop();
}
fly(){
    this.rope.bodyB=null
}
  }
