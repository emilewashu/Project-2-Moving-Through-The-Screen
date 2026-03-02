// =========================
// ASSETS
// =========================
let sky, sun, birds, plane;
let pool, barwindow, woman1, woman2;
let facade, cat;
let street, guard;
let concretewall, metrostairs, metrocar;

// =========================
// GLOBALS
// =========================
let startTime;
let scrollY = 0;
let sunSize = 300;
let moveY = 0;
let growing = true;

let planeText = "¡Que tengas un buen vuelo!";
let birdIndex = 0;
let planeIndex = 0;

let planeTrail = [];
let trailLifetime = 700;
let letterInterval = 25;

let womenTrail = [];
let womenText =
  "¡salisreps ed jajajajaj ¡anell daduic¡ atse rop ejaiv¡ ut seturfsid ¡euq orepsE! jajajajajaj ¡aíd neub nu sagnet éuQ!";
let womenIndex = 0;
let womenInterval = 6;

let catTrail = [];
let catText = "zzzzzzzz";
let catIndex = 0;
let catInterval = 100;

let dogTrail = [];

const collageWidth = 1500;
const collageHeight = 5300;

let shakeDuration = 0;
let shakeTimer = 0;

let spanishClothes;

function preload() {
  myFont = loadFont("assets/font.ttf");

  sky = loadImage("assets/sky.png");
  sun = loadImage("assets/cornersun.png");
  birds = loadImage("assets/birds.gif");
  plane = loadImage("assets/plane.png");

  pool = loadImage("assets/pool.png");
  barwindow = loadImage("assets/newwindow.png");
  woman1 = loadImage("assets/woman1.png");
  woman2 = loadImage("assets/woman2.png");

  facade = loadImage("assets/newfacade.png");
  cat = loadImage("assets/catsleeping.png");
  dog = loadImage("assets/dog.png");

  street = loadImage("assets/palacestreet.png");
  guard = loadImage("assets/guard.png");

  concretewall = loadImage("assets/concretewall.png");
  metrostairs = loadImage("assets/metrostairs.png");
  metrocar = loadImage("assets/metrocar.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  startTime = millis();
  spanishClothes = [
    {
      word: "camisa",
      r: floor(random(0, 255)),
      g: floor(random(0, 255)),
      b: floor(random(0, 255)),
    },
    {
      word: "camiseta",
      r: floor(random(0, 255)),
      g: floor(random(0, 255)),
      b: floor(random(0, 255)),
    },
    {
      word: "pantalones",
      r: floor(random(0, 255)),
      g: floor(random(0, 255)),
      b: floor(random(0, 255)),
    },
    {
      word: "falda",
      r: floor(random(0, 255)),
      g: floor(random(0, 255)),
      b: floor(random(0, 255)),
    },
    {
      word: "vestido",
      r: floor(random(0, 255)),
      g: floor(random(0, 255)),
      b: floor(random(0, 255)),
    },
    {
      word: "chaqueta",
      r: floor(random(0, 255)),
      g: floor(random(0, 255)),
      b: floor(random(0, 255)),
    },
    {
      word: "abrigo",
      r: floor(random(0, 255)),
      g: floor(random(0, 255)),
      b: floor(random(0, 255)),
    },
    {
      word: "zapatos",
      r: floor(random(0, 255)),
      g: floor(random(0, 255)),
      b: floor(random(0, 255)),
    },
    {
      word: "blusa",
      r: floor(random(0, 255)),
      g: floor(random(0, 255)),
      b: floor(random(0, 255)),
    },
    {
      word: "bufanda",
      r: floor(random(0, 255)),
      g: floor(random(0, 255)),
      b: floor(random(0, 255)),
    },
  ];
}

function draw() {
  background(255);
  const centerX = (width - collageWidth) / 2;
  const offsetY = -scrollY;

  if (scrollY > 3000 && shakeTimer <= 0) {
    shakeDuration = 40;
    shakeTimer = shakeDuration;
  }

  let shakeX = 0;
  let shakeY = 0;

  if (shakeTimer > 0) {
    shakeX = random(-5, 5);
    shakeY = random(-2, 2);
    shakeTimer--;
  }
  translate(shakeX, shakeY);

  drawSkyScene(centerX, offsetY);
  drawTransition(centerX, offsetY);
  drawStreetScene(centerX, offsetY);
  drawMetroScene(centerX, offsetY);
}

function drawSkyScene(centerX, offsetY) {
  // SKY
  image(sky, centerX, offsetY, collageWidth, 1200);

  // SUN
  let sunX = centerX + collageWidth - sunSize;
  image(sun, sunX, offsetY, sunSize, sunSize);

  if (growing) {
    sunSize += 1;
    if (sunSize >= 600) growing = false;
  } else {
    sunSize -= 1;
    if (sunSize <= 300) growing = true;
  }

  // ------------------------------------
  // BIRDS & PLANE MOVEMENT
  // ------------------------------------
  const duration = 25000;
  const elapsed = (millis() - startTime) % duration;
  const progress = elapsed / duration;

  const xBirds = lerp(centerX + collageWidth, centerX - 50, progress);
  const xPlane = lerp(centerX - 50, centerX + collageWidth, progress);
  const yPlane = lerp(400, -200, progress);

  // ------------------------------------
  // DRAW PLANE LETTERS
  // ------------------------------------
  if (frameCount % letterInterval === 0) {
    // PLANE LETTER
    let letterP = planeText.charAt(planeIndex);

    planeTrail.push({
      x: xPlane + 100,
      y: yPlane,
      letter: letterP,
      life: trailLifetime,
    });

    planeIndex = (planeIndex + 1) % planeText.length;
  }

  textAlign(CENTER, CENTER);
  textFont(myFont);
  textSize(42);
  textStyle(BOLD);
  noStroke();

  for (let i = planeTrail.length - 1; i >= 0; i--) {
    let t = planeTrail[i];

    push();
    translate(t.x, t.y + offsetY);
    rotate(-PI / 20);
    if (i % 2 === 0) {
      fill(150, 0, 40, map(t.life, 0, trailLifetime, 0, 255));
    } else {
      fill(255, 220, 0, map(t.life, 0, trailLifetime, 0, 255));
    }
    text(t.letter, 0, 0);
    pop();

    t.life--;

    if (t.life <= 0) {
      planeTrail.splice(i, 1);
    }
  }

  // ------------------------------------
  // DRAW BIRDS
  // ------------------------------------
  image(birds, xBirds, offsetY + 400, 200, 200);

  // ------------------------------------
  // DRAW PLANE (fixed rotation origin)
  // ------------------------------------
  push();
  translate(xPlane + 100, offsetY + yPlane);
  rotate(-PI / 20);
  imageMode(CENTER);
  image(plane, 0, 0, 150, 150);
  imageMode(CORNER);
  pop();

  // ------------------------------------
  // DRAW POOL
  // ------------------------------------

  image(pool, centerX, offsetY + 650, collageWidth, 550);
  if (growing) {
    moveY += 0.2;
    if (moveY >= 40) growing = false;
  } else {
    moveY -= 0.2;
    if (moveY <= 0) growing = true;
  }

  // ------------------------------------
  // DRAW WOMEN
  // ------------------------------------
  if (frameCount % womenInterval === 0) {
    let word = womenText.charAt(womenIndex);

    womenTrail.push({
      x: random([centerX + 700, centerX + 900]),
      y: 850 + moveY,
      vx: 2.5,
      vy: -2.5,
      life: 255,
      letter: word,
    });

    womenIndex = (womenIndex + 1) % womenText.length;
  }

  image(woman1, centerX + 600, offsetY + 850 + moveY, 140, 200);
  image(woman2, centerX + 800, offsetY + 850 + moveY, 140, 200);

  for (let i = womenTrail.length - 1; i >= 0; i--) {
    let t = womenTrail[i];

    t.x += t.vx;
    t.y += t.vy;
    t.life -= 2;

    push();
    translate(t.x, t.y + offsetY);
    rotate(-PI / 12);
    textAlign(CENTER, CENTER);
    textSize(40);
    fill(0, 0, 0, t.life);
    text(t.letter, 0, 0);
    pop();

    if (t.life <= 0 || t.x > width + 200 || t.y < -200) {
      womenTrail.splice(i, 1);
    }
  }

  image(barwindow, centerX - 10, offsetY + 950, collageWidth + 20, 250);
}

function drawTransition(centerX, offsetY) {
  image(facade, centerX, offsetY + 1200, collageWidth, 1000);

  if (frameCount % catInterval === 0) {
    let word = catText.charAt(catIndex);

    catTrail.push({
      x: centerX + 300,
      y: 1360,
      vx: 0.5,
      vy: -2.5,
      life: 255,
      letter: word,
    });

    dogTrail.push({
      x: centerX + 1240,
      y: 1330,
      vx: 0.5,
      vy: -2.5,
      life: 255,
      letter: word,
    });

    catIndex = (catIndex + 1) % catText.length;
  }

  image(dog, centerX + 1220, offsetY + 1340, 150, 120);
  image(cat, centerX + 260, offsetY + 1380, 100, 50);

  for (let i = catTrail.length - 1; i >= 0; i--) {
    let t = catTrail[i];
    let d = dogTrail[i];

    // Update cat
    t.x += t.vx;
    t.y += t.vy;
    t.life -= 2;

    // Update dog
    d.x += d.vx;
    d.y += d.vy;
    d.life -= 2;

    // ---- DRAW CAT ----
    push();
    translate(t.x, t.y + offsetY);
    textAlign(CENTER, CENTER);
    textSize(40);
    fill(255, 255, 0, t.life);
    text(t.letter, 0, 0);
    pop();

    // ---- DRAW DOG ----
    push();
    translate(d.x, d.y + offsetY);
    textAlign(CENTER, CENTER);
    textSize(40);
    fill(0, 200, 255, d.life);
    text(d.letter, 0, 0);
    pop();

    if (t.life <= 0 || t.x > width + 200 || t.y < -200) {
      catTrail.splice(i, 1);
      dogTrail.splice(i, 1);
    }
  }

  // ------------------------------------
  // DRAW CLOTHESLINE
  // ------------------------------------
  stroke(0);
  strokeWeight(4);
  noFill();

  bezier(
    centerX + 300, //x1
    offsetY + 1600, //y1
    centerX + 600, //x2
    offsetY + 1750, //y2
    centerX + 1050, //x3
    offsetY + 1750, //y3
    centerX + 1300, //x4
    offsetY + 1600 //y4
  );

  let t = 0.5;
  let x1 = centerX + 300;
  let y1 = offsetY + 1600;

  let x2 = centerX + 600;
  let y2 = offsetY + 1750;

  let x3 = centerX + 1050;
  let y3 = offsetY + 1750;

  let x4 = centerX + 1300;
  let y4 = offsetY + 1600;

  for (let i = 0; i < spanishClothes.length; i++) {
    let t = 0.05 + i * 0.1;

    let bx = bezierPoint(x1, x2, x3, x4, t);
    let by = bezierPoint(y1, y2, y3, y4, t);

    let tx = bezierTangent(x1, x2, x3, x4, t);
    let ty = bezierTangent(y1, y2, y3, y4, t);
    let angle = atan2(ty, tx);

    let windOffset = sin(frameCount * 0.05 + i) * 0.3;
    if (i % 2 === 0) windOffset *= -1;

    push();
    translate(bx, by);
    rotate(angle + windOffset + PI / 2);
    strokeWeight(2);
    textSize(32);
    fill(spanishClothes[i].r, spanishClothes[i].g, spanishClothes[i].b);
    textAlign(TOP, TOP);
    text(spanishClothes[i].word, 0, 0);
    pop();
  }
}

function drawStreetScene(centerX, offsetY) {
  image(street, centerX, offsetY + 1750, collageWidth, 1000);
  image(guard, centerX + 500, offsetY + 2300, 100, 250);
  image(guard, centerX + 900, offsetY + 2300, 100, 250);
}

function drawMetroScene(centerX, offsetY) {
  image(concretewall, centerX, offsetY + 2650, collageWidth, 150);
  text("placeholder", centerX + 700, offsetY + 2725);
  image(metrostairs, centerX, offsetY + 2800, collageWidth, 1200);
  image(concretewall, centerX, offsetY + 3900, collageWidth, 150);
  text("placeholder", centerX + 800, offsetY + 3975);
  image(metrocar, centerX, offsetY + 4050, collageWidth, 1200);
}

// =========================
// INTERACTION
// =========================
function mouseWheel(event) {
  scrollY += event.delta;
  scrollY = constrain(scrollY, 0, collageHeight - height);
  return false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
