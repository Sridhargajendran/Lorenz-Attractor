let a = 10;
let b = 28;
let c = 8.0 / 3.0;
let x = 0.1;
let y = 0;
let z = 0;
let dt = 0.01;
let xval = [];
let yval = [];

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  let dx = a * (y - x) * dt;
  x = x + dx;
  let dy = (x * (b - z) - y) * dt;
  y = y + dy;
  let dz = (x * y - c * z) * dt;
  z = z + dz;
  xval.push(x);
  yval.push(y);
  //print(xval, yval);

  beginShape();
  translate(width / 2, height / 2);
  noFill();
  stroke(255);
  strokeWeight(1);
  scale(5);
  for (let i = 0; i < xval.length; i++) {
    vertex(xval[i], yval[i]);
  }
  endShape();
}
