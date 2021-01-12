class Launcher{
    constructor(body,point ){
        var options = {
        bodyA=a,
         pointB: point,
            stiffness: 0.04,
            length: 1
        }
        
        
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
   
    }
    fly(){
        this.launcher.bodyA=null;
    } 
    display(){
       if (this.launcher.bodyA){
        var pointA = this.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(2);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
       }
       
    }
 
}