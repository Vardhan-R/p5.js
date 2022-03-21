let total_food
let orgs = []

function setup() {
  createCanvas(400, 400);
  // frameRate(1)
  noStroke()
  for (let i = 0; i < 50; i++) {
    orgs.push(new Org(false))
  }
  for (let i = 0; i < 50; i++) {
    orgs.push(new Org(true))
  }
}

function draw() {
  background(0);
  orgs = shuffle(orgs)
  total_food = 100
  for (let i = 0; i < orgs.length; i++) {
    if (total_food) {
      a = floor(random(1, 6))
      total_food = max(0, total_food - a)
      orgs[i].eat(i, a)
    }
    else {
      orgs[i].eat(i, 0)
    }
  }

  for (let i = 0; i < orgs.length; i++) {
    orgs[i].show()
  }
}

class Org {
  constructor(type) {
    this.share = type
    this.food = 0
  }

  eat(m, amt) {
    this.food = amt
    if (this.food > 1) {
      orgs.push(new Org(this.type))
      this.food--
      while (this.share && this.food > 1) {
        orgs.push(new Org(true))
        this.food--
      }
    } else if (this.food == 0) {
      orgs.pop(m)
    }
  }

  show() {
    if (this.share) {
      fill(0, 255, 0)
    } else {
      fill(255, 0, 0)
    }
    circle(random(width), random(height), 4)
  }
}
