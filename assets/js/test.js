  var exams = [
    { 
      semester: "2019 Fall", 
      exam: "Final",
      link: "https://www.youtube.com/embed/t9hdIc6yBe4?start=", 
      timestamps: [54,233,388,472,578,785,985,1080,1244,1533,1696,1941,2108,2255,2574,2883,3540,4069,4297,4613],
      description: ["Autonomous equation stability", "Autonomous equation stability", "Separation of variables", "Freefall differential equations", "Exact equations", "Exact equations", "Euler's method", "Characteristic equation", "Spring-mass systems", "Undetermined coefficients", "Variation of parameters", "Phase plane identification", "Matrix exponential", "Homogeneous system of differential equations", "Nonhomogeneous system of differential equations", "Laplace of a system of eq.", "Piecewise Laplace transform",	"Laplace Transform", "Laplace initial value problem", "Laplace initial value problem"]
    },
    { 
      semester: "2019 Spring",
      exam: "Final",
      link: "https://www.youtube.com/embed/fqET297U3Bc?start=",
      timestamps: [24, 95, 175, 307, 426, 601, 690, 874, 1031, 1228, 1428, 1583, 1699, 1792, 2180, 2396, 2514, 2616, 2784, 2870],
      description: ["Existence and Uniqueness theorem",	"Integrating factor",	"Separation of variables",	"Exact equations",	"Characteristic equation",
        "Reduction of order",	"Variation of parameters",	"Homogeneous differential equation",	"Undetermined coefficients",	"Laplace transform",
        "Laplace initial value problem",	"Laplace transform",	"Unit step functions",	"Laplace initial value problem",	"Inverse Laplace transform", "Phase plane identification", "Homogeneous system of differential equations",	"Nonhomogeneous system of differential equations",	"Homogeneous system of differential equations",	"Complex eigenvalues"]
    },
    {
      semester: "2018 Fall",
      exam: "Final",
      link: "https://www.youtube.com/embed/BRAxIssBBBM?start=",
      timestamps: [9, 155, 250, 522, 681, 780, 887, 1049, 1283, 1530, 1630, 1687, 1796, 1935, 2179, 2387, 2588, 2830, 2991, 3096],
      description: ["Separation of variables","Salt tank applications","Exact equations","Homogeneous differential equation","Euler's method",
      "Integrating factor","Autonomous equation stability","Characteristic equation","Variation of parameters","Spring-mass system",
      "Characteristic equation","Undetermined coefficients","Reduction of order","Inverse Lapalace transform","Laplace initial value problem","Laplace initial value problem","Piecewise Laplace transform","Complex eigenvalues","Phase plane identification","Nonhomogeneous system of differential equations"]
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

var answer;

function buildOnload() {
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
}

function getImg(semester, question) {

  if(question != 'Question #') {
    examId = 'MA266'
    var exam = "FE"; // placeholder
    var season = semester[5]
    console.log(semester, question, season)
    var srcs = []
    const txts = ''

    srcs[srcs.length] = 'https://raw.githubusercontent.com/boilerexams/boilerexams.github.io/master/python-pdf/'.concat(examId, 'edited/', examId.slice(2,5), '-', exam, '-', season, '-', semester.slice(0,4), '/questions/Q', question.toString(), '.png')
    srcs[srcs.length] = 'https://raw.githubusercontent.com/boilerexams/boilerexams.github.io/master/python-pdf/'.concat(examId, 'edited/', examId.slice(2,5), '-', exam, '-', season, '-', semester.slice(0,4), '/answers/Q', question.toString(), 'A.png')
    srcs[srcs.length] = 'https://raw.githubusercontent.com/boilerexams/boilerexams.github.io/master/python-pdf/'.concat(examId, 'edited/', examId.slice(2,5), '-', exam, '-', season, '-', semester.slice(0,4), '/answers/Q', question.toString(), 'B.png')
    srcs[srcs.length] = 'https://raw.githubusercontent.com/boilerexams/boilerexams.github.io/master/python-pdf/'.concat(examId, 'edited/', examId.slice(2,5), '-', exam, '-', season, '-', semester.slice(0,4), '/answers/Q', question.toString(), 'C.png')
    srcs[srcs.length] = 'https://raw.githubusercontent.com/boilerexams/boilerexams.github.io/master/python-pdf/'.concat(examId, 'edited/', examId.slice(2,5), '-', exam, '-', season, '-', semester.slice(0,4), '/answers/Q', question.toString(), 'D.png')
    srcs[srcs.length] = 'https://raw.githubusercontent.com/boilerexams/boilerexams.github.io/master/python-pdf/'.concat(examId, 'edited/', examId.slice(2,5), '-', exam, '-', season, '-', semester.slice(0,4), '/answers/Q', question.toString(), 'E.png')

    txt = 'https://raw.githubusercontent.com/boilerexams/boilerexams.github.io/master/python-pdf/answers/'.concat(examId, '-ANS/ANS-MA ', examId.slice(2,5), '-', exam, '-', season, '-', semester.slice(0, 4), '.txt')
    

    console.log(txts)
    
    imgDim(srcs[0], "questionImg")
    imgDim(srcs[1], "aImg")
    imgDim(srcs[2], "bImg")
    imgDim(srcs[3], "cImg")
    imgDim(srcs[4], "dImg")
    imgDim(srcs[5], "eImg")

    //https://raw.githubusercontent.com/boilerexams/boilerexams.github.io/master/python-pdf/answers/MA 266-ANS/ANS-MA 266-FE-F-2017.txt
    getCorrect(txt, question)
  }
  
  //https://raw.githubusercontent.com/boilerexams/boilerexams.github.io/master/python-pdf/MA266edited/266-FE-S-2019/questions/Q1.png
}

function imgDim(imgSource, imgId) {
    const scaleFactor = 1.5
    var img = new Image();
    img.onload = function() {
      document.getElementById(imgId).width = (this.width / scaleFactor).toString();
      document.getElementById(imgId).height = (this.height / scaleFactor).toString();
      document.getElementById(imgId).src = imgSource;
    }
    img.src = imgSource;
  }

function getCorrect(txtSource, qnum)
{
  var resp = ''
  fetch(txtSource)
  .then(function (response) {
      switch (response.status) {
          // status "OK"
          case 200:
              return response.text();
          // status "Not Found"
          case 404:
              throw response;
      }
  })
  .then(function (template) {
      //console.log(template);
      resp = template

      alphaspassed = 1
      timesran = 0
      while (alphaspassed < qnum && timesran < 40) {
        resp = resp.slice(1)
        //console.log(resp)
        if(resp[0] == 'A' || resp[0] == 'B' || resp[0] == 'C' || resp[0] == 'D' || resp[0] == 'E') {
          alphaspassed += 1
          //console.log(resp)
        }
        timesran += 1
      }
      console.log(resp[0])
      answer = resp[0]
  })
  .catch(function (response) {
      // "Not Found"
      console.log(response.statusText);
  });

}

function checkCorrect(choice)
{
  if(answer == choice) {console.log('you got it right!')} else {console.log('Incorrect!')}
}