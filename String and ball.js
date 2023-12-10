let g

function setup() {
  createCanvas(400, 400);
  p = createVector(200, 200)
  v = createVector(0, 0)
  g = 100
}

function draw() {
  frameRate(60)
  background(0);
  a = createVector(mouseX - p.x, mouseY - p.y + g)
  a.div(1000)
  v.add(a)
  p.add(v)
  stroke(100, 100, 255)
  line(p.x, p.y, mouseX, mouseY)
  fill(255, 0, 0)
  stroke(255)
  circle(p.x, p.y, 20)
  v.mult(0.99)
}
