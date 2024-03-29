class Bird {

    constructor() {
        this.y = height / 2;
        this.x = 45;
        this.gravity = 0.6;
        this.lift = -15;
        this.velocity = 0;
    }

    show() {
        fill(255);
        ellipse(this.x, this.y, 32, 32);
    }

    update() {
        this.velocity += this.gravity;
        this.velocity *= 0.9;
        this.y += this.velocity;

        if (this.y > height) {
            this.y = height;
            this.velocity = 0;
        }
        if (this.y < 0) {
            this.y = 0;
            this.velocity = 0;
        }
    }

    up() {
        this.velocity += this.lift;
    }
}