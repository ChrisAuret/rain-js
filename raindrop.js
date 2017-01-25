function Raindrop() {
  this.x = random(windowWidth);
  this.y = random(-300, -50);
  this.z = random(0, 20);
  this.col = color(138, 43, 226);
  
  this.len = map(this.z, 0, 20, 10, 20);
  this.velocity = map(this.z, 0, 20, 1, 20);

  this.update = function () {
    this.y = this.y + this.velocity;
    
    var gravity = map(this.z, 0, 20, 0, 0.2);
    this.velocity = this.velocity + gravity;    
  }

  this.draw = function () {
    var weight =  map(this.z, 0, 20, 1, 3);
    strokeWeight(weight);
    stroke(this.col);
    line(this.x, this.y, this.x, this.y + this.len);
  }

  this.edges = function(){
    if(this.y > windowHeight){
      this.y = random(-300, -50);
      this.velocity = map(this.z, 0, 20, 4, 10);
    }
  }
}