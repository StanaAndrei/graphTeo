function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    console.log('sketch ok!');
    canvas.position(0, 0);
    canvas.style('z-index', -1);
    angleMode(DEGREES);
}

function draw() {
    background(148, 177, 227);
    
}