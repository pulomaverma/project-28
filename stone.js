class Stone{
    constructor(x,y,r)
    {
       var options ={
        isStatic: true,  
       restitution:0.8,
       friction:1,
       Dencity:1.2
       }
       this. x=x;
       this.y=y;
       this.r=r;
       this.image=loadImage("stone.png")
       this.body = Bodies.circle(x,y,r/2,options);
       World.add(world,this.body);
  
    }
   display(){
       var pos=this.body.position
       push();
       translate(pos.x,pos.y);
     imageMode(CENTER);
     ellipesMode(RADIUS);
       image(this.image,0,0,r*2,r*2);
   pop();
   }
   }