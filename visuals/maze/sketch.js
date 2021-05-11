let board;
const n = 25;
const SIZE = 500;

function setup() {
    console.log(SIZE);
    let canvas = createCanvas(SIZE, SIZE );
    canvas.position(100, 100);
    board = new Array(n).fill().map(() => []);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            board[i].push(new Cell(i, j));
        }
    }//*/
}

function draw() {
    background(220);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            board[i][j].draw();
        }
    }//*/
}