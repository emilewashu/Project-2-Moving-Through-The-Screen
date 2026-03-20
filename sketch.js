// =========================
// PICTURES
// =========================
let sky, sun, birds, plane;
let pool, barwindow, woman1, woman2;
let facade, cat;
let street, guard, cycler, scooter, performer, pigeon, crowd;
let group1, group2, metrogroup, ticketbooth;
let metrosign, metroimage1, ticketgate, homeless, confusedman, manonphone;
let concretewall, metrostairs, graffiti, walking, stairs;
let train, womanstanding;

// =========================
// SOUNDS
// =========================
let birdSound, planeSound, poolSound;

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
const collageHeight = 5125;

let shakeDuration = 0;
let shakeTimer = 0;

let spanishClothes;

let musicText = "♩♬♭♫♯≭";
let musicTrail = [];

let stairProgress = 0;

let homelessTrail = [];
let homelessText = "????????";
let homelessIndex = 0;
let homelessInterval = 80;

let gateTrail = [];
let gateWords = ["BEEP!", "VALIDADO!", "TAP!", "SUBE!", "PUERTA!", "CERRADA!"];

let shakeX = 0;
let shakeY = 0;

const apiKey = "08a2ae66eca7e7265b08e9f22438f81f";
const city = "Madrid";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
let weatherData = "weather data not loaded";

let textAlpha = 0;
let fadeSpeed = 5;
let skyExtra = 600;

// fetch(apiUrl)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok: " + response.statusText);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log("Weather data for Madrid:", data);
//     weatherData = `Current weather in ${data.name}: ${data.weather[0].main}, ${data.main.temp}°C`;
//   })
//   .catch((error) => {
//     console.error("There was a problem with the fetch operation:", error);
//   });

function preload() {
  // =========================
  // PICTURES
  // =========================
  myFont = loadFont("assets/photos/font.ttf");

  sky = loadImage("assets/photos/sky.png");
  sun = loadImage("assets/photos/cornersun.png");
  birds = loadImage("assets/photos/birds.gif");
  plane = loadImage("assets/photos/plane.png");

  pool = loadImage("assets/photos/pool.png");
  barwindow = loadImage("assets/photos/newwindow.png");
  woman1 = loadImage("assets/photos/woman1.png");
  woman2 = loadImage("assets/photos/woman2.png");

  facade = loadImage("assets/photos/newfacade.png");
  cat = loadImage("assets/photos/catsleeping.png");
  dog = loadImage("assets/photos/dog.png");

  street = loadImage("assets/photos/palace.png");
  guard = loadImage("assets/photos/guard.png");
  cycler = loadImage("assets/photos/cycler.png");
  crowd = loadImage("assets/photos/crowd.png");

  group1 = loadImage("assets/photos/group1.png");
  group2 = loadImage("assets/photos/group2.png");

  metroimage1 = loadImage("assets/photos/metrosign2.png");
  ticketgate = loadImage("assets/photos/ticketgate.png");
  metrogroup = loadImage("assets/photos/metrogroup.png");

  metrostairs = loadImage("assets/photos/metrostairs.png");
  metrosign = loadImage("assets/photos/metrosign.png");
  graffiti = loadImage("assets/photos/graffiti.png");
  homeless = loadImage("assets/photos/confusedman.png");
  walking = loadImage("assets/photos/walking.png");
  stairs = loadImage("assets/photos/stairs.png");

  performer = loadImage("assets/photos/performer.png");
  pigeon = loadImage("assets/photos/pigeon.gif");
  scooter = loadImage("assets/photos/scooter.webp");

  train = loadImage("assets/photos/train.png");
  ticketbooth = loadImage("assets/photos/ticketbooth.png");
  womanstanding = loadImage("assets/photos/womanstanding.png");

  // =========================
  // SOUNDS
  // =========================
  birdSound = loadSound("assets/sounds/birds.mp3");
  planeSound = loadSound("assets/sounds/plane.mp3");
  poolSound = loadSound("assets/sounds/pool.mp3");
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
  background(0);
  const centerX = (width - collageWidth) / 2;
  const offsetY = -scrollY;

  push();
  translate(shakeX, shakeY);
  drawSkyScene(centerX, offsetY);
  drawTransition(centerX, offsetY);
  drawStreetScene(centerX, offsetY);
  drawMetroEntranceScene(centerX, offsetY);
  drawMetroCarScene(centerX, offsetY);
  pop();

  let sceneStart = 0;
  let sceneEnd = 1000;

  // if (scrollY >= sceneStart && scrollY <= sceneEnd) {
  //   let vol = map(scrollY, sceneStart, sceneStart + 200, 0, 1);
  //   vol = constrain(vol, 0, 1);

  //   birdSound.setVolume(vol, 0.5);
  //   planeSound.setVolume(vol, 0.5);
  //   poolSound.setVolume(vol, 0.5);
  // } else {
  //   // leave scene
  //   let vol = map(scrollY, sceneEnd, sceneEnd + 200, 1, 0);
  //   vol = constrain(vol, 0, 1);
  //   birdSound.setVolume(vol, 0.5);
  //   planeSound.setVolume(vol, 0.5);
  //   poolSound.setVolume(vol, 0.5);
  // }
}

function drawSkyScene(centerX, offsetY) {
  // SKY
  image(sky, centerX, offsetY, collageWidth, 1800);

  // SUN
  let sunX = centerX + collageWidth - sunSize;
  image(sun, sunX, offsetY, sunSize, sunSize);

  let hovered =
    mouseX > sunX &&
    mouseX < sunX + sunSize &&
    mouseY > offsetY &&
    mouseY < offsetY + sunSize;

  if (hovered) {
    textAlpha += fadeSpeed;
  } else {
    textAlpha -= fadeSpeed;
  }
  textAlpha = constrain(textAlpha, 0, 255);

  if (textAlpha > 0) {
    textAlign(CENTER, CENTER);
    textFont(myFont);
    textSize(60);
    textStyle(BOLD);
    noStroke();

    fill(0, 76, 155, textAlpha);
    text(weatherData, centerX + 775, offsetY + 650);
  }
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
  image(birds, xBirds, offsetY + 800, 400, 400);

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

  image(pool, centerX, offsetY + 1050, collageWidth, 750);
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
      y: 1350 + moveY,
      vx: 2.5,
      vy: -2.5,
      life: 255,
      letter: word,
    });

    womenIndex = (womenIndex + 1) % womenText.length;
  }

  image(woman1, centerX + 600, offsetY + 1350 + moveY, 140, 200);
  image(woman2, centerX + 800, offsetY + 1350 + moveY, 140, 200);

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

  image(barwindow, centerX - 10, offsetY + 1550, collageWidth + 20, 250);
}

function drawTransition(centerX, offsetY) {
  image(facade, centerX, offsetY + 1800, collageWidth, 1000);

  if (frameCount % catInterval === 0) {
    let word = catText.charAt(catIndex);

    catTrail.push({
      x: centerX + 300,
      y: 1960,
      vx: 0.5,
      vy: -2.5,
      life: 255,
      letter: word,
    });

    dogTrail.push({
      x: centerX + 1240,
      y: 1930,
      vx: 0.5,
      vy: -2.5,
      life: 255,
      letter: word,
    });

    catIndex = (catIndex + 1) % catText.length;
  }

  image(dog, centerX + 1220, offsetY + 1940, 150, 120);
  image(cat, centerX + 260, offsetY + 1980, 100, 50);

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
    offsetY + 2200, //y1
    centerX + 600, //x2
    offsetY + 2350, //y2
    centerX + 1050, //x3
    offsetY + 2350, //y3
    centerX + 1300, //x4
    offsetY + 2200 //y4
  );

  let t = 0.5;
  let x1 = centerX + 300;
  let y1 = offsetY + 2200;

  let x2 = centerX + 600;
  let y2 = offsetY + 2350;

  let x3 = centerX + 1050;
  let y3 = offsetY + 2350;

  let x4 = centerX + 1300;
  let y4 = offsetY + 2200;

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
  image(street, centerX, offsetY + 1750 + 600, collageWidth, 1000);
  // --- GUARDS ---
  tint(0, 100);
  image(guard, centerX + 510, offsetY + 2300 + 600, 100, 250);
  noTint();
  image(guard, centerX + 500, offsetY + 2300 + 600, 100, 250);

  tint(0, 100);
  image(guard, centerX + 910, offsetY + 2300 + 600, 100, 250);
  noTint();
  image(guard, centerX + 900, offsetY + 2300 + 600, 100, 250);

  // --- PIGEONS ---
  let moveY = sin(frameCount * 0.1) * 3;
  let moveY2 = sin(frameCount * 0.07) * 3;

  image(pigeon, centerX + 1250, offsetY + 2490 + moveY2 + 600, 60, 60);
  image(pigeon, centerX + 1300, offsetY + 2500 + moveY2 + 600, 60, 60);
  image(pigeon, centerX + 1270, offsetY + 2480 + moveY + 600, 60, 60);
  image(pigeon, centerX + 1350, offsetY + 2480 + moveY + 600, 60, 60);

  // --- CROWD ---
  image(performer, centerX + 110, offsetY + 2310 + 600, 290, 250);
  let moveX = sin(frameCount * 0.05) * 3;
  image(crowd, centerX + 230 + moveX, offsetY + 2310 + 600, 270, 270);
  image(group1, centerX + 1000, offsetY + 2320 + 600, 280, 280);

  tint(0, 100);
  image(group2, centerX + 570, offsetY + 2550 + 600, 250, 50);
  noTint();
  image(group2, centerX + 600, offsetY + 2350 + 600, 250, 250);

  // --- MUSIC TRAIL ---
  let performerX = centerX + 180;
  let performerY = 2310 + 600;
  if (frameCount % 12 === 0) {
    let note = musicText.charAt(floor(random(musicText.length)));

    musicTrail.push({
      x: performerX + 40,
      y: performerY + 40,
      vx: random(-0.5, 0.5),
      vy: random(-1.5, -2.5),
      life: 255,
      size: random(28, 42),
      letter: note,
    });
  }

  for (let i = musicTrail.length - 1; i >= 0; i--) {
    let m = musicTrail[i];

    m.x += m.vx;
    m.y += m.vy;
    m.life -= 3;

    push();
    translate(m.x, m.y + offsetY);
    textAlign(CENTER, CENTER);
    textFont("Georgia");
    textSize(m.size);
    fill(255, 0, 0, m.life);
    text(m.letter, 0, 0);
    pop();

    if (m.life <= 0) {
      musicTrail.splice(i, 1);
    }
  }

  // --- CYCLER MOVEMENT ---
  const elapsed = (millis() - startTime) % 16000;
  const progress = elapsed / 15000;
  const xCycler = lerp(centerX + collageWidth, centerX - 250, progress);
  const xScooter = lerp(centerX - 250, centerX + collageWidth, progress);
  scooter.loadPixels();
  for (let i = 0; i < scooter.pixels.length; i += 4) {
    let r = scooter.pixels[i];
    let g = scooter.pixels[i + 1];
    let b = scooter.pixels[i + 2];
    if (r > 180 && g > 180 && b > 180) {
      scooter.pixels[i + 3] = 0;
    }
  }
  scooter.updatePixels();

  tint(0, 150);
  image(scooter, xScooter - 20, offsetY + 2600 + 600, 300, 50);
  noTint();
  image(scooter, xScooter, offsetY + 2370 + 600, 300, 300);

  tint(0, 150);
  image(cycler, xCycler + 20, offsetY + 2650 + 600, 250, 50);
  noTint();
  image(cycler, xCycler, offsetY + 2450 + 600, 250, 250);
}

function drawMetroEntranceScene(centerX, offsetY) {
  image(metrosign, centerX + 470, offsetY + 2080 + 600, 550, 700);
  image(metrostairs, centerX, offsetY + 2520 + 600, collageWidth, 1220);
  image(stairs, centerX, offsetY + 3720 + 600, collageWidth, 800);

  /// --- METRO SIGN ---
  push();
  translate(centerX + 1250, offsetY + 2930 + 600);
  imageMode(CENTER);
  rotate(PI / 15);
  image(metroimage1, 0, 0, 450, 1100);
  imageMode(CORNER);
  pop();

  // --- HOMELESS MOVEMENT ---
  let homelessX = centerX + 880;
  let homelessY = 2825 + 600;

  if (frameCount % homelessInterval === 0) {
    let letter = homelessText.charAt(homelessIndex);

    homelessTrail.push({
      x: homelessX + 150,
      y: homelessY + 40,
      vx: random(-0.2, 0.2),
      vy: -1.5,
      life: 255,
      size: random(30, 45),
      letter: letter,
    });

    homelessIndex = (homelessIndex + 1) % homelessText.length;
  }
  for (let i = homelessTrail.length - 1; i >= 0; i--) {
    let z = homelessTrail[i];

    z.x += z.vx;
    z.y += z.vy;
    z.life -= 2;

    push();
    translate(z.x, z.y + offsetY);
    textAlign(CENTER, CENTER);
    textSize(z.size);
    fill(255, 255, 0, z.life);
    text(z.letter, 0, 0);
    pop();

    if (z.life <= 0) {
      homelessTrail.splice(i, 1);
    }
  }
  image(homeless, centerX + 850, offsetY + 2900 + 600, 350, 500);

  let glow = 60 + sin(frameCount * 0.04) * 30;
  image(womanstanding, centerX + 350, offsetY + 3650, 300, 450);
  push();
  noStroke();
  fill(100, 200, 255, glow);
  triangle(
    centerX + 510,
    offsetY + 3720,
    centerX + 510,
    offsetY + 3680,
    centerX + 460,
    offsetY + 3750
  );
  pop();

  // --- WALKING MOVEMENT ---
  if (scrollY > 2000) {
    stairProgress += 0.001;
    stairProgress = constrain(stairProgress, 0, 1);
  }

  let startX = centerX + 600;
  let startY = offsetY + 2850 + 600;
  let endY = offsetY + 2450 + 600;
  let stepBounce = sin(frameCount * 0.25) * 6;

  let y = lerp(startY, endY, stairProgress) + stepBounce;
  let scaleSize = lerp(1, 0.6, stairProgress);

  push();
  translate(startX, y);
  scale(scaleSize);
  image(walking, 0, 0, 350, 400);
  pop();

  // --- METRO GATES ---
  push();
  translate(centerX + 150, offsetY + 3900); // move origin to where you want the image
  rotate(-PI / 6);
  imageMode(CENTER);
  image(ticketbooth, 0, 0, 500, 700);
  imageMode(CORNER);
  pop();
  image(ticketgate, centerX - 50, offsetY + 3280 + 600, 650, 600);
  image(ticketgate, centerX + 280, offsetY + 3280 + 600, 650, 600);
  image(ticketgate, centerX + 610, offsetY + 3280 + 600, 650, 600);
  image(ticketgate, centerX + 940, offsetY + 3280 + 600, 650, 600);

  let gatePositions = [
    centerX + 250,
    centerX + 600,
    centerX + 950,
    centerX + 1300,
  ];

  if (frameCount % 50 === 0) {
    let gateX = random(gatePositions);

    gateTrail.push({
      x: gateX,
      y: 3320 + 600,
      vx: random(-2, 2),
      vy: random(-3, -1),
      life: 255,
      word: random(gateWords),
    });
  }

  for (let i = gateTrail.length - 1; i >= 0; i--) {
    let t = gateTrail[i];

    t.x += t.vx;
    t.y += t.vy;
    t.life -= 3;

    push();
    textAlign(CENTER, CENTER);
    textSize(36);
    fill(0, 255, 100, t.life);
    text(t.word, t.x, t.y + offsetY);
    pop();

    if (t.life <= 0) {
      gateTrail.splice(i, 1);
    }
  }
}
function drawMetroCarScene(centerX, offsetY) {
  //--- TRAIN MOVEMENT ---
  const duration = 7000;
  const elapsed = (millis() - startTime) % duration;
  const progress = elapsed / duration;
  const xTrain = lerp(25000, -20050, progress);

  // --- TRAIN HEADLIGHTS ---
  let headlightX = xTrain;
  let headlightY = offsetY + 3950 + 600;

  noStroke();

  for (let i = 0; i < 200; i++) {
    let alpha = map(i, 0, 200, 120, 0);
    fill(255, 255, 200, alpha);

    ellipse(headlightX - i * 3, headlightY, 200 + i * 4, 120 + i * 2);
  }

  let metroX = centerX + 150 + 600;
  let metroY = offsetY + 3400 + 325 + 600;

  let d = dist(metroX, metroY, headlightX, headlightY);

  // map brightness based on distance
  let brightness = map(d, 0, 1200, 255, 100);
  brightness = constrain(brightness, 100, 255);

  push();
  tint(brightness, brightness, brightness);
  image(metrogroup, centerX + 150, offsetY + 3400 + 600, 1200, 650);
  pop();

  // --- SHAKE LOGIC ---
  let isOnScreen = xTrain < 6000 && xTrain > -8000;

  if (isOnScreen && scrollY > 3000) {
    shakeX = random(-5, 5);
    shakeY = random(-3, 3);
  }

  image(train, xTrain, offsetY + 3720 + 600, 6000, 800);
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

function mousePressed() {
  userStartAudio();

  // if (!birdSound.isPlaying()) {
  //   birdSound.loop();
  //   planeSound.loop();
  //   poolSound.loop();

  //   birdSound.setVolume(0);
  //   planeSound.setVolume(0);
  //   poolSound.setVolume(0);
  // }
}
