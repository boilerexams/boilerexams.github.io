
// timestamp of 0 indicates question DNE
var exams = [
  { 
    semester: "2019 Fall",
    exam: "Exam 1", 
    link: "https://www.youtube.com/embed/UAUVYrHfJ5I?start=", 
    timestamps: [43,159,299,513,653,771,1101,1235,1371,1529,1884],
    description: ["Cross product planes","Quadratic surface","Angle between vectors","Curvature",
    "Arc length","Particle motion","3D limits","Partial derivative",
    "Gradients","Min max problems","Min max problems"]
  },
  { 
    semester: "2019 Spring",
    exam: "Exam 1", 
    link: "https://www.youtube.com/embed/TA9-ezOW78k?start=", 
    timestamps: [10,161,294,490,678,795,955,1047,1287,1427,1579,1718],
    description: ["Cross product planes","Cross product planes","Intersection parameterization","Curvature",
    "Arc length and particle motion","Particle motion","Level curves","Partial derivative",
    "Multivariable chain rule","Gradients","Tangent planes","Min max problems"]
  },
  {
    semester: "2018 Fall",
    exam: "Exam 1", 
    link: "https://www.youtube.com/embed/PId1CHqVGmE?start=", 
    timestamps: [17,104,228,314,440,572,737,861,952,1086,1380,1536],
    description: ["Line Parameterization","Intersection of planes","Quadratic surfaces","Curvature",
    "Arc length/particle motion","Particle motion","Level curves","3D limits",
    "Tangent planes","Multivariable chain rule","Directional derivative","Min max problems"]
  },
  {
    semester: "2018 Spring",
    exam: "Exam 1", 
    link: "https://www.youtube.com/embed/QLbA7GKKkPs?start=", 
    timestamps: [28,101,250,327,457,563,650,793,894,1083,1345,1817],
    description: ["Quadratic surfaces","Tangent lines","Vector integrals","Cross product for area",
    "Level curves","Arc length","Particle motion","Partial derivative",
    "Multivariable chain rule","Tangent planes","Min max problems","Implicit partial differentiation"]
  },
  {
    semester: "2017 Fall",
    exam: "Exam 1", 
    link: "https://www.youtube.com/embed/Z-J8h5pdEfQ?start=", 
    timestamps: [6,102,310,588,757,877,1083,1301,1649,1787,1925,2084],
    description: ["Dot product planes","Particle motion","Principle Unit Normal Vector","3D limits",
    "Level curves","Multivariable chain rule","Differentials","Min max problems",
    "Directional derivative","Implicit partial differentiation","Tangent planes","Vector Valued Chain Rule"]
  },
  {
    semester: "2017 Spring",
    exam: "Exam 1", 
    link: "https://www.youtube.com/embed/tZ36yr4XlBs?start=", 
    timestamps: [9,470,221,540,730,910,1064,1162,1285,1444,1588,1666],
    description: ["Cross product planes","Quadratic surface","Angle between vectors","Particle motion",
    "Arc length/particle motion","3D limits","Domain of a multivariable function","Multivariable chain rule",
    "Partial derivative","Tangent planes","Partial derivative","Implicit partial differentiation"]
  },
  {
    semester: "2016 Fall",
    exam: "Exam 1", 
    link: "https://www.youtube.com/embed/FPERmmd6AEM?start=", 
    timestamps: [30,205,354,464,679,962,1130,1254,1349,1567,1955,2146],
    description: ["Finding plane","Angle between planes","Quadratic surfaces","Intersecting vector with surface",
    "Arc length","Curvature","Particle motion","3D limits",
    "Multivariable chain rule","Differentials","Partial derivative","Directional derivative"]
  },
  {
    semester: "2016 Spring",
    exam: "Exam 1", 
    link: "https://www.youtube.com/embed/4lIqd4iLtX4?start=", 
    timestamps: [25,75,156,262,374,537,735,1044,1204,1372,1602,1886],
    description: ["Dot product planes","Intersection of planes","Arc length","3D limits",
    "Particle motion","Particle motion","Linear approximations","Multivariable chain rule",
    "Directional derivative","Multiple integration","Min max problems","Min max problems"]
  },
  { 
    semester: "2019 Spring",
    exam: "Exam 2", 
    link: "https://www.youtube.com/embed/xQFS-kwpzfo?start=", 
    timestamps: [1,299,496,634,803,923,1077,1363,1472,1602],
    description: ["Lagrange Multipliers","Reverse order of integration","Polar double integration","Surface area integration",
    "Make a triple integral, rectangular","Rectangular to cylindrical integration","Spherical integration","Gradient algebra",
    "Line integral","Line integral"]
  },
  { 
    semester: "2018 Fall",
    exam: "Exam 2", 
    link: "https://www.youtube.com/embed/U6JSLAINs8I?start=", 
    timestamps: [1,253,382,485,623,1013,1322,1479,1829,2024,2235,2332],
    description: ["Lagrange Multipliers","Lagrange Multipliers","Riemann sum on a rectangle","Reverse order of integration",
    "Polar double integration","Integration for mass","Reordering integration in rectangular coordinates","Cylindrical integration, 29:39 cont.",
    "Cylindrical integration","Spherical integration","Gradient algebra","Gradient vector field picture ID"]
  },
  { 
    semester: "2018 Spring",
    exam: "Exam 2", 
    link: "https://www.youtube.com/embed/?start=", 
    timestamps: [1,117,236,379,570,691,886,1193,1279,1462,1546],
    description: ["Lagrange Multipliers","Double integral on a rectangle","Reverse order of integration","Polar double integration",
    "Reordering integration in rectangular coordinates","Spherical integration","Surface area integration","Convert spherical to cylindrical coordinates",
    "Line integral","Line integral","Line integral"]
  },
  { 
    semester: "2017 Fall",
    exam: "Exam 2", 
    link: "https://www.youtube.com/embed/t9VETCdyWgA?start=", 
    timestamps: [1,119,227,334,503,664,739,892,971,1092],
    description: ["Lagrange Multipliers","Reverse order of integration","Polar double integration","Spherical integration",
    "Make a triple integral in rectangular coordinates”,”Rectangular to cylindrical coordinate integration","Surface area integration","Vector field ID",
    "Line integral","Line integral"]
  },
  { 
    semester: "2017 Spring",
    exam: "Exam 2", 
    link: "https://www.youtube.com/embed/Mk4ZTx9ppt8?start=", 
    timestamps: [22,295,416,539,688,890,1038,1158,1371,1401,1519,1705],
    description: ["Lagrange Multipliers","Double integration general area","Reverse order of integration","Integration for center of mass",
    "Polar double integration","Spherical integration","Surface area integration","Make a triple cylindrical integral",
    "Line integral","Line integral”,”Second derivative test for min max","Fundamental theorem of line integrals"]
  },
  { 
    semester: "2016 Fall",
    exam: "Exam 2", 
    link: "https://www.youtube.com/embed/zNpML76Fxkw?start=", 
    timestamps: [1,81,181,361,494,616,698,820,1056,1180,1368,1466],
    description: ["Gradients","Second derivative test for min max","Lagrange Multipliers","General min maxes",
    "Polar double integration","Make a triple integral in rectangular coordinates”,”Surface area integration","Cylindrical integration",
    "Cylindrical integration","Spherical integration","Gradient vector field ID","Line integral"]
  },
  { 
    semester: "2016 Spring",
    exam: "Exam 2", 
    link: "https://www.youtube.com/embed/U_69oKQO5W0?start=", 
    timestamps: [33,145,300,404,610,726,840,940,1024,1096],
    description: ["Rectangular to polar integration","Surface area integration","Make a triple integral in rectangular coordinates","Rectangular to spherical coordinate integration",
    "Integration for mass","Line integral","Line integral","Line integral",
    "Potential function for vector field","Line integral"]
  },
  {
    semester: "2019 Spring",
    exam: "Final", 
    link: "https://www.youtube.com/embed/YYp45Q6cmLo?start=", 
    timestamps: [29,253,374,651,927,1027,1098,1199,1345,1614,1780,1862,2211,2356,2610,2743,2890,3035,3218,3464],
    description: ["Plane equation","Quadratic surfaces","Fundamental theorem of line integrals","Green's Theorem","Linear approximation",
    "Gradient, curl, and divergence","Partial derivatives","Gradient","Absolute max/min","Rectangular integration",
    "Polar integration","Rectangular integration","Cylindrical integration","Spherical integration","Line integral",
    "Surface integration","Parametric surface integration","Stokes' Theorem","Divergence Theorem","Particle motion"]
  },
  {
    semester: "2018 Fall",
    exam: "Final", 
    link: "https://www.youtube.com/embed/nwEQ5Bmccww?start=", 
    timestamps: [14,126,262,422,574,730,958,1426,1608,1777,1907,2101,2212,2458,2680,2878,3097,3186,3356,3602],
    description: ["Dot product","Quadratic surfaces","Tangent plane","Directional derivative","Implicit differentiation",
    "Lagrange multipliers","Second derivative test","Polar integration","Rectangular integration","Cylindrical integration",
    "Spherical integration","Vector field ID","Fundamental theorem of line integrals","Green's Theorem","Gradient, curl, and divergence",
    "Green's Theorem","Parametric surface integration","Surface integration","Stokes' Theorem","Divergence Theorem"]
  },
  {
    semester: "2018 Spring",
    exam: "Final", 
    link: "https://www.youtube.com/embed/cx7-8A4tomU?start=", 
    timestamps: [14,155,273,405,549,661,819,936,1317,1537,1737,1868,2000,2118,2229,2366,2445,2722,2917,3121],
    description: ["Area of a triangle","Arc length of a curve","Particle motion","2D Riemann sum","Implicit differentiation",
    "Tangent plane","Directional derivative","Rectangular integration","Second derivative test","Center of mass integration",
    "Surface integration","Line integral”,”Green's Theorem","Gradient, curl, and divergence","Parametric surfaces",
    "Parametric surface integration","Parametric surface integration","Flux integration","Stokes' Theorem","Divergence Theorem"]
  },
  {
    semester: "2017 Fall",
    exam: "Final", 
    link: "https://www.youtube.com/embed/snzGJb-fM6o?start=", 
    timestamps: [10,131,212,335,539,742,964,1192,1275,1383,1550,1743,1942,2058,2294,2428,2762,2922,3060,3462],
    description: ["Line equation","Plane equation","Arc length of a curve","Tangent plane","3D limit",
    "Differentials","Absolute max/min","Rectangular integration","Rectangular integration","Integration for mass",
    "Surface integration","Fundamental theorem of line integrals","Green's Theorem","Gradient, curl, and divergence","Parametric surfaces",
    "Surface integration","Stokes' Theorem","Divergence Theorem","Flux integral","Radial vector fields"]
  },
  {
    semester: "2017 Spring",
    exam: "Final", 
    link: "https://www.youtube.com/embed/ym_TqjLBrgY?start=", 
    timestamps: [16,75,165,277,502,560,694,890,1150,1367,1502,1676,1802,1902,2215,2358,2459,2509,2767,3065],
    description: ["Plane equation","Polar integration","Surface integration","Spherical integration","Vector field facts",
    "Fundamental theorem of line integrals","Green's Theorem","Second derivative test","Absolute max/min","Differentials",
    "Tangent plane","Parametric surfaces","Surface integration","Multivariable chain rule","Spherical integration",
    "Tangent line","Arc length of a curve","Surface integration","Stokes' Theorem","Divergence Theorem"]
  },
  {
    semester: "2016 Spring",
    exam: "Final", 
    link: "https://www.youtube.com/embed/tcZzzTLfb7Q?start=", 
    timestamps: [23,153,347,464,555,715,981,1140,1245,1455,1620,1752,1947,2042,2183,2383,2471,2643,2800,2944],
    description: ["Line equation","Plane equation","Curve and surface intersection","3D limit","Tangent plane",
    "Multivariable chain rule","Implicit differentiation","Second derivative test","Rectangular integration","Cylindrical Integration",
    "Spherical integration","Spherical integration","Surface integration","Vector field facts","Fundamental theorem of line integrals",
    "Gradient, curl, and divergence","Surface integration","Flux integration","Divergence Theorem","Stokes' Theorem"]
  }
];

function buildOnload() {
  var alreadyBuilt = [];
  for(var i = 0; i < exams.length; i++) {
    if(!alreadyBuilt.includes(exams[i].semester)) {
      var sel = document.getElementById("semester");
      var opt = document.createElement("option");
          
      opt.appendChild(document.createTextNode(exams[i].semester));
      opt.value = exams[i].semester;
      sel.appendChild(opt);
      alreadyBuilt.push(exams[i].semester);
    }
  }
}

function changeExam() {
  document.getElementById("question-default").innerText = "Question #";
  var semester = document.getElementById("semester").value;
  var numOpt = document.getElementById("question").length;
  var exam = document.getElementById("exam").value;

  var numQuestions = 0;
  
  for(var i = 0; i < exams.length; i++) {
    if(semester == exams[i].semester && exam == exams[i].exam) {
      numQuestions = exams[i].timestamps.length;
      break;
    }
  }
  var examLoc = i;

  if(numOpt > numQuestions) {
    var sel = document.getElementById("question");
    for(i = numOpt; i > numQuestions; i--) {
      sel.remove(i);
    }
  }
  else {
    for(var i = numOpt; i <= numQuestions; i++) {
      // timestamp if question DNE
      if(exams[examLoc].timestamps[i-1] == 0) {
        continue;
      }

      var sel = document.getElementById("question");
      var opt = document.createElement("option");
        
      opt.appendChild(document.createTextNode("Question " + i));
      opt.value = i.toString();
      sel.appendChild(opt);
    }
  }

  updateVideo();
}

function changeSemester() {
  var semester = document.getElementById("semester").value;
  
  var sel = document.getElementById("exam");
  for(i = exams.length; i > 0; i--) {
    sel.remove(i);
  }

  for(var i = 0; i < exams.length; i++) {
    if(semester == exams[i].semester) {
      var sel = document.getElementById("exam");
      var opt = document.createElement("option");
        
      opt.appendChild(document.createTextNode(exams[i].exam));
      opt.value = exams[i].exam;
      sel.appendChild(opt);
    }
  }

  changeExam();
  updateVideo();

}

function updateVideo() {
  var semester = document.getElementById("semester").value;
  var question = document.getElementById("question").value;
  var exam = document.getElementById("exam").value;
  
  if(semester != null && question != "Question #" && exam != "Exam") {
    var foundExam = false;
    question = parseInt(question);

    for(var i = 0; i < exams.length; i++) {
      if(exams[i].semester == semester && exams[i].exam == exam) {
        document.getElementById("video").src = exams[i].link.concat(exams[i].timestamps[question-1]);
        document.getElementById("video-description").innerText = exams[i].description[question-1];
        foundExam = true;
        break;
      }
    }

    if(!foundExam) {
      document.getElementById("Video").src = "";
    }
  }
}
