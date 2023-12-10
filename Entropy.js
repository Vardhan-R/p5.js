let particles = []
let n

function setup() {
  createCanvas(400, 400);
  n = 1000
  for (let i = 0; i < n; i++) {
    // particles.push(new Particle(random(0, width), random(0, height), 5))
    particles.push(new Particle(width / 2, height / 2, 5, i * 2 * PI / n))
  }
  noStroke()
  fill(255, 0, 0)
  frameRate(5)
  p = 1
}

function draw() {
  background(220);
  for (let i = 0; i < particles.length; i++) {
    if (p > 0) {
      particles[i].update()
    }
    particles[i].checkEdges()
    particles[i].show()
  }
}



class Particle {
  constructor(px, py, v, a) {
    // this.vx = random(-v, v)
    // this.vy = sqrt(v ** 2 - this.vx ** 2)
    // let c = random(-1, 1)
    // if (c < 0) {
    //   this.vy *= -1
    // }
    this.pos = createVector(px, py)
    // this.vel = createVector(this.vx, this.vy)
    this.vel = createVector(v, 0)
    this.vel.rotate(a)
    this.r = 4
  }

  update() {
    this.pos.add(this.vel)
  }

  checkEdges() {
    if (this.pos.x <= this.r || this.pos.x + this.r >= width) {
      this.vel.x *= -1
    }
    if (this.pos.y <= this.r || this.pos.y + this.r >= height) {
      this.vel.y *= -1
    }
  }

  show() {
    circle(this.pos.x, this.pos.y, this.r)
  }
}

function keyPressed() {
  if (keyCode === 32) {
    p *= -1
  }
}
