let x, y, n1, n2, w11, w12, w13, w21, w22, w23, b1, b2, b3, o1, o2, o3

function setup() {
  createCanvas(400, 400);
  x = 1
  y = 2
  n1 = x
  n2 = y
  w11 = -100
  w12 = 30
  w13 = -37
  w21 = 95
  w22 = -38
  w23 = -86
  b1 = 64
  b2 = -17
  b3 = -21
  o1 = n1 * w11 + n2 * w21 + b1
  o2 = n1 * w12 + n2 * w22 + b2
  o3 = n1 * w13 + n2 * w23 + b3

  background(0, 0, 255)

  strokeWeight(5)
  textSize(20)
  textAlign(CENTER, CENTER)

  if (w11 < 0) {
    stroke(-2 * w11 + 50, 0, 0)
  } else if (w11 > 0) {
    stroke(0, 2 * w11 + 50, 0)
  } else {
    stroke(0)
  }
  line(width / 4, height / 4, 3 * width / 4, height / 5)

  if (w12 < 0) {
    stroke(-2 * w12 + 50, 0, 0)
  } else if (w12 > 0) {
    stroke(0, 2 * w12 + 50, 0)
  } else {
    stroke(0)
  }
  line(width / 4, height / 4, 3 * width / 4, height / 2)

  if (w13 < 0) {
    stroke(-2 * w13 + 50, 0, 0)
  } else if (w13 > 0) {
    stroke(0, 2 * w13 + 50, 0)
  } else {
    stroke(0)
  }
  line(width / 4, height / 4, 3 * width / 4, 4 * height / 5)

  if (w21 < 0) {
    stroke(-2 * w21 + 50, 0, 0)
  } else if (w21 > 0) {
    stroke(0, 2 * w21 + 50, 0)
  } else {
    stroke(0)
  }
  line(width / 4, 3 * height / 4, 3 * width / 4, height / 5)

  if (w22 < 0) {
    stroke(-2 * w22 + 50, 0, 0)
  } else if (w22 > 0) {
    stroke(0, 2 * w22 + 50, 0)
  } else {
    stroke(0)
  }
  line(width / 4, 3 * height / 4, 3 * width / 4, height / 2)

  if (w23 < 0) {
    stroke(-2 * w23 + 50, 0, 0)
  } else if (w23 > 0) {
    stroke(0, 2 * w23 + 50, 0)
  } else {
    stroke(0)
  }
  line(width / 4, 3 * height / 4, 3 * width / 4, 4 * height / 5)

  noStroke()
  fill(20 * x)
  circle(width / 4, height / 4, height / 8)
  fill(20 * y)
  circle(width / 4, 3 * height / 4, height / 8)

  if ((o1 > o2) && (o1 > o3)) {
    fill(0, 255, 0)
    text(x + ' < ' + y, 9 * width / 10, height / 5)
  } else {
    fill(255, 0, 0)
  }
  circle(3 * width / 4, height / 5, height / 8)
  if ((o2 > o1) && (o2 > o3)) {
    fill(0, 255, 0)
    text(x + ' > ' + y, 9 * width / 10, height / 2)
  } else {
    fill(255, 0, 0)
  }
  circle(3 * width / 4, height / 2, height / 8)
  if ((o3 > o1) && (o3 > o2)) {
    fill(0, 255, 0)
    text(x + ' = ' + y, 9 * width / 10, 4 * height / 5)
  } else {
    fill(255, 0, 0)
  }
  circle(3 * width / 4, 4 * height / 5, height / 8)

  if ((o1 == o2) || (o1 == o3) || (o2 == o3)) {
    fill(0, 255, 0)
    circle(3 * width / 4, 4 * height / 5, height / 8)
    text(x + ' = ' + y, 9 * width / 10, 4 * height / 5)
  }
  fill(200, 128, 128)
  circle(3 * width / 4, 3 * height / 10, height / 16)
  circle(3 * width / 4, 3 * height / 5, height / 16)
  circle(3 * width / 4, 9 * height / 10, height / 16)

  fill(0, 0, 255)
  text(x, width / 4, height / 4)
  text(y, width / 4, 3 * height / 4)
  text(o1, 3 * width / 4, height / 5)
  text(o2, 3 * width / 4, height / 2)
  text(o3, 3 * width / 4, 4 * height / 5)
  text(b1, 3 * width / 4, 3 * height / 10)
  text(b2, 3 * width / 4, 3 * height / 5)
  text(b3, 3 * width / 4, 9 * height / 10)
}

function draw() {

}
