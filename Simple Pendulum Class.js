let g = 0.5

function setup() {
  createCanvas(600, 500);
  p1 = new Pendulum(400, PI / 6)
  p2 = new Pendulum(400, PI / 4)
}

function draw() {
  translate(width / 2, 0)
  rotate(PI / 2)
  background(220);

  p1.update()
  p2.update()

  p1.show()
  p2.show()
}

class Pendulum {
  constructor(l, d) {
    this.l = l
    this.d = d
    this.v = 0
    this.p = createVector(this.l * cos(this.d), this.l * sin(this.d))
    
  }

  update() {
    this.a = -g * sin(this.d) / this.l
    this.v += this.a
    this.d += this.v
    this.p.setHeading(this.d)
  }

  show() {
    fill(160, 0, 0)
    circle(this.p.x, this.p.y, 50)
    line(0, 0, this.p.x, this.p.y)
    circle(this.p.x, this.p.y, 50)
  }
}
