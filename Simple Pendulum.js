let l = 200
let g = 0.5
let angDisp, angVel, angAcc

function setup() {
  createCanvas(600, 500);
  translate(width / 2, 0)
  rotate(PI / 2)
  angDisp = PI / 3
  p = createVector(l * cos(angDisp), l * sin(angDisp))
  angVel = 0
  fill(160, 0, 0)
}

function draw() {
  translate(width / 2, 0)
  rotate(PI / 2)
  background(220);

  angAcc = -g * sin(angDisp) / l
  angVel += angAcc
  angDisp += angVel
  p.setHeading(angDisp)

  line(0, 0, p.x, p.y)
  circle(p.x, p.y, 50)
}
