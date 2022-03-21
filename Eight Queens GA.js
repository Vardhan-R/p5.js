let allPos = [];
let queens = [];
let options = [];
let allPts = [];
let orgsPerGen, tempPts, best, mutationRate, choice, gen;

function setup() {
  orgsPerGen = 10;
  mutationRate = 1;
  createCanvas(400, 400);
  for (let i = 0; i < orgsPerGen; i++) {
    queens = [];
    for (let j = 0; j < 8; j++) {
      temp = createVector(floor(random(8)), floor(random(8)));
      while (temp in queens) {
        temp = createVector(floor(random(8)), floor(random(8)));
      }
      queens.push(temp);
    }
    allPos.push(queens);
  }
  gen = 1;
  noStroke();
}

function draw() {
  background(0);
  for (let i = 0; i < allPos.length; i++) {
    allPts.push(calcPts(allPos[i]));
  }
  calcBest(allPts);
  console.log(allPts);
  show(allPos[best]);
  if (allPts[best] == 0) {
    noLoop();
  }
  newGen();
  for (let i = 0; i < allPos.length; i++) {
    for (let j = 0; j < 8; j++) {
      allPos[i][j] = mutate(i, j);
    }
  }

  allPts = [];
  gen++;
}

function calcPts(a) {
  tempPts = 0;
  for (let m = 0; m < a.length - 1; m++) {
    for (let n = m + 1; n < a.length; n++) {
      if (a[m].x == a[n].x || a[m].y == a[n].y || abs(a[m].x - a[n].x) == abs(a[m].y - a[n].y)) {
        tempPts++;
      }
    }
  }
  return tempPts;
}

function calcBest(a) {
  best = 0;
  for (let m = 1; m < a.length; m++) {
    if (a[m] < a[best]) {
      best = m;
    }
  }
}

function show(a) {
  fill(200);
  for (let m = 0; m < 8; m++) {
    for (let n = 0; n < 8; n += 2) {
      if (m % 2 == 0) {
        rect((m * width) / 8, (n * height) / 8, width / 8, height / 8);
      } else {
        rect((m * width) / 8, ((n + 1) * height) / 8, width / 8, height / 8);
      }
    }
  }

  fill(255, 0, 0);
  for (let m = 0; m < a.length; m++) {
    ellipse(
      (width * (a[m].x + 1 / 2)) / 8,
      (height * (a[m].y + 1 / 2)) / 8,
      width / 10,
      height / 10
    );
  }

  fill(0, 0, 255);
  text("Generation: " + gen, 1, 20);
}

function newGen() {
  for (let m = 0; m < allPos.length; m++) {
    allPos[m] = allPos[best];
  }
}

function mutate(m, n) {
  choice = random();
  temp = createVector(allPos[m][n].x, allPos[m][n].y);
  if (choice < mutationRate) {
    temp = createVector(floor(random(8)), floor(random(8)));
    // console.log(temp, allPos[m][n])
  }
  return temp;
}
