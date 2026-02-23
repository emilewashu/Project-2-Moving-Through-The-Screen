let runnerGif;
let bg;

function setup() {
  createCanvas(windowWidth, windowHeight);
  bg = loadImage("assets/pixelpark.jpg");
  createRunner();
}

function draw() {
  background(bg);
}

function createRunner() {
  runnerGif = createImg("assets/run.gif");
  runnerGif.position(width / 2 - 50, height / 2);
  runnerGif.size(100, 100);
}
