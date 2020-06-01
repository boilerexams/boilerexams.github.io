// Coding Challenge 130.3: Drawing with Fourier Transform and Epicycles
// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/130.1-fourier-transform-drawing.html
// https://thecodingtrain.com/CodingChallenges/130.2-fourier-transform-drawing.html
// https://thecodingtrain.com/CodingChallenges/130.3-fourier-transform-drawing.html
// https://youtu.be/7_vKzcgpfvU
let time = 0;

var boilerText = 0;

var examText = 0;

var w = 500;
var h = 150;

var font;
var length = 2;
var xoff1 = -84;
var yoff1 = 10;
var xoff2 = 39;
var yoff2 = 10;
var textsz = 40;

var textxoff = 30;
var textyoff = 58;
var wave = 0;
var decrease = 1.00;
var avoid = []
var slopeLim = 5

function preload() {
  font = loadFont('assets/js/font/OpenSans-ExtraBold.ttf')
}


function setup() {
  // console.log(font.textToPoints("Boiler", -230, 0))
  var canvas = createCanvas(w, h);
  canvas.position(0, 0)
  background(51, 51, 51);
  fill(255);

  textFont(font)
  textSize(200)

  textColor = color(204, 187, 151, 102)
}

function textToTangent(txt) {
  points = font.textToPoints(txt, 150, 295)

  for(i = 0; i < points.length; i++) {
    points[i].x /= 5;
    points[i].y /= 5;
    //point(points[i].x, points[i].y)

    if(i % 20) {
      drawTangent(points[i], points[i - 1], i)
    }
  }
}

function draw() {
  if(time < 3.2) {
    background(51, 51, 51)
  }
  stroke(255)

  push();
  stroke(32, 32, 32);
  fill(32, 32, 32)
  rect(0, 88, w, h)
  pop();

  length -= time / 10;
  if(length < -20 || decrease > 1) {
    length /= decrease
    decrease *= 1.001
  }
  if(decrease > 1.08) {
    decrease *= 1.01
  }

  time += 0.01
  textToTangent("Boilerexams")

  if(time > 3.2) {
    frameRate(10);
    fill(textColor)
    stroke(51, 51, 51)
    textSize(40)
    text("Boilerexams", 30, 58)
  }
}

function drawTangent(pt1, pt2, i) {
  rise = pt2.y - pt1.y;
  run = pt2.x- pt1.x;
  slope = rise / run;
  strokeWeight(.5)
  stroke(204, 187, 151)
  templength = (length + i / 40) / decrease

  if(decrease > 1 && Math.abs(templength) < 0.5 && !avoid.includes(i)) {
    avoid.push(i)
    // console.log("pushing " + time.toString() + i.toString() + " to avoid[] decrease: " + decrease.toString())
  }

  if(!(slope > slopeLim) && !(slope < -slopeLim) && !avoid.includes(i)) {
    line(pt1.x - templength, pt1.y - templength * slope, pt2.x + templength, pt2.y + templength * slope)
  }
}
