let sky, sun, birds, barcrowd, barwindow, facade;
let startTime;

let sunSize = 300;
let scrollY = 0;
const collageWidth = 1200;
const collageHeight = 5000;
let growing = true;

function preload() {
  sky = loadImage("assets/sky.png");
  sun = loadImage("assets/cornersun.png");
  birds = loadImage("assets/birds.gif");
  barwindow = loadImage("assets/window.png");
  facade = loadImage("assets/newfacade.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  startTime = millis();
}

function draw() {
  background(0);
  let centerX = (width - collageWidth) / 2;

  /**
   * SKY SCENE
   */

  //sky
  image(sky, centerX, -scrollY, collageWidth, 1200);

  //sun
  let sunX = centerX + collageWidth - sunSize;
  image(sun, sunX, -scrollY, sunSize, sunSize);
  if (growing) {
    sunSize += 1;
    if (sunSize >= 600) growing = false;
  } else {
    sunSize -= 1;
    if (sunSize <= 300) growing = true;
  }

  //birds
  let duration = 15000;
  let elapsed = (millis() - startTime) % duration;

  let progress = elapsed / duration;
  let x = lerp(width, -200, progress);

  image(birds, x, -scrollY + 200, 400, 400);

  //bar

  image(barwindow, centerX - 10, -scrollY + 950, collageWidth + 10, 250);

  /**
   * TRANSITION
   */

  //facade
  image(facade, centerX, -scrollY + 1200, collageWidth, 900);

  //canvas border
  // noFill();
  // stroke(255);
  // strokeWeight(2);
  // rect(centerX, -scrollY, collageWidth, collageHeight);
}

function mouseWheel(event) {
  scrollY += event.delta;
  scrollY = constrain(scrollY, 0, collageHeight - height);
  return false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked() {
  console.log("Mouse clicked at: " + mouseX + ", " + mouseY);
}
