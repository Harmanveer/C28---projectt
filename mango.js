class mango
{
    constructor(x,y,r)
    {
        var options=
        {
            isStatic: true,
            restitution: 0,
            friction: 1,
            density: 1.2,
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("sprites/mango.png");
        this.body = Bodies.circle(this.x, this.y, this.r, options);
        World.add(world, this.body);
    }

    display()
    {
        var mangoPos = this.body.position
        push()
        translate(mangoPos.x, mangoPos.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        ellipseMode(CENTER);
        image(this.image, this.x, this.y, this.width, this.height);
        pop()
    }
};