var slider1, slider2, slider3;
let bugs = [];

function setup() {
  createCanvas(700, 700);
  slider1 = createSlider(0, 255, 0);
  slider1.position(10, 10);

  slider2 = createSlider(0, 255, 0);
  slider2.position(10, 30);

  slider3 = createSlider(0, 255, 0);
  slider3.position(10, 50);
  fill('white');

  for (let i = 0; i < 50; i++) {
    bugs.push(new Jitter());
  }
}

function draw() {
  var r = slider1.value();
  var g = slider2.value();
  var b = slider3.value();
  background(r, g, b);
  fill(b, r, g, 200);
  text('R: ' + r, 150, 25);
  text('G: ' + g, 150, 45);
  text('B: ' + b, 150, 65);
  for (let i = 0; i < bugs.length; i++) {
    bugs[i].move();
    bugs[i].display();
  }
}

class Jitter {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(10, 250);
    this.speed = 0.1;
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  display() {
    noStroke();
    //filter(BLUR, 1);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}