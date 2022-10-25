

var studScores = [];
var studNames = [];
var totalCount = 0;
var barLength = parseInt(20);

function init(){
  document.getElementById('fileInput').addEventListener("change", handleFileSelect, false);
}

function handleFileSelect(event){
  const reader = new FileReader();
  reader.onload = handleFileLoad;
  reader.readAsText(event.target.files[0]);
}

function handleFileLoad(event){
  var stuInfo = event.target.result;
  var studs = stuInfo.split(/\r?\n/);
  var numStuds = Object.keys(studs).length;

  studNames = [];
  studScores = [];

  for (var i = 1; i < numStuds; i++){
    var splitStud = studs[i].split(',');
    var studName = splitStud[0].trim();
    var studScore = splitStud[1];
    studNames.push(studName);
    studScores.push(parseFloat(studScore));
  }

  totalCount = Object.keys(studScores).length;
  document.getElementById("total-stud-count").textContent = totalCount;
  updateBars();
  updateStats();
}

var maxLB = document.getElementById("max-value");
var aPlusLB = document.getElementById("a-plus-value");
var aLB = document.getElementById("a-value");
var aMinusLB = document.getElementById("a-minus-value");
var bPlusLB = document.getElementById("b-plus-value");
var bLB = document.getElementById("b-value");
var bMinusLB = document.getElementById("b-minus-value");
var cPlusLB = document.getElementById("c-plus-value");
var cLB = document.getElementById("c-value");
var cMinusLB = document.getElementById("c-minus-value");
var dLB = document.getElementById("d-value");
var fLB = document.getElementById("f-value");

maxLB.addEventListener("change", updateBars, false);
aPlusLB.addEventListener("change", updateBars, false);
aLB.addEventListener("change", updateBars, false);
aMinusLB.addEventListener("change", updateBars, false);
bPlusLB.addEventListener("change", updateBars, false);
bLB.addEventListener("change", updateBars, false);
bMinusLB.addEventListener("change", updateBars, false);
cPlusLB.addEventListener("change", updateBars, false);
cLB.addEventListener("change", updateBars, false);
cMinusLB.addEventListener("change", updateBars, false);
dLB.addEventListener("change", updateBars, false);
fLB.addEventListener("change", updateBars, false);

function updateBars(){
  var aPlusStuds = 0.0;
  var aStuds = 0.0;
  var aMinusStuds = 0.0;
  var bPlusStuds = 0.0;
  var bStuds = 0.0;
  var bMinusStuds = 0.0;
  var cPlusStuds = 0.0;
  var cStuds = 0.0;
  var cMinusStuds = 0.0;
  var dStuds = 0.0;
  var fStuds = 0.0;

  for(var i = 0; i < totalCount; i++){
    var score = (studScores[i]);
    if(score >= parseFloat(fLB.value) && score < parseFloat(dLB.value)){
      fStuds++;
    } else if(score >= parseFloat(dLB.value) && score < parseFloat(cMinusLB.value)){
      dStuds++;
    } else if(score >= parseFloat(cMinusLB.value) && score < parseFloat(cLB.value)){
      cMinusStuds++;
    } else if(score >= parseFloat(cLB.value) && score < parseFloat(cPlusLB.value)){
      cStuds++;
    } else if(score >= parseFloat(cPlusLB.value) && score < parseFloat(bMinusLB.value)){
      cPlusStuds++;
    } else if(score >= parseFloat(bMinusLB.value) && score < parseFloat(bLB.value)){
      bMinusStuds++;
    } else if(score >= parseFloat(bLB.value) && score < parseFloat(bPlusLB.value)){
      bStuds++;
    } else if(score >= parseFloat(bPlusLB.value) && score < parseFloat(aMinusLB.value)){
      bPlusStuds++;
    } else if(score >= parseFloat(aMinusLB.value) && score < parseFloat(aLB.value)){
      aMinusStuds++;
    } else if(score >= parseFloat(aLB.value) && score < parseFloat(aPlusLB.value)){
      aStuds++;
    } else if(score >= parseFloat(aPlusLB.value) && score <= parseFloat(maxLB.value)){
      aPlusStuds++;
    }
  }

  document.getElementById("a-plus-count").textContent = aPlusStuds;
  document.getElementById("a-count").textContent = aStuds;
  document.getElementById("a-minus-count").textContent = aMinusStuds;
  document.getElementById("b-plus-count").textContent = bPlusStuds;
  document.getElementById("b-count").textContent = bStuds;
  document.getElementById("b-minus-count").textContent = bMinusStuds;
  document.getElementById("c-plus-count").textContent = cPlusStuds;
  document.getElementById("c-count").textContent = cStuds;
  document.getElementById("c-minus-count").textContent = cMinusStuds;
  document.getElementById("d-count").textContent = dStuds;
  document.getElementById("f-count").textContent = fStuds;

  var aPlusBar = (barLength * aPlusStuds) + "px";
  var aBar = (barLength * aStuds) + "px";
  var aMinusBar = (barLength * aMinusStuds) + "px";
  var bPlusBar = (barLength * bPlusStuds) + "px";
  var bBar = (barLength * bStuds) + "px";
  var bMinusBar = (barLength * bMinusStuds) + "px";
  var cPlusBar = (barLength * cPlusStuds) + "px";
  var cBar = (barLength * cStuds) + "px";
  var cMinusBar = (barLength * cMinusStuds) + "px";
  var dBar = (barLength * dStuds) + "px";
  var fBar = (barLength * fStuds) + "px";

  document.getElementById("a-plus-bar").style.width = aPlusBar;
  document.getElementById("a-bar").style.width = aBar;
  document.getElementById("a-minus-bar").style.width = aMinusBar;
  document.getElementById("b-plus-bar").style.width = bPlusBar;
  document.getElementById("b-bar").style.width = bBar;
  document.getElementById("b-minus-bar").style.width = bMinusBar;
  document.getElementById("c-plus-bar").style.width = cPlusBar;
  document.getElementById("c-bar").style.width = cBar;
  document.getElementById("c-minus-bar").style.width = cMinusBar;
  document.getElementById("d-bar").style.width = dBar;
  document.getElementById("f-bar").style.width = fBar;
}

function updateStats(){
  var high = Math.max(...studScores);
  var highIdx = studScores.indexOf(high);

  var heighest = studNames[highIdx] + " (" + high + "%)";
  document.getElementById("heighest").textContent = heighest;

  var low = Math.min(...studScores);
  var lowIdx = studScores.indexOf(low);

  var lowest = studNames[lowIdx] + " (" + low + "%)";
  document.getElementById("lowest").textContent = lowest;

  var sum = 0;
  for(var i = 0; i < totalCount; i++){
    sum = sum + studScores[i];
  }

  var mean = (sum/totalCount).toFixed(2);
  document.getElementById("mean").textContent = mean;
  
  var sorted = studScores.sort(function(a,b) { return a - b;});
  console.log(sorted);
  var median = 0;
  if((totalCount % 2) == 1){
    median = sorted[Math.floor(parseFloat(totalCount/2))];
  } else if((totalCount % 2) == 0){
    var lower = sorted[Math.floor(parseFloat(totalCount/2))];
    var heigher = sorted[Math.ceil(parseFloat(totalCount/2))];
    median = ((lower + heigher)/2).toFixed(2);
  }

  document.getElementById("median").textContent = median;
  
}