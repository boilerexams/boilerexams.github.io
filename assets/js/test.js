  var exams = [
    { 
      semester: "2019 Fall", 
      exam: "Final",
      link: "https://www.youtube.com/embed/t9hdIc6yBe4?start=", 
      timestamps: [54,233,388,472,578,785,985,1080,1244,1533,1696,1941,2108,2255,2574,2883,3540,4069,4297,4613],
      description: ["Autonomous equation stability", "Autonomous equation stability", "Separation of variables", "Freefall differential equations", 
      "Exact equations", "Exact equations", "Euler's method", "Characteristic equation", "Spring-mass systems", "Undetermined coefficients", "Variation of parameters", 
      "Phase plane identification", "Matrix exponential", "Homogeneous system of differential equations", "Nonhomogeneous system of differential equations", 
      "Laplace of a system of eq.", "Piecewise Laplace transform",	"Laplace transform", "Laplace initial value problem", "Laplace initial value problem"]
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

    var descriptions = [
      "Separation of variables", "Integrating factor", "Autonomous equation stability", "Euler's method", "Reduction of order", 
      "Homogeneous differential equation", "Exact equations", "Piecewise Laplace transform", "Phase plane identification",
      "Multiple eigenvalues", "Fundamental matrix", "Salt tank applications", "Laplace transform", "Laplace initial value problem",
      "Electric circuits", "Spring-mass systems", "Inverse Lapalace transform", "Undetermined coefficients", "Variation of parameters", 
      "Homogeneous system of differential equations", "Existence and Uniqueness theorem", "Freefall differential equations", 
      "Characteristic equation", "Nonhomogeneous system of differential equations"
    ]

var answer;
var globalChoice = null;
var answerState = -1;
// Get today's date and time
var now;
var questionBegan;

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

function resetPage() {
  document.getElementById("video").src = '';
  document.getElementById("ques-ans-container").style.cursor = "auto";
  document.getElementById("ques-ans-container").style.pointerEvents = "all";
  document.getElementById("submit-answer").disabled = true;
  document.getElementById("submit-answer").style.pointerEvents = "all"; // change
  document.getElementById("submit-answer").style.display = "inline-block";
  document.getElementById("submit-answer").style.cursor = "not-allowed";
  document.getElementById("similar-question").style.pointerEvents = "auto";
  document.getElementById("similar-question").style.cursor = "pointer";
  document.getElementById("similar-question").style.display = "inline-block";
  // document.getElementById('controlmenu-similar-question').style.display = "inline-block";
  // document.getElementById('similar-question-bottom').style.display = "inline-block";
  document.getElementById("questionStats").style.display = "none";
  document.getElementById("video").style.display = "none";
  document.getElementById("result-ques").style.display = "none";
  document.getElementById("result-ques").style.className = "";
  document.getElementById("embeded-video").className = "";
  document.getElementById("result-ques-streak").innerHTML = "";
  document.getElementById("next-button").disabled = false;
  document.getElementById("previous-button").disabled = false;
  document.getElementById("embeded-video").style.display = "none";
  document.getElementById("next-button-bottom").disabled = false;
  document.getElementById("previous-button-bottom").disabled = false;
  document.getElementById("show-video").style.display = "block";

  if(document.getElementById("question").value != "Question #") {
    document.getElementById("controlmenu").style.display = "block";
    document.getElementById("statsmenu").style.display = "block";
    document.getElementById("statsmenu").style.width = "300px";
    document.getElementById("ques-ans-container").style.display = "block";
    document.getElementById("answerBox").innerHTML = "";
    document.getElementById("bestTopicsBox").innerHTML = "";
  }
}

function getImg() {
  var semester = document.getElementById("semester").value;
  var question = document.getElementById("question").value;
  var exam = "FE"; // placeholder
  var examType = "Final"
  let options = ["A","B","C","D","E"];
  var examId = 'MA266'
  answerState = -1
  
  resetPage();

  for(var i = 0; i < options.length; i++) {
    document.getElementById("ans-button-".concat(options[i])).className = "ans-button";
    document.getElementById("circle-".concat(options[i])).className = "circle";
  }

  if(question != 'Question #') {
    var season = semester[5]
    var srcs = []

    srcs[srcs.length] = 'python-pdf/'.concat(examId, 'edited/', examId.slice(2,5), '-', exam, '-', season, '-', semester.slice(0,4), '/questions/Q', question.toString(), '.png')
    srcs[srcs.length] = 'python-pdf/'.concat(examId, 'edited/', examId.slice(2,5), '-', exam, '-', season, '-', semester.slice(0,4), '/answers/Q', question.toString(), 'A.png')
    srcs[srcs.length] = 'python-pdf/'.concat(examId, 'edited/', examId.slice(2,5), '-', exam, '-', season, '-', semester.slice(0,4), '/answers/Q', question.toString(), 'B.png')
    srcs[srcs.length] = 'python-pdf/'.concat(examId, 'edited/', examId.slice(2,5), '-', exam, '-', season, '-', semester.slice(0,4), '/answers/Q', question.toString(), 'C.png')
    srcs[srcs.length] = 'python-pdf/'.concat(examId, 'edited/', examId.slice(2,5), '-', exam, '-', season, '-', semester.slice(0,4), '/answers/Q', question.toString(), 'D.png')
    srcs[srcs.length] = 'python-pdf/'.concat(examId, 'edited/', examId.slice(2,5), '-', exam, '-', season, '-', semester.slice(0,4), '/answers/Q', question.toString(), 'E.png')

    txt = 'https://raw.githubusercontent.com/boilerexams/boilerexams.github.io/master/python-pdf/answers/'.concat(examId, '-ANS/ANS-MA ', examId.slice(2,5), '-', exam, '-', season, '-', semester.slice(0, 4), '.txt')
        
    imgDim(srcs[0], "questionImg")
    imgContainerDim(srcs[0], 1);
    imgContainerDim(srcs[1], 0);
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
        if(question == exams[i].timestamps.length) {
          // disables next button at end of exam
          document.getElementById("next-button").disabled = true;
        }
        else if (question == 1) {
          document.getElementById("previous-button").disabled = true;
        }
        returnPkg = [i, question]
        break;
      }
    }

    similarQuestions = [];
    for(var j = 0; j < exams.length; j++) {
      for(var k = 1; k <= 20; k++) {
        if(exams[returnPkg[0]].description[question-1] == exams[j].description[k-1]) {
          similarQuestions[similarQuestions.length] = k;
        }
      }
    }
    if(similarQuestions.length == 1) {
      document.getElementById('similar-question').style.display = "none";
      // document.getElementById('controlmenu-similar-question').style.display = "none";
      // document.getElementById('similar-question-bottom').style.display = "none";
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

function imgContainerDim(imgSource, isQuestion) {
  const scaleFactor = 1.5
  var img = new Image();
  img.onload = function() {
    if (isQuestion == 1) {
      document.getElementById("ans-container").style.width = (this.width / scaleFactor).toString().concat("px");
      document.getElementById("ques-ans-container").style.width = (this.width / scaleFactor + 60).toString().concat("px");
      document.getElementById("ans-container").style.height = "auto";
    }
    else if (parseFloat(document.getElementById("ques-ans-container").style.width) - 100 < (this.width / scaleFactor + 60)) {
      //console.log("FIXING QUESTION CONTAINER")
      document.getElementById("ans-container").style.width = (this.width / scaleFactor + 140).toString().concat("px");
      document.getElementById("ques-ans-container").style.width = (this.width / scaleFactor + 200).toString().concat("px");
      document.getElementById("ques-container").style.float = "left";
      document.getElementById("ques-container").style.marginLeft = "40px";
      document.getElementById("ques-container").style.marginRight = "400px";
    }
    adjustWidth();
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
      console.log("The answer is " + resp[0].toString())
      document.getElementById("answerBox").innerHTML = "The answer is " + resp[0].toString();
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
  document.getElementById("submit-answer").disabled = false;
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
  document.getElementById("submit-answer").style.pointerEvents = "none";
  document.getElementById("submit-answer").style.display = "none";
  document.getElementById("show-video").style.display = "none";
  document.getElementById("questionStats").style.display = "block";
  questionBegan = 0;
  localStorage.setItem("unixTimeElapsedSinceSubmit", 0)

  if(answer == globalChoice) {
    answerState = 1;
    document.getElementById("ans-button-".concat(globalChoice)).className = "ans-button-correct";
    document.getElementById("circle-".concat(globalChoice)).className = "circle-selected-correct";
    document.getElementById("result-ques").className = "correct-result";
    document.getElementById("result-ques-text").innerHTML = "Correct";
    document.getElementById("result-ques").style.display = "inline-block";
    document.getElementById("result-ques-img").src = "Images/correct-answer-check.png";
  } 
  else {
    answerState = 0;
    document.getElementById("ans-button-".concat(globalChoice)).className = "ans-button-incorrect";
    document.getElementById("circle-".concat(globalChoice)).className = "circle-selected-incorrect";
    document.getElementById("ans-button-".concat(answer)).className = "ans-button-correct";
    document.getElementById("circle-".concat(answer)).className = "circle-selected-correct";
    document.getElementById("result-ques").className = "incorrect-result";
    document.getElementById("result-ques-text").innerHTML = "Incorrect";
    document.getElementById("result-ques").style.display = "inline-block";
    document.getElementById("result-ques-img").src = "Images/wrong-answer-x.png";
  }
  localStorage.setItem('answerState', answerState.toString());

  if (!localStorage.getItem('totalAnswers')) {
    localStorage.setItem('totalAnswers', '0');
  }
  if (!localStorage.getItem('totalCorrect')) {
    localStorage.setItem('totalCorrect', '0');
  }

  totAns = parseInt(localStorage.getItem('totalAnswers'));
  localStorage.setItem('totalAnswers', (totAns + 1).toString())

  if(answerState == 1) {
    totCorrect = parseInt(localStorage.getItem('totalCorrect'));
    localStorage.setItem('totalCorrect', (totCorrect + 1).toString())
  }
  overallPercent = (parseInt(localStorage.getItem('totalCorrect')) / parseInt(localStorage.getItem('totalAnswers')) * 100).toFixed(2)
  console.log("\n\nYou get " + overallPercent.toString() + "% of questions correct overall")
  document.getElementById("bestTopicsBox").innerHTML += "<br>You get " + overallPercent.toString() + "% of questions correct overall<br>"

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

    if(!localStorage.getItem('streak'))
    {
      localStorage.setItem('streak', '0')
    }
    if(answerState == 1)
    {
      deltaCorrect = 1
      localStorage.setItem(descPos.toString().concat('correct'), (parseInt(localStorage.getItem(descPos.toString().concat('correct'))) + 1).toString())
      localStorage.setItem('streak', (parseInt(localStorage.getItem('streak')) + 1).toString())
      document.getElementById("result-ques-streak").innerHTML = "🔥".concat(localStorage.getItem('streak'));
    }
    if(answerState == 0) {
      localStorage.setItem('streak', '0')
    }
  }
  var totalTopicAnswered = parseInt(localStorage.getItem(descPos.toString().concat('answered')))
  var totalTopicCorrect = parseInt(localStorage.getItem(descPos.toString().concat('correct')))
  topicPercent = (parseFloat(localStorage.getItem(descPos.toString().concat('correct')) / parseFloat(localStorage.getItem(descPos.toString().concat('answered'))) * 100))
  oldPercent = ((totalTopicCorrect - deltaCorrect) / (totalTopicAnswered - 1) * 100)

  if(!(topicPercent >= 0 || topicPercent < 0)) {topicPercent = 0} //Detects and fixes NaNs
  if(!(oldPercent >= 0 || oldPercent < 0)) {oldPercent = 0} //Detects and fixes NaNs

  console.log("\n\nYou get " + description + " questions correct " + topicPercent.toFixed(2).toString() + "% of the time")
  document.getElementById("bestTopicsBox").innerHTML += "<br>You get " + description + "<br>questions correct " + topicPercent.toFixed(2).toString() + "% of the time<br>"
  //document.getElementById("questionStats").innerHTML = "You get ".concat(description, " questions correct ", "<br>", topicPercent.toFixed(2).toString(), "% of the time", " (∆ = ", oldPercent.toFixed(2).toString(), "%", " -> ", topicPercent.toFixed(2).toString(), "%)");

  question = parseInt(question);

  for(var i = 0; i < exams.length; i++) {
    if(exams[i].semester == semester && exams[i].exam == exam) {
      document.getElementById("video").src = exams[i].link.concat(exams[i].timestamps[question-1]);
      returnPkg = [i, question]
    }
  }

  topicRanker() //Performs more computations relating to user performance
  return(returnPkg)
}


function updateVideo() {
  document.getElementById("embeded-video").className = "embeded-video";
  document.getElementById("embeded-video").style.display = "inherit";
  var semester = document.getElementById('semester').value
  var question = document.getElementById('question').value
  const examId = 'MA266'
  var exam = "Final"; // placeholder
    
  var foundExam = false;
  question = parseInt(question);

  for(var i = 0; i < exams.length; i++) {
    if(exams[i].semester == semester && exams[i].exam == exam) {
      document.getElementById("video").src = exams[i].link.concat(exams[i].timestamps[question-1]);
      document.getElementById("video").style.display = "block";
      if(question == exams[i].timestamps.length) {
        // disables next button at end of exam
        document.getElementById("next-button-bottom").disabled = true;
      }
      else if (question == 1) {
        document.getElementById("previous-button-bottom").disabled = true;
      }

      foundExam = true;

      dataLayer.push({'event':'questionSelected','examId':examId.concat(' ', semester, ' ', exam, ' Q', question.toString())});
      dataLayer.push({'event':'266topicstream','topicId':exams[i].description[question-1]});
    }
  }
  if(!foundExam) {
    document.getElementById("video").src = "";
  }
}

function findSimilar(i, question) { //Finds a new question that has the same description
  similarSems = [];
  similarQuestions = [];
  currentSem = exams[i].semester;
  var randIndex = 0

  for(var j = 0; j < exams.length; j++) {
    for(var k = 1; k <= exams[j].description.length; k++) {
      if(exams[i].description[question-1] == exams[j].description[k-1]) {
        document.getElementById("video").src = exams[j].link.concat(exams[j].timestamps[k-1])
        similarSems[similarSems.length] = exams[j].semester;
        similarQuestions[similarQuestions.length] = k;
      }
    }
  }

  if(similarQuestions.length > 1) {
    do {
      randIndex = parseInt(Math.floor(Math.random() * similarQuestions.length))
    } while(currentSem == similarSems[randIndex] && question == similarQuestions[randIndex]);
  }

  returnPkg = updateVideo(similarSems[randIndex], similarQuestions[randIndex]);
  document.getElementById('semester').value = similarSems[randIndex];
  document.getElementById('question').value = similarQuestions[randIndex];
  getImg();
  scrollToTop();

  return(returnPkg)
}

function findRandom() {
  randExam = parseInt(Math.floor(Math.random() * exams.length))
  randQuestion = parseInt(Math.ceil(Math.random() * exams[randExam].timestamps.length))
  exam = "Final"

  document.getElementById("semester").value = exams[randExam].semester;
  document.getElementById("question").value = randQuestion;
  getImg();

  for(var i = 0; i < exams.length; i++) {
    if(exams[i].semester == semester && exams[i].exam == exam && answerState == 0) {
      document.getElementById("video").src = exams[i].link.concat(exams[i].timestamps[question-1]);
      returnPkg = [i, randQuestion];
    }
  }
  scrollToTop();

  return(returnPkg)
}

function topicRanker() {
  topicPercents = [];

  for(var i = 0; i < descriptions.length; i++)
  {
    description = descriptions[i];
    topicPercent = (parseFloat(localStorage.getItem(i.toString().concat('correct')) / parseFloat(localStorage.getItem(i.toString().concat('answered'))) * 100)).toFixed(2)
    if(!(topicPercent >= 0 || topicPercent < 0)) {topicPercent = -1}; //Detects and fixes NaNs
    topicPercents[topicPercents.length] = {descPlace: i, percent: parseFloat(topicPercent)};
  }
  topicPercents.sort(function(a, b){return b.percent-a.percent})
  console.log("\n\nYour best topics are: ")
  document.getElementById("bestTopicsBox").innerHTML += "<br>Your best topics are: <br>"

  for(i = 0; i < 5; i++) {
    console.log((i + 1).toString() + ": " + descriptions[topicPercents[i].descPlace] + " (" + topicPercents[i].percent.toString() + "% correct)")
    document.getElementById("bestTopicsBox").innerHTML += (i + 1).toString() + ": " + descriptions[topicPercents[i].descPlace] + " (" + topicPercents[i].percent.toString() + "%) <br>"
  }

  document.getElementById("bestTopicsBox").innerHTML += "<br>You haven't tried these topics:<br>";
  console.log("\n\nYou haven't tried these topics: ")

  for(i = 0; i < topicPercents.length; i++) {
    if(topicPercents[i].percent == -1) {
      document.getElementById("bestTopicsBox").innerHTML += (i + 1).toString() + ": " + descriptions[topicPercents[i].descPlace] + "<br>";
      console.log((i + 1).toString() + ": " + descriptions[topicPercents[i].descPlace])
    }
  }

  streak()
}

function streak() {
  let emoji
  var streakVal = localStorage.getItem('streak')

  if(streakVal == 0) {
    //emoji = "🔱"
  }
  if(streakVal > 0 && streakVal < 5) {
    emoji = "🔥"
  }
  if(streakVal >= 5 && streakVal < 10) {
    emoji = "🚂"
  }

  console.log("\n\nYou are on a " + streakVal.toString() + " question streak!")
  
  document.getElementById("bestTopicsBox").innerHTML += "<br>You are on a " + streakVal.toString() + " question streak! ";
}

function scrollToVideo() {
  console.log(getScrollPercent())
  document.querySelector('#eImg').scrollIntoView({ 
    behavior: 'smooth' 
  });
  /*var elmnt = document.getElementById("embeded-video");
  elmnt.scrollIntoView();*/
}

function scrollToTop() {
  console.log(getScrollPercent())
  if(getScrollPercent() > 50) {
    document.querySelector('#extra').scrollIntoView({ 
      behavior: 'smooth' 
    });
  }
}

function getScrollPercent() {
  var h = document.documentElement, 
      b = document.body,
      st = 'scrollTop',
      sh = 'scrollHeight';
  return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
}

function nextQuestion() {
  document.getElementById("question").value = (parseInt(document.getElementById("question").value) + 1).toString();
  getImg();
  scrollToTop();
}

function prevQuestion() {
  document.getElementById("question").value = (parseInt(document.getElementById("question").value) - 1).toString();
  getImg();
  scrollToTop();
}

function adjustWidth() {
  do {
    var statsLeft = document.getElementById("statsmenu").getBoundingClientRect().left
    var quesRight = document.getElementById("ques-ans-container").getBoundingClientRect().right
    var margin = 10;
    // console.log(statsLeft)
    // console.log(quesRight)
    // console.log("We have a problem here")
    document.getElementById("statsmenu").style.width = (document.getElementById("statsmenu").style.width.slice(0, -2) - 10).toString() + 'px';
  } while(statsLeft < quesRight + margin);
}

function fullExamMode(examTimeLimit) { //Exam time limit in hours
  console.log('Time for a full exam')
  document.getElementById("question").value = "1";
  document.getElementById("full-exam-toggle").style.pointerEvents = "none";
  document.getElementById("full-exam-toggle").innerHTML = "Now taking exam";

  localStorage.removeItem("unixTime")
  localStorage.removeItem("unixTimeElapsedSinceSubmit")
  localStorage.removeItem("unixTimeRemaining")

  // Set the date we're counting down to

  var currentDate = new Date();
  var unixTime = currentDate.getTime()


  var countDownDate = unixTime + 1000 * 60 * 60 * examTimeLimit;
  console.log(unixTime, countDownDate)

  // Update the count down every 1 second
  var x = setInterval(function() {
    now = new Date().getTime();
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    questionBegan = unixTime;

    if (localStorage.getItem("unixTime")) {
      console.log("This is triggering")
      now = parseInt(localStorage.getItem("unixTime")) + 1000;
      distance = parseInt(localStorage.getItem("unixTimeRemaining")) - 1000;
      submitTimeElapsed = parseInt(localStorage.getItem("unixTimeElapsedSinceSubmit"));
      localStorage.setItem("unixTimeElapsedSinceSubmit", submitTimeElapsed + 1000)
    }
    else {
      submitTimeElapsed = now - unixTime;
    }
    console.log(submitTimeElapsed / 1000)

    localStorage.setItem("unixTime", now);
    localStorage.setItem("unixTimeRemaining", distance);

    if(!localStorage.getItem("unixTimeElapsedSinceSubmit")) {
      localStorage.setItem("unixTimeElapsedSinceSubmit", submitTimeElapsed + 1000);
    }

    // Time calculations for days, hours, minutes and seconds
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000 + 1);

    var questionHours = Math.floor((submitTimeElapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var questionMinutes = Math.floor((submitTimeElapsed % (1000 * 60 * 60)) / (1000 * 60));
    var questionSeconds = Math.floor(((submitTimeElapsed) % (1000 * 60)) / 1000);

    hours = adjustTimeForDisplay(hours)
    minutes = adjustTimeForDisplay(minutes)
    seconds = adjustTimeForDisplay(seconds)

    questionHours = adjustTimeForDisplay(questionHours)
    questionMinutes = adjustTimeForDisplay(questionMinutes)
    questionSeconds = adjustTimeForDisplay(questionSeconds)


    if(submitTimeElapsed == 0) {
      console.log("We've gotta reset the question clock")
      localStorage.setItem("unixTimeElapsedSinceSubmit", 1000);
    }

    // Display the result in the element with id="demo"
    document.getElementById("full-timer").innerHTML = "Exam time remaining: " + hours + ":" + minutes + ":" + seconds;
    document.getElementById("question-split-timer").innerHTML = "Question time elapsed: " + questionHours + ":" + questionMinutes + ":" + questionSeconds;

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("full-timer").innerHTML = "EXPIRED";
    }
  }, 1000);
}

function adjustTimeForDisplay(time) {
  if(time >= 10) {
    return(time.toString())
  }
  else if(time < 10 && time >= 0) {
    return('0' + time.toString())
  }
}