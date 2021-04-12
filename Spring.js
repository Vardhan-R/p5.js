let k, m, n, x, f, u, a, t, amp

function setup() {
  createCanvas(600, 500);
  k = 1
  m = 1
  n = width / 2
  // u = 0
  t = 0
  amp = 100
}

function draw() {
  x = n + amp * sin(t * sqrt(k / m))
  t += 0.1
  background(200);
  stroke(0)
  noFill()
  text("k = " + k, width / 2, height - 120)
  text("m = " + m, width / 2, height - 100)
  noStroke()
  fill(0, 150, 0)
  square(x - 20, height - 80, 40)
  strokeWeight(1)
  stroke(255, 0, 255)
  line(40, 0, 40, height - 40)
  line(40, height - 40, width, height - 40)
  line(40, height - 60, x, height - 60)
  // f = -k * (n - x)
  // a = f / m
  // temp = x
  // x = u * t + (1 / 2) * a * t ^ 2 + x
  // u = sqrt(u ** 2 - 2 * a * (n - temp))
  // t += 1
  // console.log(x, u)
}
