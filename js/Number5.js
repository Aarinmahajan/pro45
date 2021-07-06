class Number5 {
    constructor(x, y, width, height) {
        var options = {
            isStatic: true,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.width = this.height;
        //this.image1 = loadImage("images/1.png")
        //this.image2 = loadImage("images/2.png")
        //this.image3 = loadImage("images/3.png")
        //this.image4 = loadImage("images/4.png")
        this.image5 = loadImage("images/5.png")
        //this.image6 = loadImage("images/6.png")

        World.add(world, this.body);

    }
    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        strokeWeight(4);
        stroke("black");
        //image(this.image1, 0, 0, this.width, this.height);
        //image(this.image2, 0, 0, this.width, this.height);
        //image(this.image3, 0, 0, this.width, this.height);
        //image(this.image4, 0, 0, this.width, this.height);
        image(this.image5, 0, 0, this.width, this.height);
        //image(this.image6, 0, 0, this.width, this.height);
        pop()
    }


}