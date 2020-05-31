function preload() {
  //font = loadFont('Arial')
}

function setup() {
  var w = 250;
  var h = 90
  var canvas = createCanvas(w * 5, h * 5);
  canvas.position(0,0)
  console.log("Createdcanvas")
  textFont('Georgia')
}

function draw() {
  background(0)
  stroke(255);
  if(mouseIsPressed) {console.log(mouseX, mouseY)}
  line(0, 0, mouseX, mouseY)

  points = loadFont('Georgia').textToPoints("B", 100, 200)

  for(var i = 0; i < points.length; i++) {
    pt = points[i];
    stroke(0, 255, 0);
    strokeWeight(6);
    point(pt.x, pt.y)
  }
}