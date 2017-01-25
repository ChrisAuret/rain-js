var raindrops = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (var i = 0; i < 500; i++) {
    raindrops.push(new Raindrop())
  }
}

function draw() {
  background(230, 230, 250);

  for (var i = 0; i < raindrops.length; i++) {
    raindrops[i].update();
    raindrops[i].draw();
    raindrops[i].edges();
  }
}