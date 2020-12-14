class Mango {
    constructor(x, y) {
      var options = {
          isStatic:true,
          'restitution':0,
          'friction':1
      }
      this.body = Bodies.circle(x, y, 20, options);
      this.r = 20;

      
      World.add(world, this.body);
      this.image = loadImage("mango.png");
     
    }
    display(){
      var pos =this.body.position;
      
      
      push();
      imageMode(CENTER);
      fill("red");
      stroke("green")
      image(this.image,pos.x,pos.y,40,40);
      pop();
    }
  };