let f, p, q, x, y
function setup() {
  f = 0.5
  p = 100
  q = 100
  createCanvas(400, 400);
  background(220);
  rectMode(CENTER)
  a = 300
  b = 400
  translate(width / 2, height / 2)
  scale(1, -1)
  push()
  for (let i = 0; i < 10; i++) {
    strokeWeight(2 ^ i)
    rect(0, 0, a, b)
    scale(f, f)
    translate(p, q)
  }
  pop()
  noStroke()
  fill(255, 0, 0)
  // circle(p / (1 - f), q / (1 - f), 10)



  x = a * q / (b * (f - 1)) - p / (f - 1) - a / 2
  y = (2 * q + b * f - b) * (a * q / (b * (f - 1)) - p / (f - 1) - a) / (2 * p + a * f - a) + b / 2



  circle(x, y, 10)
}
