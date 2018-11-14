function make2DArray(cols, rows) {
    let arr = new Array(cols);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = new Array(rows);
    }
    return arr;
  }
  
  let grid;
  let cols;
  let rows;
  let resolution = 5;
  let counts = 0;
  let running = false;
  
  function setup() {
    var canvas = createCanvas(700, 500);
    canvas.parent("sketch-holder");
    cols = width / resolution;
    rows = height / resolution;
    frameRate(24);
    grid = make2DArray(cols, rows);
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        grid[i][j] = floor(random(2));
      }
    }
  }
  
  function draw() {
    if(running){
      background(255);
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          let x = i * resolution;
          let y = j * resolution;
          if (grid[i][j] == 1) {
            fill("#292e4a");
            stroke("#292e4a");
            rect(x, y, resolution - 1, resolution - 1);
          }
        }
      }
      let next = make2DArray(cols, rows);
    
      // Compute next based on grid
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          let state = grid[i][j];
          // Count live neighbors!
          let sum = 0;
          let neighbors = countNeighbors(grid, i, j);
    
          if (state == 0 && neighbors == 3) {
            next[i][j] = 1;
          } else if (state == 1 && (neighbors < 2 || neighbors > 3)) {
            next[i][j] = 0;
          } else {
            next[i][j] = state;
          }
        }
      }
      grid = next;
    }
  }
  
  function play(){
    console.log("pressed play")
    running = true;
  }
  
  function pause() {
    console.log("pressed pause")
    running = false;
  }
  
  function countNeighbors(grid, x, y) {
    let sum = 0;
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        let col = (x + i + cols) % cols;
        let row = (y + j + rows) % rows;
        sum += grid[col][row];
      }
    }
    sum -= grid[x][y];
    return sum;
  }