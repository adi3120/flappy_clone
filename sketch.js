let bird;

let pipes = [];


function setup() {
    createCanvas(400, 600);
    bird = new Bird();
    pipes.push(new Pipe());

}

function draw() {
    background(0);


    for (let i = pipes.length - 1; i >= 0; i--) {
        pipes[i].show();
        pipes[i].update();

        if (pipes[i].hits(bird)) {
            console.log("HIT");
        }

        if (pipes[i].offscreen()) {
            pipes.splice(i, 1);
        }
    }


    bird.show();
    bird.update();

    if (frameCount % 100 == 0) {
        pipes.push(new Pipe());
    }

}

function keyPressed() {
    if (key == ' ') {
        bird.up();
    }
}