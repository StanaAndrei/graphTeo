let cols, rows;
let w = 20;
let grid = [];

let current;

let stack = [];

function setup() {
  if (frames) {
    frameRate(frames);
  }
  let canvas = createCanvas(600, 600);
  canvas.position(50, 50);
  cols = floor(width / w);
  rows = floor(height / w);
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      let cell = new Cell(i, j);
      grid.push(cell);
    }
  }
  current = grid[0];
}

function draw() {
  background(1);
  for (let i = 0; i < grid.length; i++) {
    grid[i].draw();
  }
  dfs();
  mfun();
}

const mfun = () => {
  
}

const dfs = () => {
  current.visited = true;
  current.highlight(color(252, 3, 3));
  let next = current.getNext();
  if (next) {
    next.visited = true;
    stack.push(current);
    removeWalls(current, next);
    current = next;
  } else if (stack.length > 0) {
    current = stack.pop();
  }
}

function index(i, j) {
  if (i < 0 || j < 0 || i > cols - 1 || j > rows - 1) {
    return -1;
  }
  return i + j * cols;
}

function removeWalls(a, b) {
  let x = a.i - b.i;
  if (x === 1) {
    a.walls[3] = false;
    b.walls[1] = false;
  } else if (x === -1) {
    a.walls[1] = false;
    b.walls[3] = false;
  }
  let y = a.j - b.j;
  if (y === 1) {
    a.walls[0] = false;
    b.walls[2] = false;
  } else if (y === -1) {
    a.walls[2] = false;
    b.walls[0] = false;
  }
}
