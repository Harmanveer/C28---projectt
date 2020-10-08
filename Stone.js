class Stone
{
    constructor(x,y)
    {
        var options=
        {
            isStatic: true,
            restitution: 0,
            friction: 1,
            density: 1.2,
        }

        this.body = Bodies.rectangle(x, y, 20, 20, options);
        this.width = 50;
        this.height = 50;
        this.image = loadImage("Sprites/stone.png");
        World.add(world, this.body);
    }
    display()
    {
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER)
        image(this.image, 1,500, this.width, this.height);
        pop();
    }
}