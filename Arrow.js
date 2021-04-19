function arrow(x1, y1, x2, y2) {
  push()
  fill(0)
  translate(x1, y1)
  line(0, 0, x2 - x1, y2 - y1)
  let dirOfArrow
  dirOfArrow = createVector(x2 - x1, y2 - y1)
  translate(x2 - x1, y2 - y1)
  rotate(dirOfArrow.heading())
  triangle(0, 0, -8, 4, -8, -4)
  pop()
}
