
let values = [];
let i = 0;
let j = 0;
let k = 0;
let storedi = 0;
let time = 0;

// The statements in the setup() function
// execute once when the program begins
// The array is filled with random values in setup() function.

function preload() {
  font = loadFont('OpenSans-ExtraBold.ttf')
}

function setup() {
  var canvas = createCanvas(400, 88);
  canvas.position(0, 0);

  for(let i = 0;i<width / 6;i++){
    values.push(random(height + 10));
  }
}

// The statements in draw() function are executed until the
// program is stopped. Each statement is executed in
// sequence and after the last line is read, the first
// line is executed again.
function draw() {
  background(51, 51, 51);

  push();

  textFont(font)
  textSize(40);
  textColor = color(204, 187, 151);
  stroke(51, 51, 51);
  fill(textColor);
  text("Boilerexams", 30, 58)

  pop();

  bubbleSort();
  simulateSorting();
  // console.log(i, j, k)
  storedi = i;
}

// The bubbleSort() function sorts taking 8 elements of the array
// per frame. The algorithm behind this function is
// bubble sort.
function bubbleSort() {
  for(k = 0; k < 8; k++){
    if(i < values.length){
      let temp = values[j];
      if(values[j] > values[j+1]){
        values[j] = values[j+1];
        values[j+1] = temp;
      }
      j++;

      if(j>=values.length-i-1){
        j = 0;
        i++;
      }
    }
    else{
      noLoop();
    }
  }
}

// The simulateSorting() function helps in animating
// the whole bubble sort algorithm
// by drawing the rectangles using values
// in the array as the length of the rectangle.
function simulateSorting(){
  for(let i = 0;i<values.length;i++){
    if(i + 1> values.length - storedi - 3) {
      stroke(200)
      fill(200);
    }
    else {
      push();
      fill(32, 32, 32, 200)
      rect(i*6 , height, 6, -values[i]);
      pop();
    }
   }
   time++
}
