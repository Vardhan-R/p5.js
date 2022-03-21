let t;

function setup() {
  createCanvas(400, 400);
  t = 0;
}

function draw() {
  background(0, 10);
  stroke(255);
  circle(200 + 100 * cos(t), 200 + 100 * sin(t), 10);
  t += 0.1
}
