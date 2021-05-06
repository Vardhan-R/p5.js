let numOfSpots, tempP1, tempE1, tempP2, tempE2, tempDist, bestDist, mutationRate, choice, temp, gen, fr, organisms, gens
let spots = []
let tempArray = []
let population = []
let org = []
let allDists = []



function setup() {
  createCanvas(400, 400);
  numOfSpots = 10
  mutationRate = 0.06
  organisms = 10
  fr = 60
  gens = 1
  for (i = 0; i < numOfSpots; i++) {
    spots[i] = createVector(floor(random(width)), floor(random(height)))
  }

  for (let i = 0; i < numOfSpots; i++) {
    tempArray[i] = i
  }
  for (let i = 0; i < organisms; i++) {
    org = randomise(tempArray)
    population.push(org)
  }

  for (let j = 0; j < population.length; j++) {
    allDists.push(calcDist(population[j]))
  }

  gen = 1
  frameRate(fr)
}



function draw() {
  for (let n = 0; n < gens; n++) {
    background(0);
    bestDist = findBest(allDists)
    showPath()
    showSpots()
    allDists = []
    newGen()
    mutate()
    for (let j = 0; j < population.length; j++) {
      allDists.push(calcDist(population[j]))
    }
    fill(100, 100, 255)
    gen++
    text("Generation: " + gen, 1, 20)
  }
}



function newGen() {
  for (let i = 0; i < population.length; i++) {
    population[i] = population[bestDist]
  }
}



function mutate() {
  for (let i = 0; i < population.length; i++) {
    for (let j = 2; j < numOfSpots; j++) {
      choice = random()
      if (choice < mutationRate) {
        population[i] = randomise(population[i])
        temp = population[i][j - 1]
        population[i][j - 1] = population[i][j]
        population[i][j] = temp
      }
    }
  }
}



function findBest(a) {
  bestDist = 0
  for (let i = 1; i < a.length; i++) {
    if (a[i] < a[bestDist]) {
      bestDist = i
    }
  }
  console.log(" " + a[bestDist])
  return (bestDist)
}



function showSpots() {
  noStroke()
  fill(255, 0, 0)
  for (let i = 0; i < spots.length; i++) {
    circle(spots[i].x, spots[i].y, 10)
  }
}



function showPath() {
  strokeWeight(2)
  stroke(0, 255, 0)
  for (let i = 1; i < numOfSpots; i++) {
    line(spots[population[bestDist][i - 1]].x, spots[population[bestDist][i - 1]].y, spots[population[bestDist][i]].x, spots[population[bestDist][i]].y)
  }
  line(spots[population[bestDist][numOfSpots - 1]].x, spots[population[bestDist][numOfSpots - 1]].y, spots[population[bestDist][0]].x, spots[population[bestDist][0]].y)
}



function calcDist(a) {
  tempDist = 0
  tempDist += dist(spots[a[a.length - 1]].x, spots[a[a.length - 1]].y, spots[a[0]].x, spots[a[0]].y)
  for (let i = 1; i < numOfSpots; i++) {
    tempDist += dist(spots[a[i - 1]].x, spots[a[i - 1]].y, spots[a[i]].x, spots[a[i]].y)
  }
  return (tempDist)
}



function randomise(a) {
  let b = []
  for (let i = 0; i < a.length; i++) {
    b[i] = a[i]
  }
  for (let i = 0; i < 10 * b.length; i++) {
    tempP1 = floor(random(b.length - 1)) + 1
    tempE1 = b[tempP1]
    tempP2 = floor(random(b.length - 1)) + 1
    tempE2 = b[tempP2]
    b[tempP1] = tempE2
    b[tempP2] = tempE1
  }
  return (b)
}
