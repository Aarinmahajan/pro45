class Board{
    constructor(x, y, width, height) {
        var options = {
            isStatic: true,
            density:"0"
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.width = this.height;
       

        World.add(world, this.body);

    }
    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        strokeWeight(4);
        stroke("black");
        pop()
    }


}