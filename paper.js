class Paper{
    constructor(x, y){
        var options = {
            isStatic: false,
            resitution: 0.4,
            friction: 0.5,
            density: 1.2,
        }
        this.body = Bodies.circle(x, y, 20, 20, options);
        this.h = 20;
        this.w = 20;

        World.add(world, this.body); 
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.w, this.h);
        pop();
    }
}