class Mango{
    constructor(x, y, width, height){
      var options ={ 
      'isStatic': false,
      'friction': 5.3,
      'restitution':0.03
    }
this.image = loadImage("mango.png");
    this.body = Bodies.rectangle(x,y,width,height)
World.add(world,this.body)
    }
    display(){
        
        
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
       
        pop();
    }
}
  
  