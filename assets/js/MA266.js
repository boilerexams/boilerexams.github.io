
var exams265 = [
  { semester: "2019 Fall",
    exam: "Final", 
    link: "https://www.youtube.com/embed/iu5R6jrVJ8M?start=", 
    timestamps: [46,200,538,751,846,1306,1477,1673,2006,2293, 2441, 2856, 3076, 3180, 3435, 3498, 3731, 3894, 4130, 4366, 4718, 4848, 5110, 5196, 5509],
    description: ["Properties of determinants","Rank and nullity","Matrix multiplication","Orthogonal sets","Linear transformations",
    "Linear independence","Compute the determinant","Basis of a space","Polynomial vector spaces","Matrix facts",
    "Linear independence","Compute the determinant","Rank and nullity","Matrix subspaces","Dynamical systems",
    "Linear transformations","Orthogonal complement","System of differential equations","Inner product spaces","Matrix facts",
    "Matrix multiplication","Gram-Schmidt process","Least squares","Diagonalization","Orthogonal diagonalization"]
  },
  { semester: "2019 Spring",
    exam: "Final",
    link: "https://www.youtube.com/embed/Se8tLJHiHz8?start=",
    timestamps: [19,228,322,787,898,1096,1263,1450,1619,1820,1958,2053,2285,2738,2962,3070,3238,3484,3621,3926,4063,4403,4571,4970],
    description: ["Systems of equations","Linear independence","Matrix facts","Linear transformations","Linear transformations",
    "Find the inverse","Matrix multiplication","Rank and nullity","Basis of a space","Properties of determinants",
    "Compute the determinant","Diagonalizability","Matrix facts","Find an eigenbasis","Diagonalization",
    "Dynamical systems","System of differential equations","Subspaces of R^n","Basis for a space","Gram-Schmidt process",
    "Least squares","Orthogonal projection","Matrix facts","Inner product spaces","Orthogonal diagonalization"]
  },
  {
    semester: "2018 Fall",
    exam: "Final",
    link: "https://www.youtube.com/embed/HumaprXFL5g?start=",
    timestamps: [6,105,298,377,533,598,760,911,1049,1231,1455,1586,1668,1790,1952,2164,2266,2356,2518,2603,2756,2892,3062,3461,3615],
    description: ["Systems of equations","Linear transformations","Properties of eigenvectors","Linear independence","Matrix multiplication",
    "Basis of a space","Compute the determinant","Properties of determinants","Find the inverse","Subspaces of R^n",
    "Rank and nullity","Linear independence","Compute the eigenvalues","Linear transformations","Diagonalization",
    "Diagonalizability","Dynamical systems","System of differential equations","Properties of eigenvectors","Orthogonal projection",
    "Matrix facts","Least squares","Inner product spaces","Symmetric matrices","Gram-Schmidt process"]
  },
  {
    semester: "2018 Spring",
    exam: "Final",
    link: "https://www.youtube.com/embed/1qA9exO23-k?start=",
    timestamps: [30,138,328,558,672,768,884,1003,1085,1232,1481,1617,1716,1847,2173,2262,2444,2582,2781,2863],
    description: ["Properties of determinants","Matrix facts","Symmetric matrices","Find the inverse","Orthogonal complement",
    "Basis of a space","Compute the determinant","Cramer's rule","Polynomial vector spaces","Matrix subspaces",
    "Polynomial vector spaces","Basis of a space","Rank and nullity","Gram-Schmidt process","Least squares",
    "Properties of transformations","Matrix facts","Diagonalization","Systems of equations","System of differential equations"]
  },
  {
    semester: "2017 Fall",
    exam: "Final",
    link: "https://www.youtube.com/embed/_p0tXMdMTa8?start=",
    timestamps: [11, 219, 344, 558, 742, 815, 926, 1027, 1130, 1310, 1442, 1617, 1868, 2085, 2146, 2362, 2463, 2961, 3077, 3238, 3381, 3544, 3762, 3979, 4067],
    description: ["Matrix facts","Systems of equations","Matrix facts","Find the inverse","Compute the determinant",
    "Cramer's rule","Find the inverse","Subspaces of R^n","Polynomial vector spaces","Linear independence",
    "Basis of a space","Rank and nullity","Matrix facts","Compute the eigenvalues","Rank and nullity",
    "Orthogonal vectors","Gram-Schmidt process","Orthogonal complement","Least squares","Linear transformations",
    "Properties of eigenvectors","Diagonalizability","System of differential equations"]
  },
  {
    semester: "2017 Spring",
    exam: "Final",
    link: "https://www.youtube.com/embed/jqS_85tiHyE?start=",
    timestamps: [8, 245, 396, 653, 842, 958, 1161, 1344, 1438, 1652, 1740, 1826, 1907, 1957, 2072, 2163, 2266, 2326, 2412, 2684, 2886, 3255, 3347, 3508, 3645],
    description: ["Systems of equations","Systems of equations","Matrix facts","Rank and nullity","Systems of equations",
    "Properties of determinants","Compute the determinant","Find the inverse","Polynomial vector spaces","Subspaces of R^n",
    "Basis of a space","Rank and nullity","Orthogonal complement","Distance from point to plane","Least squares",
    "Subspaces of R^n","Orthogonal complement","Compute a cofactor","Polynomial vector spaces","Rank and nullity",
    "Diagonalization","Compute the eigenvalues","Diagonalizability","Symmetric matrices","System of differential equations"]
  }
  ];

var descriptions265 = [
  "Systems of equations", "Matrix facts", "Rank and nullity", "Properties of determinants", "Compute the determinant", "Find the inverse", 
  "Polynomial vector spaces", "Subspaces of R^n", "Basis of a space", "Orthogonal complement", "Distance from point to plane", "Least squares", 
  "Compute a cofactor", "Diagonalization", "Compute the eigenvalues", "Diagonalizability", "Symmetric matrices", "System of differential equations", 
  "Cramer's rule", "Linear independence", "Orthogonal vectors", "Gram-Schmidt process", "Linear transformations", "Properties of eigenvectors", 
  "Matrix subspaces", "Dynamical systems", "Orthogonal projection", "Inner product spaces", "Matrix multiplication", "Orthogonal diagonalization"
]

var exams266 = [
{ 
  semester: "2019 Fall", 
  exam: "Final",
  link: "https://www.youtube.com/embed/t9hdIc6yBe4?start=", 
  timestamps: [54,233,388,472,578,785,985,1080,1244,1533,1696,1941,2108,2255,2574,2883,3540,4069,4297,4613],
  description: ["Autonomous equation stability", "Autonomous equation stability", "Separation of variables", "Freefall differential equations", 
  "Exact equations", "Exact equations", "Euler's method", "Characteristic equation", "Spring-mass systems", "Undetermined coefficients", "Variation of parameters", 
  "Phase plane identification", "Matrix exponential", "Homogeneous system of differential equations", "Nonhomogeneous system of differential equations", 
  "Laplace of a system of equations", "Piecewise Laplace transform",	"Laplace transform", "Laplace initial value problem", "Laplace initial value problem"]
},
{ 
  semester: "2019 Spring",
  exam: "Final",
  link: "https://www.youtube.com/embed/fqET297U3Bc?start=",
  timestamps: [24, 95, 175, 307, 426, 601, 690, 874, 1031, 1228, 1428, 1583, 1699, 1792, 2180, 2396, 2514, 2616, 2784, 2870],
  description: ["Existence and Uniqueness theorem",	"Integrating factor",	"Separation of variables",	"Exact equations",	"Characteristic equation",
    "Reduction of order",	"Variation of parameters",	"Homogeneous differential equation",	"Undetermined coefficients",	"Laplace transform",
    "Laplace initial value problem",	"Laplace transform",	"Unit step functions",	"Laplace initial value problem",	"Inverse Laplace transform", 
    "Phase plane identification", "Homogeneous system of differential equations",	"Nonhomogeneous system of differential equations",	"Homogeneous system of differential equations","Complex eigenvalues"]
},
{
  semester: "2018 Fall",
  exam: "Final",
  link: "https://www.youtube.com/embed/BRAxIssBBBM?start=",
  timestamps: [9, 155, 250, 522, 681, 780, 887, 1049, 1283, 1530, 1630, 1687, 1796, 1935, 2179, 2387, 2588, 2830, 2991, 3096],
  description: ["Separation of variables","Salt tank applications","Exact equations","Homogeneous differential equation","Euler's method",
  "Integrating factor","Autonomous equation stability","Characteristic equation","Variation of parameters","Spring-mass systems",
  "Characteristic equation","Undetermined coefficients","Reduction of order","Inverse Laplace transform","Laplace initial value problem",
  "Laplace initial value problem","Piecewise Laplace transform","Complex eigenvalues","Phase plane identification","Nonhomogeneous system of differential equations"]
},
{
  semester: "2018 Spring",
  exam: "Final",
  link: "https://www.youtube.com/embed/bRZmP2tSskg?start=",
  timestamps: [27, 175, 276, 439, 555, 760, 916, 1064, 1221, 1345, 1578, 1640, 1745, 1822, 2277, 2582, 2816, 2953, 3104, 3328],
  description: ["Separation of variables","Euler's method","Existence and Uniqueness theorem","Autonomous equation stability","Homogeneous differential equation",
  "Integrating factor","Exact equations","Autonomous equation stability","Undetermined coefficients","Characteristic equation",
  "Spring-mass systems","Reduction of order","Characteristic equation","Variation of parameters","Inverse Laplace transform",
  "Laplace initial value problem","Laplace transform","Phase plane identification","Multiple eigenvalues","Complex eigenvalues"]
},
{
  semester: "2017 Fall",
  exam: "Final",
  link: "https://www.youtube.com/embed/NL7NA_o-904?start=",
  timestamps: [23, 259, 439, 551, 655, 770, 1043, 1199, 1330, 1519, 1648, 1922, 1981, 2115, 2349, 2632, 3007, 3169, 3266, 3445],
  description: ["Autonomous equation stability","Integrating factor","Separation of variables","Salt tank applications","Euler's method",
  "Exact equations","Characteristic equation","Existence and Uniqueness theorem","Reduction of order","Spring-mass systems",
  "Variation of parameters","Characteristic equation","Undetermined coefficients","Piecewise Laplace transform","Laplace initial value problem",
  "Inverse Laplace transform","Laplace transform","Phase plane identification","Homogeneous system of differential equations","Multiple eigenvalues"]
},
{
  semester: "2017 Spring",
  exam: "Final",
  link: "https://www.youtube.com/embed/0ZCRCZ8CLio?start=",
  timestamps: [11, 146, 220, 468, 655, 959, 1084, 1189, 1285, 1386, 1638, 1866, 2097, 2293, 2504, 2759, 3027, 3154, 3263, 3496],
  description: ["Integrating factor","Separation of variables","Salt tank applications","Homogeneous differential equation","Exact equations",
  "Autonomous equation stability","Euler's method","Existence and Uniqueness theorem","Reduction of order","Variation of parameters",
  "Electric circuits","Undetermined coefficients","Undetermined coefficients","Inverse Laplace transform","Piecewise Laplace transform",
  "Laplace initial value problem","Laplace transform","Phase plane identification","Multiple eigenvalues","Fundamental matrix"]
}
];

var descriptions266 = [
  "Separation of variables", "Integrating factor", "Autonomous equation stability", "Euler's method", "Reduction of order", 
  "Homogeneous differential equation", "Exact equations", "Piecewise Laplace transform", "Phase plane identification",
  "Multiple eigenvalues", "Fundamental matrix", "Salt tank applications", "Laplace transform", "Laplace initial value problem",
  "Electric circuits", "Spring-mass systems", "Inverse Lapalace transform", "Undetermined coefficients", "Variation of parameters", 
  "Homogeneous system of differential equations", "Existence and Uniqueness theorem", "Freefall differential equations", 
  "Characteristic equation", "Nonhomogeneous system of differential equations", "Matrix exponential", "Laplace of a system of equations",
  "Complex eigenvalues"
]

var exams = []; //The correct set of exams to use, informed by guess

var descriptions = []; //The correct set of descriptions to use

var currentClass = '' //The class the user has most recently requested a question in

function buildOnload() {
  if(!localStorage.getItem("currentClass")) {localStorage.setItem("currentClass", "MA266")}

  var classSelect = document.getElementById("class");
  var opt = document.createElement("option");
  opt.appendChild(document.createTextNode("MA 266"));
  opt.value = "MA266";
  classSelect.appendChild(opt);
  
  opt = document.createElement("option");
  opt.appendChild(document.createTextNode("MA 265"));
  opt.value = "MA265";
  classSelect.appendChild(opt);

  guessClass();

  for(var i = 0; i < exams.length; i++) {
    var sel = document.getElementById("semester");
    var opt = document.createElement("option");
      
    opt.appendChild(document.createTextNode(exams[i].semester));
    opt.value = exams[i].semester;
    sel.appendChild(opt);
  }
}

function changeSemester() {
  document.getElementById("question-default").innerText = "Question #";
  var semester = document.getElementById("semester").value;
  var numOpt = document.getElementById("question").length;
  
  var numQuestions = 0;
  for(var i = 0; i < exams.length; i++) {
    if(semester == exams[i].semester) {
      numQuestions = exams[i].timestamps.length;
      break;
    }
  }

  if(numOpt > numQuestions) {
    var sel = document.getElementById("question");
    for(i = numOpt; i > numQuestions; i--) {
      sel.remove(i);
    }
  }
  else {
    for(var i = numOpt; i <= numQuestions; i++) {
      var sel = document.getElementById("question");
      var opt = document.createElement("option");
        
      opt.appendChild(document.createTextNode("Question " + i));
      opt.value = i.toString();
      sel.appendChild(opt);
    }
  }

  updateVideo();

}

function updateVideo(semester, question) {
  var exam = "Final"; // placeholder


  if(semester != null && question != "Question #") {
    document.getElementById("similarButton").style.background = "#d0ba92"; //Makes the similar problem button visible
    document.getElementById("similarButton").style.cursor = "pointer"; //Makes hovering over button show pointer
    document.getElementById("similarButton").style.pointerEvents = "auto"; //Makes the similar problem button clickable

    var foundExam = false;
    question = parseInt(question);

    for(var i = 0; i < exams.length; i++) {
      if(exams[i].semester == semester && exams[i].exam == exam) {
        document.getElementById("video").src = exams[i].link.concat(exams[i].timestamps[question-1]);
        document.getElementById("video-description").innerText = exams[i].description[question-1];
        foundExam = true;
        returnPkg = [i, question]

        for(var j = 0; j < descriptions266.length; j++) {
          if(exams[i].description[question-1] == descriptions266[j]) {
            localStorage.setItem('currentClass', 'MA266')
          }
        }
        for(var j = 0; j < descriptions265.length; j++) {
          if(exams[i].description[question-1] == descriptions265[j]) {
            localStorage.setItem('currentClass', 'MA265')
          }
        }

        dataLayer.push({'event':'questionSelected','examId':currentClass.concat(' ', semester, ' ', exam, ' Q', question.toString())});
        dataLayer.push({'event':'266topicstream','topicId':exams[i].description[question-1]});
      }
    }
    if(!foundExam) {
      document.getElementById("Video").src = "";
    }
    
    return(returnPkg);
  }
}

function findSimilar(i, question) { //Finds a new question that has the same description
  similarLinks = [];
  similarSems = [];
  similarQuestions = [];
  currentSem = exams[i].semester;

  for(var j = 0; j < exams.length; j++) {
    for(var k = 1; k < 20; k++) {
      if(exams[i].description[question-1] == exams[j].description[k-1]) {
        document.getElementById("video").src = exams[j].link.concat(exams[j].timestamps[k-1])
        document.getElementById("video-description").innerText = exams[j].description[k-1];
        similarSems[similarSems.length] = exams[j].semester;
        similarLinks[similarLinks.length] = exams[j].link.concat(exams[j].timestamps[k-1])
        similarQuestions[similarQuestions.length] = k;
      }
    }
  }
  console.log(similarSems, similarQuestions)
  do {
    randIndex = parseInt(Math.floor(Math.random() * similarQuestions.length))
    console.log(currentSem, similarSems[randIndex], question, similarQuestions[randIndex])
  } while(currentSem == similarSems[randIndex] && question == similarQuestions[randIndex]);

  returnPkg = updateVideo(similarSems[randIndex], similarQuestions[randIndex]);
  document.getElementById('semester').value = similarSems[randIndex];
  document.getElementById('question').value = similarQuestions[randIndex];

  return(returnPkg)
}

function guessClass() {
  var guess = parseInt(localStorage.getItem("currentClass").slice(2,6));
  console.log(guess)
  document.getElementById("class").value = 'MA' + guess.toString()

  if(guess == 266) {
    document.getElementsByClassName("byline").innerText = "MA 266: Ordinary Differential Equations"
  }
  if(guess == 265) {
    document.getElementsByClassName("byline").innerText = "MA 265: Linear Algebra"
  }

  if(guess == 266) {
    exams = exams266;
    descriptions = descriptions266;
    return("MA266")
  }

  if(guess == 265) {
    exams = exams265;
    descriptions = descriptions265;
    return("MA265")
  }
}

function changeClass() {
  localStorage.setItem("currentClass", document.getElementById("class").value)
  guessClass();
}