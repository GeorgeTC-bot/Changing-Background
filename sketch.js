
var r = 0;
var g = 50;
var b = 255;

var change = 0;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){

  createCanvas(1200,400);
  background("white");
  fill("white");
}


function draw(){
  background(r,g,b); 

  var x = map(mouseX, 0, width, 0, width);
  r = map(x,0,width,0,width);  
  g = map(x,50,width,0,width);
  b = map(x,255,width,0,width);

  ellipse(mouseX, mouseY, 25, 25);

  if(r > 255){
    r = 255;
  }
  if(g > 255){
    g = 255;
  }
  if(b > 255){
    b = 255;
  }

  console.log("r"+r);
  console.log("g"+g);
  console.log("b"+b);
}