function Raindrop() {

  this.pos = createVector(random(windowWidth), random(windowHeight));

  this.x = random(windowWidth);
  this.y = random(-300, 0);;



  // this.x = random(windowWidth);
  // this.y = random(windowHeight);
  this.col = color(138, 43, 226);

  // this.acceleration = createVector(0, 0.05);
  // this.acceleration = createVector(0,0);
  this.velocity = random(3,10)

  this.update = function () {
    this.y = this.y + this.velocity;
  }

  this.draw = function () {
    stroke(this.col);
    line(this.x, this.y, this.x, this.y + 5);
  }

  this.edges = function(){
    if(this.y > windowHeight){
      this.y = 0;
    }
  }
}