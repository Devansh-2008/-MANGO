class Tree {
    constructor(x, y,width,height) {
      var options = {
          isStatic:true
          
      }
      this.width = width;
      this.height = height;
  

      this.body = Bodies.rectangle(x, y, width,height, options);
      
    
      
      World.add(world, this.body);
      this.image = loadImage("tree.png");
     
    }
    display(){
      var pos =this.body.position;
      
      
     
      imageMode(CENTER);
     
     
      image(this.image,pos.x,pos.y,400,400);
     
    }
  };