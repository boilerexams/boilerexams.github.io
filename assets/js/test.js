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

    var descriptions = [
      "Separation of variables", "Integrating factor", "Autonomous equation stability", "Euler's method", "Reduction of order", 
      "Homogeneous differential equation", "Exact equations", "Piecewise Laplace transform", "Phase plane identification",
      "Multiple eigenvalues", "Fundamental matrix", "Salt tank applications", "Laplace transform", "Laplace initial value problem",
      "Electric circuits", "Spring-mass systems", "Inverse Lapalace transform", "Undetermined coefficients", "Variation of parameters", 
      "Homogeneous system of differential equations", "Existence and Uniqueness theorem", "Freefall differential equations", 
      "Characteristic equation"
    ]

var answer;
var globalChoice = null;
var answerState = -1;

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

  getImg();
}

function getImg() {
  var semester = document.getElementById("semester").value;
  var question = document.getElementById("question").value;
  var exam = "FE"; // placeholder
  var examType = "Final"
  let options = ["A","B","C","D","E"];
  var examId = 'MA266'
  document.getElementById("video").src = '';
  document.getElementById("ques-ans-container").style.cursor = "auto";
  document.getElementById("ques-ans-container").style.pointerEvents = "all";
  document.getElementById("submit-answer").style.pointerEvents = "none"
  document.getElementById("submit-answer").style.display = "inline-block"
  document.getElementById("submit-answer").style.cursor = "not-allowed"
  document.getElementById("similar-question").style.pointerEvents = "auto";
  document.getElementById("similar-question").style.cursor = "pointer";
  document.getElementById("questionStats").style.display = "none";

  for(var i = 0; i < options.length; i++) {
    document.getElementById("ans-button-".concat(options[i])).className = "ans-button";
    document.getElementById("circle-".concat(options[i])).className = "circle";
  }

  if(question != 'Question #') {
    document.getElementById("ques-ans-container").style.display = "block";
    var season = semester[5]
    console.log(semester, question, season)
    var srcs = []
    const txts = ''

    srcs[srcs.length] = 'python-pdf/'.concat(examId, 'edited/', examId.slice(2,5), '-', exam, '-', season, '-', semester.slice(0,4), '/questions/Q', question.toString(), '.png')
    srcs[srcs.length] = 'python-pdf/'.concat(examId, 'edited/', examId.slice(2,5), '-', exam, '-', season, '-', semester.slice(0,4), '/answers/Q', question.toString(), 'A.png')
    srcs[srcs.length] = 'python-pdf/'.concat(examId, 'edited/', examId.slice(2,5), '-', exam, '-', season, '-', semester.slice(0,4), '/answers/Q', question.toString(), 'B.png')
    srcs[srcs.length] = 'python-pdf/'.concat(examId, 'edited/', examId.slice(2,5), '-', exam, '-', season, '-', semester.slice(0,4), '/answers/Q', question.toString(), 'C.png')
    srcs[srcs.length] = 'python-pdf/'.concat(examId, 'edited/', examId.slice(2,5), '-', exam, '-', season, '-', semester.slice(0,4), '/answers/Q', question.toString(), 'D.png')
    srcs[srcs.length] = 'python-pdf/'.concat(examId, 'edited/', examId.slice(2,5), '-', exam, '-', season, '-', semester.slice(0,4), '/answers/Q', question.toString(), 'E.png')

    txt = 'https://raw.githubusercontent.com/boilerexams/boilerexams.github.io/master/python-pdf/answers/'.concat(examId, '-ANS/ANS-MA ', examId.slice(2,5), '-', exam, '-', season, '-', semester.slice(0, 4), '.txt')
    

    console.log(txts)
    
    imgDim(srcs[0], "questionImg")
    imgContainerDim(srcs[0]);
    imgDim(srcs[1], "aImg")
    imgDim(srcs[2], "bImg")
    imgDim(srcs[3], "cImg")
    imgDim(srcs[4], "dImg")
    imgDim(srcs[5], "eImg")

    //https://raw.githubusercontent.com/boilerexams/boilerexams.github.io/master/python-pdf/answers/MA 266-ANS/ANS-MA 266-FE-F-2017.txt
    getCorrect(txt, question)
  }
  
  //https://raw.githubusercontent.com/boilerexams/boilerexams.github.io/master/python-pdf/MA266edited/266-FE-S-2019/questions/Q1.png
  
  if (question != 'Question #') {
    question = parseInt(question);

    for(var i = 0; i < exams.length; i++) {
      if(exams[i].semester == semester && exams[i].exam == examType) {
        returnPkg = [i, question]
      }
    }
    return(returnPkg)
  }

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

function imgContainerDim(imgSource) {
  const scaleFactor = 1.5
  var img = new Image();
  img.onload = function() {
    document.getElementById("ans-container").style.width = (this.width / scaleFactor).toString().concat("px");
    document.getElementById("ques-ans-container").style.width = (this.width / scaleFactor + 60).toString().concat("px");
    document.getElementById("ans-container").style.height = "auto";
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

function changeOption(choice)
{
  globalChoice = choice;
  document.getElementById("submit-answer").style.cursor = "pointer";
  document.getElementById("submit-answer").style.display = "block";
  document.getElementById("submit-answer").style.pointerEvents = "all";
  let options = ["A","B","C","D","E"];
  
  for(var i = 0; i < options.length; i++) {
    document.getElementById("ans-button-".concat(options[i])).className = "ans-button";
    document.getElementById("circle-".concat(options[i])).className = "circle";
  }
  document.getElementById("ans-button-".concat(choice)).className = "ans-button-selected";
  document.getElementById("circle-".concat(choice)).className = "circle-selected";
}


function checkAnswer() {
  examId = 'MA265'
  var exam = "Final"; // placeholder
  semester = document.getElementById('semester').value;
  question = document.getElementById('question').value;
  document.getElementById("ques-ans-container").style.cursor = "not-allowed";
  document.getElementById("ques-ans-container").style.pointerEvents = "none";
  document.getElementById("submit-answer").style.pointerEvents = "none"
  document.getElementById("submit-answer").style.display = "none"
  document.getElementById("questionStats").style.display = "block";

  //console.log(answer, globalChoice)
  if(answer == globalChoice) {
    //console.log('you got it right!')
    answerState = 1;
    document.getElementById("ans-button-".concat(globalChoice)).className = "ans-button-correct";
    document.getElementById("circle-".concat(globalChoice)).className = "circle-selected-correct";
  } 
  else {
    //console.log('Incorrect!')
    answerState = 0;
    document.getElementById("ans-button-".concat(globalChoice)).className = "ans-button-incorrect";
    document.getElementById("circle-".concat(globalChoice)).className = "circle-selected-incorrect";
  }
  localStorage.setItem('answerState', answerState.toString());

  if (!localStorage.getItem('totalAnswers')) {
    localStorage.setItem('totalAnswers', '0');
  }

  totAns = parseInt(localStorage.getItem('totalAnswers'));
  localStorage.setItem('totalAnswers', (totAns + 1).toString())

  var descPos = -1
  var deltaCorrect = 0

  for(var i = 0; i < exams.length; i++)
  {
    if (exams[i].semester == semester)
    {
      description = exams[i].description[question - 1]
    }
  }
  for(var j = 0; j < descriptions.length; j++)
  {
    if(descriptions[j] == description)
    {
      descPos = j;
    }
  }
  if(descPos != -1)
  {
    if(!localStorage.getItem(descPos.toString().concat('answered')))
    {
      localStorage.setItem(descPos.toString().concat('answered'), '0')
    }
    localStorage.setItem(descPos.toString().concat('answered'), (parseInt(localStorage.getItem(descPos.toString().concat('answered'))) + 1).toString())
    
    if(!localStorage.getItem(descPos.toString().concat('correct')))
    {
      localStorage.setItem(descPos.toString().concat('correct'), '0')
    }

    // const pastCorrect = parseFloat(localStorage.getItem(descPos.toString().concat('correct')));

    if(answerState == 1)
    {
      localStorage.setItem(descPos.toString().concat('correct'), (parseInt(localStorage.getItem(descPos.toString().concat('correct'))) + 1).toString())
      deltaCorrect = 1
    }
  }
  var totalTopicAnswered = parseFloat(localStorage.getItem(descPos.toString().concat('answered')))
  var totalTopicCorrect = parseFloat(localStorage.getItem(descPos.toString().concat('correct')))
  console.log(totalTopicAnswered, totalTopicCorrect)
  topicPercent = (totalTopicCorrect / totalTopicAnswered * 100).toFixed(2).toString()
  deltaPercent = ((topicPercent - (totalTopicCorrect - deltaCorrect) / (totalTopicAnswered - 1) * 100).toFixed(2)).toString()
  document.getElementById("questionStats").innerHTML = "You get ".concat(description, " questions correct ", "<br>", topicPercent, "% of the time", " (∆ = ", deltaPercent, "%)");

  question = parseInt(question);

  for(var i = 0; i < exams.length; i++) {
    if(exams[i].semester == semester && exams[i].exam == exam) {
      document.getElementById("video").src = exams[i].link.concat(exams[i].timestamps[question-1]);
      returnPkg = [i, question]
    }
  }
  return(returnPkg)
}


function updateVideo(semester, question) {
  examId = 'MA265'
  var exam = "Final"; // placeholder
    
  var foundExam = false;
  question = parseInt(question);

  for(var i = 0; i < exams.length; i++) {
    if(exams[i].semester == semester && exams[i].exam == exam) {
      document.getElementById("video").src = exams[i].link.concat(exams[i].timestamps[question-1]);
      foundExam = true;

      dataLayer.push({'event':'questionSelected','examId':examId.concat(' ', semester, ' ', exam, ' Q', question.toString())});
      dataLayer.push({'event':'266topicstream','topicId':exams[i].description[question-1]});
    }
  }
  if(!foundExam) {
    document.getElementById("Video").src = "";
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
  do {
    randIndex = parseInt(Math.floor(Math.random() * similarQuestions.length))
  } while(currentSem == similarSems[randIndex] && question == similarQuestions[randIndex]);

  returnPkg = updateVideo(similarSems[randIndex], similarQuestions[randIndex]);
  document.getElementById('semester').value = similarSems[randIndex];
  document.getElementById('question').value = similarQuestions[randIndex];
  getImg();

  return(returnPkg)
}