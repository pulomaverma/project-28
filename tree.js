class Tree{
    constructor(x,y){
        {
            isStatic: true
        }
   this. x=x;
   this.y=y;
   this.treeWidth=450;
   this.treeHeight=600;
   this.treeThickness=61;

   this.image=loadImage("tree.png")

   this.body = Bodies.rectangle(this.x,this.y,this.treeWidth,this.treeThickness,{isStatic:true});
        World.add(world,this.body);
 
}
display(){
    Push();
    translate(this.body.position.x,this.body.position.y+10)
    fill(225);
    imageMode(CENTER);
    image(this.image,0,-this.treeHeight/2,this.treeWidth,this.treeHeight);
pop();
}


} 