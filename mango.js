class Mango{
    constructor(x,y,r)
    {
       var options ={
        isStatic: true,  
       restitution:0.8,
       friction:1,
       Dencity:1.2
       }
       x=x;
      y=y;
       r=r;
       this.image=loadImage("mango.png")
       this.body = Bodies.circle(x,y,r,options);
       World.add(world,this.body);
  
    }
   display(){
       var pos=this.body.position
       push();
       translate(pos.x,pos.y);
       rotate(this.body.angle)
     imageMode(CENTER);
     ellipesMode(CENTER);
       image(this.image,0,0,r*2,r*2);
   pop();
   }
   }