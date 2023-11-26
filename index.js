function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  for (let i = 0; i < 100; i++) {
    PointerEvent(random(width), random(height));
  }
}
