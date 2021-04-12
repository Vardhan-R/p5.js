let x, n, w1, w2, w3, b1, b2, b3, o1, o2, o3

function setup() {
  createCanvas(400, 400);
  x = 1
  n = x
  w1 = -63
  w2 = 0
  w3 = 57
  b1 = 8
  b2 = 67
  b3 = 54
  o1 = n * w1 + b1
  o2 = n * w2 + b2
  o3 = n * w3 + b3

  background(0, 0, 255)

  strokeWeight(5)
  textSize(20)
  textAlign(CENTER, CENTER)

  if (w1 < 0) {
    stroke(-2 * w1 + 50, 0, 0)
  } else if (w1 > 0) {
    stroke(0, 2 * w1 + 50, 0)
  } else {
    stroke(0)
  }
  line(width / 4, height / 2, 3 * width / 4, height / 5)

  if (w2 < 0) {
    stroke(-2 * w2 + 50, 0, 0)
  } else if (w2 > 0) {
    stroke(0, 2 * w2 + 50, 0)
  } else {
    stroke(0)
  }
  line(width / 4, height / 2, 3 * width / 4, height / 2)

  if (w3 < 0) {
    stroke(-2 * w3 + 50, 0, 0)
  } else if (w3 > 0) {
    stroke(0, 2 * w3 + 50, 0)
  } else {
    stroke(0)
  }
  line(width / 4, height / 2, 3 * width / 4, 4 * height / 5)

  noStroke()
  fill(12 * (x + 10))
  circle(width / 4, height / 2, height / 8)

  if ((o1 > o2) && (o1 > o3)) {
    fill(0, 255, 0)
    text(x + ' < 0', 9 * width / 10, height / 5)
  } else {
    fill(255, 0, 0)
  }
  circle(3 * width / 4, height / 5, height / 8)
  if ((o2 > o1) && (o2 > o3)) {
    fill(0, 255, 0)
    text(x + ' = 0', 9 * width / 10, height / 2)
  } else {
    fill(255, 0, 0)
  }
  circle(3 * width / 4, height / 2, height / 8)
  if ((o3 > o1) && (o3 > o2)) {
    fill(0, 255, 0)
    text(x + ' > 0', 9 * width / 10, 4 * height / 5)
  } else {
    fill(255, 0, 0)
  }
  circle(3 * width / 4, 4 * height / 5, height / 8)

  if ((o1 == o2) || (o1 == o3) || (o2 == o3)) {
    fill(0, 255, 0)
    circle(3 * width / 4, height / 2, height / 8)
    text(x + ' = 0', 9 * width / 10, height / 2)
  }
  fill(200, 128, 128)
  circle(3 * width / 4, 3 * height / 10, height / 16)
  circle(3 * width / 4, 3 * height / 5, height / 16)
  circle(3 * width / 4, 9 * height / 10, height / 16)

  fill(0, 0, 255)
  text(x, width / 4, height / 2)
  text(o1, 3 * width / 4, height / 5)
  text(o2, 3 * width / 4, height / 2)
  text(o3, 3 * width / 4, 4 * height / 5)
  text(b1, 3 * width / 4, 3 * height / 10)
  text(b2, 3 * width / 4, 3 * height / 5)
  text(b3, 3 * width / 4, 9 * height / 10)
}

function draw() {

}
