
var exams = [
    { semester: "2019 Fall", 
      link: "https://www.youtube.com/embed/t9hdIc6yBe4?start=", 
      timestamps: [54,233,388,472,578,785,985,1080,1244,1533,1696,1941,2108,2255,2574,2883,3540,4069,4297,4613],
      description: ["Autonomous eq. stability", "Autonomous eq. stability", "Separation of variables", "Kinematics", "Exact equations", "Exact equations", "Euler's method", "Characteristic equation", "Spring-mass systems", "Undetermined coefficients", "Variation of parameters", "Phase plane identification", "Matrix exponential", "Solve x' = Ax", "Solve x' = Ax + f(t)", "Laplace of a system of eq.", "Piecewise Laplace trans.",	"Laplace Transform", "Laplace IVP", "Laplace IVP"]
    },
    { semester: "2019 Spring",
      link: "https://www.youtube.com/embed/fqET297U3Bc?start=",
      timestamps: [24, 95, 175, 307, 426, 601, 690, 874, 1031, 1228, 1428, 1583, 1699, 1792, 2180, 2396, 2514, 2616, 2784, 2870],
      description: ["Exist. and uniq. theorem",	"Integrating factor",	"Separation of variables",	"Exact equations",	"Characteristic equation",
        "Reduction of order",	"Variation of parameters",	"Homogeneous DE",	"Undetermined coefficients",	"Laplace transform",
        "Laplace IVP",	"Laplace transform",	"Unit step functions",	"Laplace IVP",	"Inverse Laplace transform", "Phase plane identification", "Solve x' = Ax",	"Solve x' = Ax + f(t)",	"Solve x' = Ax",	"Complex eigenvalues"]
    },
    {
      semester: "2018 Fall",
      link: "https://www.youtube.com/embed/BRAxIssBBBM?start=",
      timestamps: [9, 155, 250, 522, 681, 780, 887, 1049, 1283, 1530, 1630, 1687, 1796, 1935, 2179, 2387, 2588, 2830, 2991, 3096],
      description: ["Separation of variables","Salt tank applications","Exact equations","Homogeneous DE","Euler's method",
      "Integrating factor","Autonomouse eq. stability","Characteristic equation","Variation of parameters","Spring-mass system",
      "Characteristic equation","Undetermined coefficients","Reduction of order","Inverse Lapalace transform","Laplace IVP","Laplace IVP","Piecewise Laplace trans.","Complex eigenvalues","Phase plane identification","Solve x' = Ax + f(t)"]
    },
    {
      semester: "2018 Spring",
      link: "https://www.youtube.com/embed/bRZmP2tSskg?start=",
      timestamps: [27, 175, 276, 439, 555, 760, 916, 1064, 1221, 1345, 1578, 1640, 1745, 1822, 2277, 2582, 2816, 2953, 3104, 3328],
      description: ["Separation of variables","Euler's method","Exist. and uniq. theorem","Autonomous eq. stability","Homogeneous DE",
      "Integrating factor","Exact equations","Autonomous eq. stability","Undetermined coefficients","Characteristic equation",
      "Spring-mass systems","Reduction of order","Characteristic equation","Variation of parameters","Inverse Laplace transform",
      "Laplace IVP","Laplace transform","Phase plane identification","Multiple eigenvalues","Complex eigenvalues"]
    },
    {
      semester: "2017 Fall",
      link: "https://www.youtube.com/embed/NL7NA_o-904?start=",
      timestamps: [23, 259, 439, 551, 655, 770, 1043, 1199, 1330, 1519, 1648, 1922, 1981, 2115, 2349, 2632, 3007, 3169, 3266, 3445],
      description: ["Autonomous eq. stability","Integrating factor","Separation of variables","Salt tank applications","Euler's method",
      "Exact equations","Characteristic equation","Exist. and uniq. theorem","Reduction of order","Spring-mass systems",
      "Variation of parameters","Characteristic equation","Undetermined coefficients","Piecewise Laplace trans.","Laplace IVP",
      "Inverse Laplace transform","Laplace transform","Phase plane identification","Solve x' = Ax","Multiple eigenvalues"]
    },
    {
      semester: "2017 Spring",
      link: "https://www.youtube.com/embed/0ZCRCZ8CLio?start=",
      timestamps: [11, 146, 220, 468, 655, 959, 1084, 1189, 1285, 1386, 1638, 1866, 2097, 2293, 2504, 2759, 3027, 3154, 3263, 3496],
      description: ["Integrating factor","Separation of variables","Salt tank applications","v = y / x substitution","Exact equations",
      "Autonomous eq. stability","Euler's method","Exist. and uniq. theorem","Reduction of order","Variation of parameters",
      "Electric circuits","Undetermined coefficients","Undetermined coefficients","Inverse Laplace transform","Piecewise Laplace trans.",
      "Laplace IVP","Laplace transform","Phase plane identification","Mutliple eigenvalues","Fundamental matrix"]
    }
    ];

function updateVideo() {
  var semester = document.getElementById("semester").value;
  var question = document.getElementById("question").value;
  
  if(semester != null && question != "Question #") {
    var foundExam = false;
    question = parseInt(question);
  
    for(var i = 0; i < exams.length; i++) {
      if(exams[i].semester == semester) {
        document.getElementById("Video").src = exams[i].link.concat(exams[i].timestamps[question-1]);
        document.getElementById("video-description").innerText = exams[i].description[question-1];
        foundExam = true;
      }
    }

    if(!foundExam) {
      document.getElementById("Video").src = "";
    }
  }
}

