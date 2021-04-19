function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(255);
  //rect(200, 175, 5, 100);
  //rectMode(CENTER);

  stroke(1);
  fill(236, 188, 180);
  ellipse(200, 100, 50);
  fill(0);
  ellipse(190, 95, 10);
  fill(0);
  ellipse(210, 95, 10);

  line(200, 125, 200, 225);
  line(200, 125, 150, 165);
  line(200, 125, 250, 165);
  line(200, 225, 165, 295);
  line(200, 225, 235, 295);

  fill(0);
  arc(200, 103, 35, 35, PI / 10, 9 * PI / 10, CHORD);
  fill(185, 0, 0);
  noStroke();
  arc(200, 121, 15, 20, PI + 0.15, -0.15);
}
