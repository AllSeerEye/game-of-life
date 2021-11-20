let grid; // Setting up variables
let cols;
let rows;

let w = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);

  cols = floor(width / w);
  rows = floor(height / w);

  frameRate(16);

  grid = make2DArray(cols, rows); // Make the grid
}

function draw() {
  background(220);
  generate(); // New generation

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      let x = i * w;
      let y = j * w;

      fill(map(grid[i][j], 0, 1, 255, 0)); // Filling the cells based on state
      rect(x, y, w, w);
    }
  }
}

function generate() { // Makes the next generation
  let next = make2DArray(cols, rows);

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      let count = checkNeighbors(i, j);

      if (grid[i][j] === 1) { // If cell is alive
        if (count < 2 || count > 3) {
          next[i][j] = 0;
        } else if (count === 2 || count === 3) {
          next[i][j] = 1;
        }
      } else { // If cell is dead
        if (count === 3) {
          next[i][j] = 1;
        } else {
          next[i][j] = 0;
        }
      }
    }
  }

  let temp = grid;
  grid = next;
  next = grid;
}

function checkNeighbors(x, y) { // Returns the number of neighbors of a cell
  let sum = 0;

  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      let cellX = x + i;
      let cellY = y + j;

      if (cellX < 0) {
        cellX = grid.length - 1;
      } else if (cellX > grid.length - 1) {
        cellX = 0;
      }

      if (cellY < 0) {
        cellY = grid.length - 1;
      } else if (cellY > grid.length - 1) {
        cellY = 0;
      }

      sum += grid[cellX][cellY];
    }
  }

  sum -= grid[x][y];
  return sum;
}

function make2DArray(cols, rows) { // Just to make life easier
  let arr = new Array(cols);

  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = floor(random(0, 2));
    }
  }

  return arr;
}
