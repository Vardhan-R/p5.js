let gravConst, k, damping
let allMasses = []
let allCharges = []
let allColours = []
let allPos = []
let allVel = []
let allAcc = []

let allUHS = []



function setup() {
  createCanvas(650, 500);

  gravConst = 1
  k = 1000
  damping = 0

  // createParticle(m, q, r, g, b, px, py, vx, vy)
  createParticle(1, 2, 255, 0, 0, 150, 250, 0, 0)
  allUHS.push(new UHS(1, 300, 255, 0, 255, 200, 200))

  stroke(255)
}

function draw() {
  translate(width / 2, height / 2)
  scale(1, -1)
  translate(-width / 2, -height / 2)
  background(0);
  update()
  show()
  damp()
  for (let a = 0; a < allUHS.length; a++) {
    allUHS[a].UHS_show()
  }
}



function createParticle(m, q, r, g, b, px, py, vx, vy) {
  allMasses.push(m)
  allCharges.push(q)
  allColours.push(createVector(r, g, b))
  allPos.push(createVector(px, py))
  allVel.push(createVector(vx, vy))
  allAcc.push(createVector(0, 0))
}



function update() {
  // vel and acc update for all the particles
  for (let i = 0; i < allMasses.length; i++) {
    tempAcc = createVector(0, 0)
    for (let j = 0; j < allMasses.length; j++) {
      if (allPos[i] != allPos[j]) {
        acc = k * allCharges[i] * allCharges[j] / ((dist(allPos[i].x, allPos[i].y, allPos[j].x, allPos[j].y)) ** 3) / allMasses[i]
        dir = createVector(allPos[i].x - allPos[j].x, allPos[i].y - allPos[j].y)
        dir.mult(acc)
        tempAcc.add(dir)
      }
    }
    allAcc[i] = tempAcc



    for (let j = 0; j < allUHS.length; j++) {
      if (dist(allPos[i].x, allPos[i].y, allUHS[j].px, allUHS[j].py) > allUHS.diameter / 2) {
        acc = k * allCharges[i] * allUHS[j].q / ((dist(allPos[i].x, allPos[i].y, allUHS[j].px, allUHS[j].py)) ** 3) / allMasses[i]
        dir = createVector(allPos[i].x - allUHS[j].px, allPos[i].y - allUHS[j].py)
        dir.mult(acc)
        tempAcc.add(dir)
      }
    }
    allVel[i].add(tempAcc)
  }

  // pos update for all particles
  for (let i = 0; i < allMasses.length; i++) {
    allPos[i].add(allVel[i])
  }
}



function show() {
  for (let i = 0; i < allMasses.length; i++) {
    fill(allColours[i].x, allColours[i].y, allColours[i].z)
    circle(allPos[i].x, allPos[i].y, 20)
  }
}



function damp() {
  for (let i = 0; i < allMasses.length; i++) {
    allVel[i].mult(1 - damping)
  }
}



class UHS {
  constructor(q, diameter, r, g, b, px, py) {
    this.q = q
    this.diameter = diameter
    this.r = r
    this.g = g
    this.b = b
    this.px = px
    this.py = py
  }
  
  UHS_show(r, b, g) {
    push()
    noFill()
    stroke(this.r, this.g, this.b)
    circle(200, 200, this.diameter)
    pop()
  }
}
