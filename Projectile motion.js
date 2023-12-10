let g, x, y, t, fr, v, uy, ux

function setup() {
  createCanvas(600, 500);
  fr = 30
  frameRate(fr)
  x = width / 2
  y = height / 2
  g = 10000
  t = 0.01
  uy = -2000
  ux = 10
  circle(x, y, 50)
}

function draw() {
  background(220);
  fill(50)

  v = uy + g * t
  y = uy * t + (1 / 2) * g * (t ** 2) + y
  x = x + ux
  circle(x, y, 50)
  uy = v
  if (x <= 50 || x >= (width - 50)) {
    ux = -ux
  }
  if (y <= 50 || y >= (height - 50)) {
    uy = -uy
  }
}
