class Ground{
    constructor(x,y,w,h){
        var ground_options ={
            isStatic: true
        }
    
        this.body = Bodies.rectangle(x,y,w,h,ground_options);
        World.add(world,this.body);
   this.width=w;
   this.height=h; 
}
display(){
  Push();
  translate(this.body.position.x,this.body.position.y)  
  
  fill(128,128,128)
  rectMode(CENTER);
    rect(0,0,this.width,this.height);
pop();

}


} 