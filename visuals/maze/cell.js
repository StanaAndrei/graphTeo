const LEN = 20;
class Cell {
  constructor(i, j) {
    this.i = i;
    this.j = j;
    this.walls = new Array(4).fill(true);
    this.visited = false;
  }
  draw() {
    let x = this.i * LEN;
    let y = this.j * LEN;
    stroke(255);
    if (this.walls[0]) {
      line(x, y, x + LEN, y);
    }
    if (this.walls[1]) {
      line(x + LEN, y, x + LEN, y + LEN);
    }
    if (this.walls[2]) {
      line(x + LEN, y + LEN, x, y + LEN);
    }
    if (this.walls[3]) {
      line(x, y + LEN, x, y);
    }
    //check vis
    if (this.visited) {
        noStroke();
        fill('rgb(50,205,50)');
        rect(x, y, LEN, LEN);
    }
  }
}
