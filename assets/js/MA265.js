var exams = [
  { semester: "2019 Fall",
    exam: "Final", 
    link: "https://www.youtube.com/embed/iu5R6jrVJ8M?start=", 
    timestamps: [46,200,538,751,846,1306,1477,1673,2006,2293, 2441, 2856, 3076, 3180, 3435, 3498, 3731, 3894, 4130, 4366, 4718, 4848, 5110, 5196, 5509],
    description: ["Properties of determinants","Rank and nullity","Matrix multiplication","Orthogonal sets","Linear transformations",
    "Linear independence","Compute the determinant","Basis of a space","Subspace of P^n","Matrix facts",
    "Linear independence","Compute the determinant","Rank and nullity","Subspaces of M^n","Dynamical systems",
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
    "Basis of a space","Compute the determinant","Cramer's rule","Polynomial vector spaces","Subspaces of M^n",
    "Subspace of P^n","Basis of a space","Rank and nullity","Gram-Schmidt process","Least squares",
    "Properties of transformations","Matrix facts","Diagonalization","Systems of equations","System of differential equations"]
  },
  {
    semester: "2017 Fall",
    exam: "Final",
    link: "https://www.youtube.com/embed/_p0tXMdMTa8?start=",
    timestamps: [11, 219, 344, 558, 742, 815, 926, 1027, 1130, 1310, 1442, 1617, 1868, 2085, 2146, 2362, 2463, 2961, 3077, 3238, 3381, 3544, 3762, 3979, 4067],
    description: ["Matrix facts","Systems of equations","Matrix facts","Find the inverse","Compute the determinant",
    "Cramer's rule","Find the inverse","Subspaces of R^n","Polynomial vector spaces","Linear independence",
    "Basis of a space","Rank and nullity","Matrix facts","Sum of eigenvalues","Rank and nullity",
    "Orthogonal vectors","Gram-Schmidt process","Orthogonal complement","Least squares","Linear transformations",
    "Properties of eigenvectors","Diagonalizability","Solve x' = "]
  },
  {
    semester: "2017 Spring",
    exam: "Final",
    link: "https://www.youtube.com/embed/jqS_85tiHyE?start=",
    timestamps: [8, 245, 396, 653, 842, 958, 1161, 1344, 1438, 1652, 1740, 1826, 1907, 1957, 2072, 2163, 2266, 2326, 2412, 2684, 2886, 3255, 3347, 3508, 3645],
    description: ["Systems of equations","Consistency","Matrix facts","Rank and nullity","Systems of equations",
    "Properties of determinants","Compute the determinant","Find the inverse","Polynomial vector spaces","Subspaces of R^n",
    "Basis of a space","Rank and nullity","Orthogonal complement","Distance from point to plane","Least squares",
    "Subspaces of R^n","Orthogonal complement","Compute a cofactor","Subspaces of P^n","Rank and nullity",
    "Diagonalization","Compute the eigenvalues","Diagonalizability","Symmetric matrices","System of differential equations"]
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
  
  function updateVideo(semester, question) {
    examId = 'MA265'
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

          dataLayer.push({'event':'questionSelected','examId':examId.concat(' ', semester, ' ', exam, ' Q', question.toString())});
          dataLayer.push({'event':'266topicstream','topicId':exams[i].description[question-1]});
        }
      }
      if(!foundExam) {
        document.getElementById("Video").src = "";
      }
      return(returnPkg)
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