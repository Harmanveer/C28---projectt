class tree
{
    constructor(x,y)
    {
        var options=
        {
            isStatic: true
        }

        this.body = Bodies.rectangle(x, y, 500, 700, options);
        this.width = 500;
        this.height = 750;
        this.image = loadImage("Sprites/tree.png");
        World.add(world, this.body);
    }
    display()
    {
        imageMode(CENTER)
        image(this.image, 500,350, this.width, this.height);
    }
}