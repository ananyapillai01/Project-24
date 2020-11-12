class DustBin{
    constructor(x, y, width, height){
        var options = {
            resitutuion: 0.4,
            isStatic: true,
            friction: 0.5,
            density: 1.2
        }
        this.body = Bodies(x, y, width, height, options);
        this.w = width;
        this.h = height;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("white");
        rect(0, 0, this.h, this.w);
        pop();
    }
}