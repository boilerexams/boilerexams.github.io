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
      description: ["Integrating factor","Separation of variables","Salt tank applications","v = y / x substitution","Exact equations",
      "Autonomous equation stability","Euler's method","Existence and Uniqueness theorem","Reduction of order","Variation of parameters",
      "Electric circuits","Undetermined coefficients","Undetermined coefficients","Inverse Laplace transform","Piecewise Laplace transform",
      "Laplace initial value problem","Laplace transform","Phase plane identification","Multiple eigenvalues","Fundamental matrix"]
    }
    ];

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
    
      updateVideo();
    
    }
    
    function updateVideo() {
      examId = 'MA266'
      var semester = document.getElementById("semester").value;
      var question = document.getElementById("question").value;
      var exam = "Final"; // placeholder
    
      if(semester != null && question != "Question #") {
        var foundExam = false;
        question = parseInt(question);
    
        for(var i = 0; i < exams.length; i++) {
          if(exams[i].semester == semester && exams[i].exam == exam) {
            document.getElementById("video").src = exams[i].link.concat(exams[i].timestamps[question-1]);
            document.getElementById("video-description").innerText = exams[i].description[question-1];
            foundExam = true;

            if(window.localStorage.getItem('currentQ')) {
              console.log("Welcome back, you've been here before")
            }

            dataLayer.push({'event':'questionSelected','examId':examId.concat(' ', semester, ' ', exam, ' Q', question.toString())});
            dataLayer.push({'event':'266topicstream','topicId':exams[i].description[question-1]});
            window.localStorage.setItem('currentQ', examId.concat(' ', semester, ' ', exam, ' Q', question.toString()));
            console.log(window.localStorage.getItem('currentQ'));
            
            try {
              console.log("Trying to find a similar topic")
              for(var j = 0; j < exams.length; j++) {
                for(var k = 1; k < 20; k++) {
                  console.log(exams[j].description[k-1], exams[i].description[question-1])
                  if(exams[i].description[question-1] == exams[j].description[k-1]) {
                    document.getElementById("video").src = exams[j].link.concat(exams[j].timestamps[k-1])
                    document.getElementById("video-description").innerText = exams[j].description[k-1];
                    console.log("Found an exam with an identical topic and new source:")
                    console.log(exams[j].description[k-1])
                    console.log(exams[j].link.concat(exams[j].timestamps[k-1]))
                  }
                }
              }
            }
            catch {
              console.log("sad")
            }
          }
    
        if(!foundExam) {
          document.getElementById("Video").src = "";
        }
      }
    }
    }