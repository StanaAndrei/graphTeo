function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

let rendered = false;
const TEXT1 = 'GRAPH', TEXT2 = 'THEORY';
const LETTERLEN = 24;
const DELTA1 = TEXT1.length * LETTERLEN, DELTA2 = TEXT2.length * LETTERLEN;
let x1, x2;
const TRANSITIONSPEED = 3.5;
const renderTitle = () => {
    if (rendered) {
        return;
    }
    //1
    textSize(32);
    text(TEXT1, x1, height / 2);
    if (x1 + DELTA1 < width / 2) {
        x1 += TRANSITIONSPEED;
    }
    //2
    text(TEXT2, x2, height / 2);
    if (x2 - DELTA2 > width / 2 - 120) {
        x2 -= TRANSITIONSPEED;
    }
}

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    console.log('sketch ok!');
    canvas.position(0, 0);
    canvas.style('z-index', -1);
    angleMode(DEGREES);
    //ini
    x1 = 0;
    x2 = width - 0;
}

function draw() {
    background(148, 177, 227);
    renderTitle();
}