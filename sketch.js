let balls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 200; i++) {
    let x = random(15, width - 15);
    let y = random(15, height - 15);
    let xs = random(-6, 6);
    let ys = random(-6, 6);
    balls[i] = new Ball(x, y, xs, ys);
  }
}
function draw() {
  background(0);
  for (let i = 0; i < balls.length; i++) {
    balls[i].move();
    balls[i].display();
    balls[i].bounce();
  }
}

class Ball {
  constructor(x, y, xs, xy) {
    this.x = x;
    this.y = y;
    this.xspeed = xs;
    this.yspeed = xy;
  }
  move() {
    this.x += this.xspeed;
    this.y += this.yspeed;
  }
  display() {
    strokeWeight(2);
    stroke(0);
    fill(200, 120, 150);
    circle(this.x, this.y, 30);
  }
  bounce() {
    if (this.x > width - 15 || this.x < 15) {
      this.xspeed *= -1;
    }

    if (this.y > height - 15 || this.y < 15) {
      this.yspeed *= -1;
    }
  }
}
