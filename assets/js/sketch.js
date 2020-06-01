// Coding Challenge 130.3: Drawing with Fourier Transform and Epicycles
// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/130.1-fourier-transform-drawing.html
// https://thecodingtrain.com/CodingChallenges/130.2-fourier-transform-drawing.html
// https://thecodingtrain.com/CodingChallenges/130.3-fourier-transform-drawing.html
// https://youtu.be/7_vKzcgpfvU

let x = [];
let fourierX;
let time = 0;
let path = [];

var boilerText = 0;

var examText = 0;

var w = 500;
var h = 150;

var font;
var cutIt = 7;
var doneWith = 0;
var itoavoid = [];
var reFouriered = 0;
var xoff1 = -84;
var yoff1 = 10;
var xoff2 = 39;
var yoff2 = 10;
var textsz = 40;

var textxoff = 30;
var textyoff = 58;

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
  textToFourier("Boilerexams")
}

function textToFourier(txt) {
  points = font.textToPoints(txt, -230, 0)

  for(i = 0; i < points.length; i++) {
    points[i].x /= 5;
    points[i].y /= 5;
    x.push(new Complex(points[i].x, points[i].y));
  }

  fourierX = dft(x);
  fourierX.sort((a, b) => b.amp - a.amp);
}

function epicycles(x, y, rotation, fourier) {
  for (let i = 0; i < fourier.length; i++) {
    let prevx = x;
    let prevy = y;
    let freq = fourier[i].freq;
    let radius = fourier[i].amp;
    let phase = fourier[i].phase;
    x += radius * cos(freq * time + phase + rotation);
    y += radius * sin(freq * time + phase + rotation);

    stroke(255, 100);
    noFill();
    if(i < fourier.length / 10) {
      ellipse(prevx, prevy, radius * 2);
      stroke(255, 150);
      line(prevx, prevy, x, y);
    }
  }
  return createVector(x, y);
}

function draw() {
  background(51, 51, 51);
  push();
  stroke(32, 32, 32)
  fill(32, 32, 32)
  rect(0, 88, w, h)
  pop();

  if(doneWith == 0) {
    itoavoid = []
    strokeWeight(1)
    let v = epicycles(320 / 2 + xoff1, 95 / 2 + yoff1, 0, fourierX);
    path.unshift(v);
    beginShape();
    noFill();
    strokeWeight(2);
    stroke(204, 187, 151);

    push();
    for (let i = 0; i < path.length; i++) {
      if(i > 0) {
        if(path[i].y - path[i - 1].y > cutIt || path[i].y - path[i - 1].y < -cutIt) {
          endShape(CLOSE);
          itoavoid.push(i)
          beginShape();
        }
        else if(path[i].x - path[i - 1].x > cutIt || path[i].x - path[i - 1].x < -cutIt) {
          endShape(CLOSE);
          itoavoid.push(i)
          beginShape(CLOSE);
        }
      }

      vertex(path[i].x, path[i].y);
    }
    endShape();
    pop();

    const dt = TWO_PI / fourierX.length;
    //ADJUST HERE
    time += dt * 2;

    if (time > TWO_PI) {
      time = 0;
      path = [];
      doneWith = 2
    }
  }

  if(doneWith == 1) {
    frameRate(60)
    itoavoid = []
    if(reFouriered == 0) {
      path = []
      x = []
      textToFourier("exams");
      reFouriered = 1
    }

    strokeWeight(1)
    let v = epicycles(320 / 2 + xoff2, 95 / 2 + yoff2, 0, fourierX);
    path.unshift(v);
    beginShape();
    noFill();
    strokeWeight(2);
    stroke(204, 187, 151);

    for (let i = 0; i < path.length; i++) {
      if(i > 0) {
        if(path[i].y - path[i - 1].y > cutIt || path[i].y - path[i - 1].y < -cutIt) {
          endShape(CLOSE);
          itoavoid.push(i)
          beginShape();
        }
        else if(path[i].x - path[i - 1].x > cutIt || path[i].x - path[i - 1].x < -cutIt) {
          endShape(CLOSE);
          itoavoid.push(i)
          beginShape();
        }
      }

      vertex(path[i].x, path[i].y);
    }
    endShape(CLOSE);

    const dt = TWO_PI / fourierX.length;
    time += dt;

    if (time > TWO_PI) {
      time = 0;
      path = [];
      doneWith = 2;
    }
  }

  if(doneWith == 2) {
    fourierX = [];
    path = [];

    frameRate(10)
    stroke(204, 187, 151);
    strokeWeight(2)

    fill(204, 187, 151);
    textSize(textsz)
    stroke(204, 187, 151);
    strokeWeight(0)
    text("Boilerexams", textxoff, textyoff)
  }
  // else if(doneWith == 1) {
  //   stroke(204, 187, 151);
  //   strokeWeight(2)

  //   fill(204, 187, 151);
  //   textSize(textsz)
  //   stroke(204, 187, 151);
  //   strokeWeight(0)
  //   text("Boiler", textxoff, textyoff)
  // }
}

function writeFinalData (data) {
  var toWriteListXml = config.exportPath + 'data.json',
  toWriteData = JSON.stringify(data);
  fs.writeFile(toWriteListXml, toWriteData, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  });
}
