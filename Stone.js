class Stone {
    constructor(x, y) {
      var options = {
          isStatic:false,
          'restitution':0,
          'friction':1,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, 20, options);
      
    this.r = 20;

      
      World.add(world, this.body);
      this.image = loadImage("stone.png");
     
    }
    display(){
      var pos =this.body.position;
      
      
      push();
      imageMode(CENTER);
      fill("red");
      ellipseMode(RADIUS);
      stroke("green")
      image(this.image,pos.x,pos.y,40,40);
      pop();
    }
  };